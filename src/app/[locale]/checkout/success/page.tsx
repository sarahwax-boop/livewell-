import Link from "next/link";
import type { Locale } from "@/i18n/routing";
export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ locale: Locale }>;
}
// ... rest stays the same

interface Props {
  params: Promise<{ locale: Locale }>;
}
export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "nl" }];
}

export default async function SuccessPage({ params }: Props) {
  const { locale } = await params;
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div>
        <div style={{ fontSize: 64, marginBottom: 24 }}>🎉</div>
        <h1
          style={{ fontFamily: "var(--serif)", fontSize: 36, marginBottom: 16 }}
        >
          {locale === "fr"
            ? "Merci pour votre commande !"
            : "Bedankt voor uw bestelling!"}
        </h1>
        <p style={{ color: "var(--ink2)", marginBottom: 32 }}>
          {locale === "fr"
            ? "Vous recevrez un email de confirmation bientôt."
            : "U ontvangt binnenkort een bevestigingsmail."}
        </p>
        <Link href={`/${locale}/shop`} className="btn btn-dark">
          {locale === "fr" ? "Continuer mes achats" : "Verder winkelen"}
        </Link>
      </div>
    </div>
  );
}
