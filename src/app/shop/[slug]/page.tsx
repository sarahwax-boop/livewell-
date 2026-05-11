import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ALL_PRODUCTS, getProductBySlug } from "@/lib/products";
import PDPClient from "@/components/PDPClient";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name.en,
    description: product.tagline.en,
    alternates: { canonical: `/shop/${slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  setRequestLocale("en");
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale: "en", namespace: "Product" });

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

  const related = ALL_PRODUCTS.filter((p) => p.id !== product!.id).slice(0, 3);

  return (
    <PDPClient
      product={product!}
      related={related}
      locale="en"
      labels={labels}
    />
  );
}
