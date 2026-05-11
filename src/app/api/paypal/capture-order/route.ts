import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const PAYPAL_API = "https://api-m.paypal.com";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const SECRET = process.env.PAYPAL_SECRET_KEY!;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function getAccessToken() {
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });
  const data = await res.json();
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { orderID, shipping, items, total } = await req.json();

    // 1. Capture the PayPal payment
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return NextResponse.json(
        { error: "PayPal Authentication Failed" },
        { status: 500 },
      );
    }

    const res = await fetch(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const details = await res.json();

    if (!res.ok) {
      console.error("PayPal capture error:", details);
      return NextResponse.json(
        { error: details.message || "Failed to capture PayPal order" },
        { status: res.status },
      );
    }

    // 2. If capture succeeded, send order notification email
    if (details.status === "COMPLETED" && shipping) {
      try {
        const itemsList = (items || [])
          .map(
            (item: any) =>
              `${item.name} × ${item.qty} — €${(item.price * item.qty).toFixed(2)}`,
          )
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

Total: €${Number(total).toFixed(2)}
Livraison: Offerte

PayPal Order ID: ${orderID}
          `,
        });
      } catch (emailErr) {
        // Log email failure but don't fail the payment response
        console.error("Email notification error:", emailErr);
      }
    }

    return NextResponse.json(details);
  } catch (err) {
    console.error("Capture order error:", err);
    return NextResponse.json(
      { error: "Failed to capture order" },
      { status: 500 },
    );
  }
}