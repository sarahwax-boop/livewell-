import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms & Conditions",
    alternates: { canonical: "/legal/terms" },
  };
}

const CONTENT = {
  title: "Terms & Conditions",
  updated: "Last updated: 1 January 2026",
  sections: [
    {
      h: "1. Parties",
      p: "These Terms and Conditions govern the relationship between Live Well Ltd, a company registered in Ireland (hereafter 'Live Well'), and any individual or legal entity wishing to make a purchase via the website livewellshop.be (hereafter 'the Buyer').",
    },
    {
      h: "2. Products and Availability",
      p: "Live Well offers dietary supplements and wellness products for sale. All offers and prices are valid subject to available stock. In the event of a product being unavailable after an order is confirmed, Live Well undertakes to inform the Buyer as soon as possible and to offer a full refund.",
    },
    {
      h: "3. Prices",
      p: "Prices shown on the website are expressed in euros (€) inclusive of all taxes. Live Well reserves the right to change its prices at any time, provided that the price applicable to an order is the price in force at the time the order is confirmed. Delivery is free for orders exceeding €60 including VAT.",
    },
    {
      h: "4. Order",
      p: "The Buyer places their order directly on the website of our partner Everen (geteveren.com). By clicking 'Order', the Buyer is redirected to the official Everen store to finalise their purchase. Live Well acts as an affiliate and does not process payments directly.",
    },
    {
      h: "5. Delivery",
      p: "Orders are processed and dispatched by our partner Everen. Indicative delivery times are 3 to 7 working days within Ireland and 5 to 10 working days for other EU countries. These times are indicative and do not constitute a firm commitment.",
    },
    {
      h: "6. Right of Withdrawal",
      p: "In accordance with applicable legal provisions, the Buyer has 30 days from receipt of their order to exercise their right of withdrawal, without having to give reasons or pay any penalties. To exercise this right, the Buyer must contact Everen's customer service at support@geteveren.com. The refund will be made within 14 days of receiving the returned products.",
    },
    {
      h: "7. Affiliate Programme",
      p: "Live Well is an affiliate website of the Everen affiliate programme. When a Buyer is redirected to geteveren.com and makes a purchase, Live Well may receive a commission. This commission does not in any way affect the price paid by the Buyer.",
    },
    {
      h: "8. Applicable Law and Jurisdiction",
      p: "These Terms and Conditions are governed by Irish law. In the event of a dispute, and failing an amicable resolution, the courts of Dublin shall have exclusive jurisdiction.",
    },
    {
      h: "9. Contact",
      p: "For any questions relating to these Terms and Conditions: Live Well Ltd, Dublin, Ireland — support@livewell.be",
    },
  ],
};

export default function TermsPage() {
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
