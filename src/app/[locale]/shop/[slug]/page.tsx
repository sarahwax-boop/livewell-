import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { ALL_PRODUCTS, getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import PDPClient from "@/components/PDPClient";
export const dynamic = "force-dynamic";
interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.flatMap((p) =>
    (["fr", "nl"] as Locale[]).map((locale) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name[locale],
    description: product.tagline[locale],
    alternates: {
      languages: { fr: `/fr/shop/${slug}`, nl: `/nl/shop/${slug}` },
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: "Product" });

  const labels = {
    addToCart: t("addToCart"),
    addedToCart: t("addedToCart"),
    buyNow: t("buyNow"),
    guarantee: t("guarantee"),
    guaranteeBody: t("guaranteeBody"),
    disclaimer: t("disclaimer"),
    quantity: t("quantity"),
    clients: t("clients"),
    save: t("save"),
    tabDesc: t("tabDescription"),
    tabIng: t("tabIngredients"),
    tabSafety: t("tabSafety"),
    related: t("related"),
    relatedSub: t("relatedSub"),
    crumbHome: t("breadcrumbHome"),
    crumbShop: t("breadcrumbShop"),
  };

  const related = ALL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <PDPClient
      product={product}
      related={related}
      locale={locale}
      labels={labels}
    />
  );
}
