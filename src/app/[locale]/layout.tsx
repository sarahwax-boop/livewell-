import type { Metadata } from "next";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RedirectModal from "@/components/RedirectModal";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";
  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://livewellshop.be",
    ),
    title: {
      default: isFr
        ? "Live Well — Compléments premium pour votre bien-être"
        : "Live Well — Premium supplementen voor uw welzijn",
      template: "%s | Live Well",
    },
    description: isFr
      ? "Des compléments scientifiquement formulés pour votre énergie, votre beauté et votre immunité."
      : "Wetenschappelijk geformuleerde supplementen voor uw energie, schoonheid en immuniteit.",
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", nl: "/nl" },
    },
    openGraph: {
      siteName: "Live Well",
      locale: isFr ? "fr_BE" : "nl_BE",
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

  // Validate locale
  if (!routing.locales.includes(locale as any)) notFound();

  // CRITICAL: setRequestLocale enables server components (Footer, page.tsx etc.)
  // to read the correct locale via getTranslations/getTranslations
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bricolage.variable} ${jost.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale as Locale} />
          <main>{children}</main>
          <Footer locale={locale as Locale} />
          <CartDrawer locale={locale as Locale} />
          <RedirectModal locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
