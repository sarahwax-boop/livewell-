import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import CheckoutClient from "@/components/CheckoutClient";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function CheckoutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CheckoutClient locale={locale} />;
}
