import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      institution,
      workshop,
      participants,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !institution || !workshop) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Name, email, institution and workshop are required.",
        },
        { status: 400 }
      );
    }

    const subject = `[MontrixTech Workshops] New enquiry from ${name}`;

    const textBody = `
New workshop enquiry received from the MontrixTech website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Institution: ${institution}
Workshop: ${workshop}
Participants: ${participants || "Not provided"}

Message:
${message || "No additional message provided."}

--------------------------------
This enquiry was submitted through the MontrixTech website.
`;

    const command = new SendEmailCommand({
      FromEmailAddress: process.env.CONTACT_FROM_EMAIL!,
      Destination: {
        ToAddresses: [
          process.env.WORKSHOP_TO_EMAIL || "workshop@montrixtech.in",
        ],
      },
      ReplyToAddresses: [email],

      Content: {
        Simple: {
          Subject: {
            Data: subject,
            Charset: "UTF-8",
          },

          Body: {
            Text: {
              Data: textBody,
              Charset: "UTF-8",
            },
          },
        },
      },
    });

    await ses.send(command);

    console.log("Workshop enquiry email sent successfully.");

    return NextResponse.json({
      ok: true,
      message: "Workshop enquiry sent successfully.",
    });
  } catch (error) {
    console.error("SES workshop email error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}