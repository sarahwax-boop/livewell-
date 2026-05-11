import { NextRequest, NextResponse } from "next/server";
import { ALL_PRODUCTS } from "@/lib/products";

const PAYPAL_API = "https://api-m.paypal.com";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const SECRET = process.env.PAYPAL_SECRET_KEY!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = body.items || [];

    // Calculate total securely from our single source of truth
    const secureTotal = items.reduce((acc: number, item: any) => {
      const product = ALL_PRODUCTS.find(
        (p) => String(p.id) === String(item.id),
      );
      return acc + (product ? product.price * item.qty : 0);
    }, 0);

    if (secureTotal <= 0) {
      return NextResponse.json(
        { error: "Total is 0. Check product IDs." },
        { status: 400 },
      );
    }

    // Get PayPal Access Token
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");
    const tokenRes = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${auth}`,
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("PayPal token response:", tokenData);
      return NextResponse.json(
        { error: "PayPal Authentication Failed" },
        { status: 500 },
      );
    }

    // Create the actual PayPal Order
    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
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
              value: secureTotal.toFixed(2),
            },
          },
        ],
      }),
    });

    const order = await orderRes.json();

    if (!orderRes.ok) {
      console.error("PayPal create-order error:", order);
      return NextResponse.json(
        { error: order.message || "Failed to create PayPal order" },
        { status: orderRes.status },
      );
    }

    return NextResponse.json(order);
  } catch (err: any) {
    console.error("Create order error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}