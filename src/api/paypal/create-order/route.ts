import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API = "https://api-m.paypal.com";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const SECRET = process.env.PAYPAL_SECRET_KEY!;

const PRODUCTS_DATABASE = [
  { id: "test", price: 27.00 },
  { id: "radiantglow", price: 34.90 },
  { id: "berberine", price: 30.00 },
  { id: "appetite-strips", price: 27.90 },
  { id: "hangover-strips", price: 27.00 },
  { id: "nad-booster", price: 28.00 },
  { id: "mushroom-synergy", price: 34.90 },
  { id: "mushroomfocusstrip", price: 33.90 },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = body.items || [];

    // Calculate total securely from our internal list
    const secureTotal = items.reduce((acc: number, item: any) => {
      const product = PRODUCTS_DATABASE.find(p => String(p.id) === String(item.id));
      return acc + (product ? product.price * item.qty : 0);
    }, 0);

    if (secureTotal <= 0) {
      return NextResponse.json({ error: "Total is 0. Check product IDs." }, { status: 400 });
    }

    // Get PayPal Access Token
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");
    const tokenRes = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded", 
        Authorization: `Basic ${auth}` 
      },
      body: "grant_type=client_credentials",
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      return NextResponse.json({ error: "PayPal Authentication Failed" }, { status: 500 });
    }

    // Create the actual PayPal Order
    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        Authorization: `Bearer ${accessToken}` 
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "EUR",
            value: secureTotal.toFixed(2),
          },
        }],
      }),
    });

    const order = await orderRes.json();
    return NextResponse.json(order);

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}