import type { Metadata } from "next";
import { Bricolage_Grotesque, Jost } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import RedirectModal from "@/components/RedirectModal";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale("en");
  const messages = await getMessages();

  return (
    <html lang="en" className={`${bricolage.variable} ${jost.variable}`}>
      <body>
        <NextIntlClientProvider locale="en" messages={messages}>
          <Header locale="en" />
          <main>{children}</main>
          <Footer />
          <CartDrawer locale="en" />
          <RedirectModal locale="en" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
