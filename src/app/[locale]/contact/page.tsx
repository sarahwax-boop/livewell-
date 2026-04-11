import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import ContactForm from "@/components/ContactForm";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: locale === "fr" ? "Contact" : "Contact",
    description: t("sub"),
    alternates: { languages: { fr: "/fr/contact", nl: "/nl/contact" } },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  const labels = {
    eyebrow: t("eyebrow"),
    heading: t("heading"),
    sub: t("sub"),
    talkTitle: t("talkTitle"),
    talkBody: t("talkBody"),
    emailLabel: t("emailLabel"),
    addressLabel: t("addressLabel"),
    address:
      locale === "fr"
        ? "Live Well SRL\nBruxelles, Belgique"
        : "Live Well SRL\nBrussel, België",
    hoursLabel: t("hoursLabel"),
    hours: t("hours"),
    promiseTitle: t("promiseTitle"),
    promise1: t("promise1"),
    promise2: t("promise2"),
    promise3: t("promise3"),
    formTitle: t("formTitle"),
    firstName: t("firstName"),
    lastName: t("lastName"),
    email: t("email"),
    subject: t("subject"),
    subjectPlaceholder: t("subjectPlaceholder"),
    subjectOrder: t("subjectOrder"),
    subjectProduct: t("subjectProduct"),
    subjectReturn: t("subjectReturn"),
    subjectOther: t("subjectOther"),
    message: t("message"),
    messagePlaceholder: t("messagePlaceholder"),
    send: t("send"),
    privacyNote: t("privacyNote"),
    privacyLink: t("privacyLink"),
    success: t("success"),
  };

  return <ContactForm locale={locale} labels={labels} />;
}
