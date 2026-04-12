import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { shipping, items, total } = await req.json();

    const itemsList = items
      .map((item: any) => `${item.name} × ${item.qty} — €${(item.price * item.qty).toFixed(2)}`)
      .join("\n");

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🛒 Nouvelle commande — ${shipping.firstName} ${shipping.lastName}`,
      text: `
NOUVELLE COMMANDE

CLIENT
------
Nom: ${shipping.firstName} ${shipping.lastName}
Email: ${shipping.email}
Téléphone: ${shipping.phone}

ADRESSE DE LIVRAISON
--------------------
${shipping.address1}
${shipping.address2 ? shipping.address2 + "\n" : ""}${shipping.city}
${shipping.country}

COMMANDE
--------
${itemsList}

Total: €${total.toFixed(2)}
Livraison: Offerte
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}