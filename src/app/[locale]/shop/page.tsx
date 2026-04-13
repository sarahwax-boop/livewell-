import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import ShopClient from "@/components/ShopClient";
export const dynamic = "force-dynamic";
interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Boutique" : "Winkel",
    alternates: { languages: { fr: "/fr/shop", nl: "/nl/shop" } },
  };
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  return <ShopClient locale={locale} />;
}
