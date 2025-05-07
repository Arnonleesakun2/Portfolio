import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, title, description } = body;
    if (!email || !title || !description) {
      return NextResponse.json(
        { error: "Email, title, and description are required" },
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER, // ส่งจาก น
      to: process.env.NEXT_PUBLIC_EMAIL_TO || process.env.EMAIL_USER, // นของ น้ Zot
      subject: `New message from ${title}`, // นข้อ น
      text: `You have received a message from ${email}.\n\nMessage: ${description}`, // เนื้อหา น
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${title}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 4px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 10px;">${description.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
