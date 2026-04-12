import { NextRequest, NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { shipping, items, total, paypalOrderId } = await req.json();

    const supabase = createAdminSupabaseClient();

    const { error } = await supabase.from("orders").insert({
      paypal_order_id: paypalOrderId,
      first_name: shipping.firstName,
      last_name: shipping.lastName,
      email: shipping.email,
      phone: shipping.phone,
      address1: shipping.address1,
      address2: shipping.address2,
      city: shipping.city,
      country: shipping.country,
      items: items,
      total: total,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save order error:", err);
    return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
  }
}