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
    // 1. Get items from the request
    const body = await req.json();
    const { items } = body;

    // 2. Calculate secure total inside the POST function
    const serverSideTotal = items.reduce((acc: number, item: any) => {
      const product = PRODUCTS_DATABASE.find(p => String(p.id) === String(item.id));
      const price = product ? product.price : 0;
      return acc + (price * item.qty);
    }, 0);

    console.log("Calculated Secure Total:", serverSideTotal);

    // Stop if total is zero (this prevents the window disappearing)
    if (serverSideTotal <= 0) {
      console.error("Total is 0. Check if Product IDs match.");
      return NextResponse.json({ error: "Invalid Total" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    // 3. Create the PayPal order
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
              value: serverSideTotal.toFixed(2), // Use the secure total here
            },
          },
        ],
      }),
    });

    const order = await res.json();
    return NextResponse.json(order);

  } catch (err) {
    console.error("Create order error:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}