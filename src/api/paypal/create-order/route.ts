import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API = "https://api-m.paypal.com";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const SECRET = process.env.PAYPAL_SECRET_KEY!;

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
  console.log("PayPal token response:", JSON.stringify(data));
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    console.log("CLIENT_ID:", CLIENT_ID ? "present" : "MISSING");
    console.log("SECRET:", SECRET ? "present" : "MISSING");
    const { total } = await req.json();
    const accessToken = await getAccessToken();
    console.log("Access token:", accessToken ? "present" : "MISSING");

    const res = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: total.toFixed(2),
            },
          },
        ],
      }),
    });

    const order = await res.json();
    console.log("PayPal order response:", JSON.stringify(order));
    return NextResponse.json(order);
  } catch (err) {
    console.error("Create order error:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}