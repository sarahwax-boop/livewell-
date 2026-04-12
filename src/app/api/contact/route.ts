import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminSupabaseClient } from "@/lib/supabase";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Save to Supabase
    const supabase = createAdminSupabaseClient();
    await supabase.from("contacts").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      subject,
      message,
    });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `📩 Nouveau message — ${firstName} ${lastName} | ${subject}`,
      text: `
NOUVEAU MESSAGE DE CONTACT

NOM: ${firstName} ${lastName}
EMAIL: ${email}
SUJET: ${subject}

MESSAGE:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}