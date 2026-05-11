import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  setRequestLocale("en");
  const t = await getTranslations({ locale: "en", namespace: "Contact" });
  return {
    title: "Contact",
    description: t("sub"),
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage() {
  setRequestLocale("en");
  const t = await getTranslations({ locale: "en", namespace: "Contact" });

  const labels = {
    eyebrow: t("eyebrow"),
    heading: t("heading"),
    sub: t("sub"),
    talkTitle: t("talkTitle"),
    talkBody: t("talkBody"),
    emailLabel: t("emailLabel"),
    addressLabel: t("addressLabel"),
    address: t("address"),
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

  return <ContactForm locale="en" labels={labels} />;
}
