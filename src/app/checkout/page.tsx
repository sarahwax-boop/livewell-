import { setRequestLocale } from "next-intl/server";
import CheckoutClient from "@/components/CheckoutClient";

export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  setRequestLocale("en");
  return <CheckoutClient locale="en" />;
}
