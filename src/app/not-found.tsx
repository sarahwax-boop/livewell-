import Link from "next/link";

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
        Page not found
      </h1>
      <p style={{
        fontFamily: "var(--sans)", fontSize: 15, fontWeight: 300,
        color: "rgba(255,255,255,0.45)", marginBottom: 40, maxWidth: 400, lineHeight: 1.7,
      }}>
        This page doesn&apos;t exist or has been moved. Return to the home page to continue.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn btn-white">Back to home</Link>
        <Link href="/shop" className="btn btn-outline">View the shop</Link>
      </div>
    </div>
  );
}
