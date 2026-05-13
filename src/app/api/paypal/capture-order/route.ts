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

    // 2. If capture succeeded, send emails
    if (details.status === "COMPLETED" && shipping) {
      try {
        const itemsArray = items || [];

        const itemsRowsHtml = itemsArray
          .map(
            (item: any) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0ebe3;font-size:14px;color:#333;">${item.name}</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0ebe3;font-size:14px;color:#333;text-align:center;">× ${item.qty}</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0ebe3;font-size:14px;color:#333;text-align:right;">€${(item.price * item.qty).toFixed(2)}</td>
            </tr>`,
          )
          .join("");

        const itemsTextList = itemsArray
          .map((item: any) => `- ${item.name} × ${item.qty} — €${(item.price * item.qty).toFixed(2)}`)
          .join("\n");

        // Customer confirmation email
        await transporter.sendMail({
          from: `"LiveWell" <${process.env.GMAIL_USER}>`,
          to: shipping.email,
          subject: `Order confirmed — Thank you, ${shipping.firstName}!`,
          html: `
            <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;background:#fff;padding:40px 32px;color:#333;">
              <h1 style="font-size:28px;font-weight:normal;color:#2c2c2c;margin-bottom:6px;">Thank you for your order!</h1>
              <p style="font-size:15px;color:#666;margin-top:0;">Hi ${shipping.firstName}, your payment was successful and your order is confirmed.</p>

              <div style="background:#f8f4ee;border-radius:10px;padding:20px 24px;margin:28px 0;">
                <p style="margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#999;">Order reference</p>
                <p style="margin:0;font-size:14px;font-family:monospace;color:#555;">${orderID}</p>
              </div>

              <h2 style="font-size:16px;font-weight:600;color:#2c2c2c;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">Your items</h2>
              <table style="width:100%;border-collapse:collapse;">
                <thead>
                  <tr>
                    <th style="text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#999;padding-bottom:8px;">Product</th>
                    <th style="text-align:center;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#999;padding-bottom:8px;">Qty</th>
                    <th style="text-align:right;font-size:12px;text-transform:uppercase;letter-spacing:0.06em;color:#999;padding-bottom:8px;">Price</th>
                  </tr>
                </thead>
                <tbody>${itemsRowsHtml}</tbody>
              </table>
              <div style="display:flex;justify-content:space-between;padding:14px 0 0;border-top:2px solid #2c2c2c;margin-top:4px;">
                <span style="font-size:16px;font-weight:600;">Total</span>
                <span style="font-size:16px;font-weight:600;">€${Number(total).toFixed(2)}</span>
              </div>
              <p style="font-size:13px;color:#999;margin-top:6px;">Free shipping included</p>

              <h2 style="font-size:16px;font-weight:600;color:#2c2c2c;margin:28px 0 12px;text-transform:uppercase;letter-spacing:0.06em;">Shipping to</h2>
              <p style="font-size:14px;color:#555;line-height:1.7;margin:0;">
                ${shipping.firstName} ${shipping.lastName}<br/>
                ${shipping.address2}<br/>
                ${shipping.address1 ? shipping.address1 + "<br/>" : ""}
                ${shipping.postcode} ${shipping.city}<br/>
                ${shipping.country}
              </p>

              <p style="font-size:13px;color:#999;margin-top:36px;border-top:1px solid #f0ebe3;padding-top:20px;">
                If you have any questions about your order, reply to this email and we'll be happy to help.
              </p>
              <p style="font-size:13px;color:#999;margin-top:16px;text-align:center;">
                <a href="https://www.livewell-shop.com/" style="color:#b89b6a;text-decoration:none;font-weight:600;">www.livewell-shop.com</a>
              </p>
            </div>
          `,
          text: `Thank you for your order, ${shipping.firstName}!\n\nOrder reference: ${orderID}\n\nITEMS\n${itemsTextList}\n\nTotal: €${Number(total).toFixed(2)} (free shipping)\n\nShipping to:\n${shipping.firstName} ${shipping.lastName}\n${shipping.address2}\n${shipping.address1 ? shipping.address1 + "\n" : ""}${shipping.postcode} ${shipping.city}\n${shipping.country}\n\nReply to this email if you have any questions.\n\nhttps://www.livewell-shop.com/`,
        });

        // Merchant notification email
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER,
          subject: `New order — ${shipping.firstName} ${shipping.lastName} — €${Number(total).toFixed(2)}`,
          text: `NEW ORDER

CUSTOMER
--------
Name: ${shipping.firstName} ${shipping.lastName}
Email: ${shipping.email}
Phone: ${shipping.phone}

SHIPPING ADDRESS
----------------
${shipping.address2}
${shipping.address1 ? shipping.address1 + "\n" : ""}${shipping.postcode} ${shipping.city}
${shipping.country}

ORDER
-----
${itemsTextList}

Total: €${Number(total).toFixed(2)}
Shipping: Free

PayPal Order ID: ${orderID}`,
        });
      } catch (emailErr) {
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