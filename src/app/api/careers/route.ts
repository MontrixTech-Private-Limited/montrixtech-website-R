import { NextResponse } from "next/server";
import { z } from "zod";

const ApplicationSchema = z.object({
  name: z.string().min(3).max(60),
  email: z.string().email().max(100),
  phone: z.string().min(6).max(20),
  portfolio: z.string().max(300).optional().or(z.literal("")),
  why: z.string().min(20).max(500),
  role: z.string().min(2).max(100),
  ref: z.string().max(50).optional().or(z.literal("")),
});

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(request: Request) {
  try {
    // The frontend now sends multipart/form-data because it includes a PDF.
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const portfolio = String(formData.get("portfolio") || "").trim();
    const why = String(formData.get("why") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const ref = String(formData.get("ref") || "").trim();

    const resumeEntry = formData.get("resume");

    if (!(resumeEntry instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "Please upload your resume as a PDF file." },
        { status: 422 }
      );
    }

    if (resumeEntry.type !== "application/pdf") {
      return NextResponse.json(
        { ok: false, error: "Only PDF resumes are accepted." },
        { status: 422 }
      );
    }

    if (resumeEntry.size === 0) {
      return NextResponse.json(
        { ok: false, error: "The uploaded PDF is empty." },
        { status: 422 }
      );
    }

    if (resumeEntry.size > MAX_RESUME_SIZE) {
      return NextResponse.json(
        { ok: false, error: "Resume PDF must be 5 MB or smaller." },
        { status: 422 }
      );
    }

    const parsed = ApplicationSchema.safeParse({
      name,
      email,
      phone,
      portfolio,
      why,
      role,
      ref,
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check the application details and try again.",
        },
        { status: 422 }
      );
    }

    const application = parsed.data;

    const provider = (process.env.EMAIL_PROVIDER || "console").toLowerCase();
    const to = process.env.CAREERS_TO_EMAIL || "careers@montrixtech.in";
    const from =
      process.env.CONTACT_FROM_EMAIL || "no-reply@montrixtech.in";

    const subject = `[MontrixTech Careers] ${application.role} — ${application.name}`;

    const text = [
      "New career application received via montrixtech.in.",
      "",
      `Role: ${application.role}`,
      `Reference: ${application.ref || "N/A"}`,
      `Name: ${application.name}`,
      `Email: ${application.email}`,
      `Phone: ${application.phone}`,
      `Resume: ${resumeEntry.name}`,
      application.portfolio ? `Portfolio: ${application.portfolio}` : "",
      "",
      "Why this role:",
      application.why,
    ]
      .filter(Boolean)
      .join("\n");

    // Convert the uploaded PDF to base64 so email providers can attach it.
    const resumeBuffer = Buffer.from(await resumeEntry.arrayBuffer());
    const resumeBase64 = resumeBuffer.toString("base64");

    try {
      if (provider === "resend") {
        const key = process.env.RESEND_API_KEY;

        if (!key) {
          throw new Error("RESEND_API_KEY is not configured");
        }

        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: [to],
            subject,
            text,
            reply_to: application.email,
            attachments: [
              {
                filename: resumeEntry.name || "resume.pdf",
                content: resumeBase64,
              },
            ],
          }),
        });

        if (!response.ok) {
          const providerError = await response.text().catch(() => "");
          console.error("[careers] Resend error:", providerError);
          throw new Error("The email provider rejected the application.");
        }
      } else if (provider === "sendgrid") {
        const key = process.env.SENDGRID_API_KEY;

        if (!key) {
          throw new Error("SENDGRID_API_KEY is not configured");
        }

        const response = await fetch(
          "https://api.sendgrid.com/v3/mail/send",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              personalizations: [
                {
                  to: [{ email: to }],
                },
              ],
              from: { email: from },
              reply_to: { email: application.email },
              subject,
              content: [
                {
                  type: "text/plain",
                  value: text,
                },
              ],
              attachments: [
                {
                  content: resumeBase64,
                  filename: resumeEntry.name || "resume.pdf",
                  type: "application/pdf",
                  disposition: "attachment",
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          const providerError = await response.text().catch(() => "");
          console.error("[careers] SendGrid error:", providerError);
          throw new Error("The email provider rejected the application.");
        }
      } else {
        // Useful while developing locally.
        console.log("[careers] application received:");
        console.log(text);
        console.log(`[careers] resume: ${resumeEntry.name} (${resumeEntry.size} bytes)`);
      }

      return NextResponse.json({ ok: true });
    } catch (error) {
      console.error("[careers] send failed", error);

      return NextResponse.json(
        {
          ok: false,
          error:
            "Unable to send your application. Please try again later.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[careers] request parsing failed", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unable to process your application. Please try again.",
      },
      { status: 400 }
    );
  }
}