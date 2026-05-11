import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SuccessPage() {
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
          Thank you for your order!
        </h1>
        <p style={{ color: "var(--ink2)", marginBottom: 32 }}>
          You will receive a confirmation email shortly.
        </p>
        <Link href="/shop" className="btn btn-dark">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
