import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RedirectModal from "@/components/RedirectModal";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://livewellshop.be",
    ),
    title: {
      default: "Live Well — Premium supplements for your wellbeing",
      template: "%s | Live Well",
    },
    description:
      "Scientifically formulated supplements for your energy, beauty and immunity.",
    alternates: { canonical: "/" },
    openGraph: {
      siteName: "Live Well",
      locale: "en_IE",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en")) notFound();

  // CRITICAL: setRequestLocale enables server components (Footer, page.tsx etc.)
  // to read the correct locale via getTranslations/getTranslations
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale as Locale} />
      <main>{children}</main>
      <Footer />
      <CartDrawer locale={locale as Locale} />
      <RedirectModal locale={locale as Locale} />
    </NextIntlClientProvider>
  );
}
