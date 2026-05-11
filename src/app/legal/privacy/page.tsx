import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy",
    alternates: { canonical: "/legal/privacy" },
  };
}

const CONTENT = {
  title: "Privacy Policy",
  updated: "Last updated: 1 January 2026 · GDPR compliant",
  sections: [
    {
      h: "1. Data Controller",
      p: "The data controller for personal data collected via the website livewellshop.be is Live Well Ltd, Dublin, Ireland — support@livewell.be",
    },
    {
      h: "2. Data Collected",
      p: "In connection with your use of the website, Live Well may collect the following categories of data: identification data (name, first name, email address), navigation data (IP address, pages visited, visit duration), cart data (selected products, stored locally in your browser via localStorage) and contact form data (name, email, subject, message). Live Well does not directly collect your payment data.",
    },
    {
      h: "3. Purposes of Processing",
      p: "The data collected is used for the following purposes: responding to your requests via the contact form, improving user experience and website performance, analysing website traffic and usage (anonymised statistics), redirecting you to our partner Everen to finalise your purchases, and complying with our legal and regulatory obligations.",
    },
    {
      h: "4. Legal Basis for Processing",
      p: "The processing of your personal data is based on your consent for analytical and marketing cookies, the legitimate interest of Live Well for strictly necessary cookies for the operation of the website, the performance of a contract for the processing of contact requests, and compliance with legal obligations for the retention of certain documents.",
    },
    {
      h: "5. Cookies and Local Storage",
      p: "Our website uses essential cookies for operation (cart, navigation) and analytical cookies (audience, performance). The contents of your cart are stored locally in your browser via localStorage technology. This data remains on your device and is not transmitted to our servers. You can delete it at any time by clearing your browser cache.",
    },
    {
      h: "6. Data Sharing",
      p: "Live Well does not sell, rent or transfer your personal data to third parties. Your data may be passed to Everen (geteveren.com) when you are redirected to finalise a purchase, and to technical service providers (hosting, audience analysis) strictly within the scope of their assignments.",
    },
    {
      h: "7. Retention Periods",
      p: "Contact data: 3 years from the last contact. Navigation data: 13 months maximum. Cart data (localStorage): until deleted by the user. Accounting data: 7 years (legal obligation).",
    },
    {
      h: "8. Your Rights",
      p: "Under GDPR, you have the right of access, rectification, erasure, portability, objection and restriction regarding your personal data. To exercise these rights, contact us at support@livewell.be. You also have the right to lodge a complaint with your national data protection authority.",
    },
    {
      h: "9. Security",
      p: "Live Well implements appropriate technical and organisational measures to protect your data against unauthorised access, loss, destruction or disclosure. Our website is secured via the HTTPS protocol.",
    },
    {
      h: "10. Changes",
      p: "Live Well reserves the right to modify this privacy policy at any time. In the event of a substantial change, we will notify you via the website or by email.",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 40px" }}>
        <nav
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 40,
            fontSize: 12,
            color: "var(--ink3)",
          }}
        >
          <Link href="/" style={{ color: "var(--ink2)" }}>Home</Link>
          <span>›</span>
          <span style={{ color: "var(--ink)" }}>{CONTENT.title}</span>
        </nav>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px,5vw,60px)",
            fontWeight: 300,
            color: "var(--ink)",
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {CONTENT.title}
        </h1>
        <p style={{ fontSize: 13, color: "var(--ink3)", marginBottom: 60 }}>
          {CONTENT.updated}
        </p>
        {CONTENT.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: 24,
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: 12,
              }}
            >
              {s.h}
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "var(--ink2)",
                lineHeight: 1.8,
              }}
            >
              {s.p}
            </p>
          </div>
        ))}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--sand)" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "0.06em",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
