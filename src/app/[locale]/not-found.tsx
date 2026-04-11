import Link from "next/link";

// Note: locale is available from the URL segment — we derive it from the pathname
// This file handles 404s within the [locale] segment

export default function NotFound() {
  return (
    <div style={{
      minHeight: "70vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "var(--dark)", textAlign: "center", padding: "60px 40px",
    }}>
      <p style={{
        fontFamily: "var(--serif)", fontSize: "clamp(80px,15vw,160px)",
        fontWeight: 300, color: "rgba(255,255,255,0.08)",
        letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 24,
      }}>
        404
      </p>
      <h1 style={{
        fontFamily: "var(--serif)", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300,
        color: "#fff", letterSpacing: "-0.02em", marginBottom: 16,
      }}>
        Page introuvable
      </h1>
      <p style={{
        fontFamily: "var(--sans)", fontSize: 15, fontWeight: 300,
        color: "rgba(255,255,255,0.45)", marginBottom: 40, maxWidth: 400, lineHeight: 1.7,
      }}>
        Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/fr" className="btn btn-white">Retour à l'accueil</Link>
        <Link href="/fr/shop" className="btn btn-outline">Voir la boutique</Link>
      </div>
    </div>
  );
}
