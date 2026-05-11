import type { Metadata } from "next";
import ShopClient from "@/components/ShopClient";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shop",
    alternates: { canonical: "/shop" },
  };
}

export default function ShopPage() {
  return <ShopClient locale="en" />;
}
