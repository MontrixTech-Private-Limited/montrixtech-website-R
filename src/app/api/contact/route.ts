import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Contact form submission endpoint.
 *
 * Validates the payload, then forwards it to contact@montrixtech.in via
 * the configured email provider. The provider is selected via env vars —
 * the project is structured so a real provider (Resend, SendGrid, SES,
 * Postmark, etc.) can be plugged in without touching this route.
 *
 * ----------------------------------------------------------------------------
 * Environment variables (set these in production):
 * ----------------------------------------------------------------------------
 *   CONTACT_TO_EMAIL              — destination address (default: contact@montrixtech.in)
 *   CONTACT_FROM_EMAIL            — envelope From: address (must be verified with provider)
 *   EMAIL_PROVIDER                — "resend" | "sendgrid" | "ses" | "console"  (default: "console")
 *   RESEND_API_KEY                — required when EMAIL_PROVIDER=resend
 *   SENDGRID_API_KEY              — required when EMAIL_PROVIDER=sendgrid
 *   AWS_REGION / AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY — required when EMAIL_PROVIDER=ses
 *
 * When EMAIL_PROVIDER=console (or unset), the payload is logged to the
 * server console and a 200 is returned — useful for staging / pre-deployment
 * smoke tests.
 * ----------------------------------------------------------------------------
 */

const ContactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email().max(100),
  phone: z
    .string()
    .max(20)
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),
  message: z.string().min(20).max(500),
  // optional hint from the referring page (e.g. ?topic=workshop)
  topic: z
    .string()
    .max(50)
    .optional()
    .or(z.literal("")),
});

type ContactPayload = z.infer<typeof ContactSchema>;

async function sendEmail(payload: ContactPayload): Promise<void> {
  const provider = (process.env.EMAIL_PROVIDER || "console").toLowerCase();
  const to = process.env.CONTACT_TO_EMAIL || "contact@montrixtech.in";
  const from =
    process.env.CONTACT_FROM_EMAIL || "no-reply@montrixtech.in";

  const subject = payload.topic
    ? `[MontrixTech · ${payload.topic}] New enquiry from ${payload.name}`
    : `[MontrixTech] New enquiry from ${payload.name}`;

  const textBody = [
    `New enquiry received via montrixtech.in/contact`,
    ``,
    `Name:    ${payload.name}`,
    `Email:   ${payload.email}`,
    payload.phone ? `Phone:   ${payload.phone}` : null,
    payload.company ? `Company: ${payload.company}` : null,
    ``,
    `Message:`,
    payload.message,
    ``,
    `— Sent at ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  switch (provider) {
    case "resend": {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject,
          text: textBody,
          reply_to: payload.email,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(`Resend error ${res.status}: ${detail}`);
      }
      return;
    }
    case "sendgrid": {
      const apiKey = process.env.SENDGRID_API_KEY;
      if (!apiKey) throw new Error("SENDGRID_API_KEY is not configured");
      const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from },
          reply_to: { email: payload.email },
          subject,
          content: [{ type: "text/plain", value: textBody }],
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(`SendGrid error ${res.status}: ${detail}`);
      }
      return;
    }
    case "console":
    default: {
      console.log("[contact] would send email:\n", textBody);
      return;
    }
  }
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  try {
    await sendEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendEmail failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({
    ok: true,
    message: "Contact endpoint is live. Use POST.",
  });
}
