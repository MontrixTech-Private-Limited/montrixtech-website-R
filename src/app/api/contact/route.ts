import { NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({
  region: process.env.SES_AWS_REGION,
  credentials: {
    accessKeyId: process.env.SES_AWS_ACCESS_KEY_ID!,
secretAccessKey: process.env.SES_AWS_SECRET_ACCESS_KEY!,  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      message,
      topic,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const subject = topic
      ? `[MontrixTech · ${topic}] New enquiry from ${name}`
      : `[MontrixTech] New enquiry from ${name}`;

    const textBody = `
New enquiry received from the MontrixTech website.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Topic: ${topic || "General enquiry"}

Message:
${message}

--------------------------------
This message was submitted through the MontrixTech website.
`;

    const command = new SendEmailCommand({
      FromEmailAddress: process.env.CONTACT_FROM_EMAIL!,
      Destination: {
        ToAddresses: [
          process.env.CONTACT_TO_EMAIL || "contact@montrixtech.in",
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

    console.log("Contact email sent successfully.");

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("SES contact email error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}