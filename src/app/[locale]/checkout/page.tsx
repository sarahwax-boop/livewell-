import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import CheckoutClient from "@/components/CheckoutClient";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function CheckoutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Cart" });

  return <CheckoutClient locale={locale} />;
}
