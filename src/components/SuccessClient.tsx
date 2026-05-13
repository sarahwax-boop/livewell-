"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface OrderItem {
  name: string;
  qty: number;
  price: number;
  image?: string;
}

interface Shipping {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  postcode: string;
  city: string;
  country: string;
}

interface LastOrder {
  items: OrderItem[];
  total: number;
  shipping: Shipping;
}

export default function SuccessClient() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("lastOrder");
    if (raw) {
      setOrder(JSON.parse(raw));
      sessionStorage.removeItem("lastOrder");
    }
  }, []);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
    }).format(n);

  const sectionHead: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--ink2)",
    marginBottom: 14,
  };

  const card: React.CSSProperties = {
    background: "#fff",
    borderRadius: 16,
    padding: 24,
    border: "1px solid var(--sand)",
    marginBottom: 16,
    textAlign: "left",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "60px 24px 0" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px,5vw,40px)",
              marginBottom: 10,
              color: "var(--dark)",
            }}
          >
            Thank you for your order!
          </h1>
          <p style={{ color: "var(--ink2)", fontSize: 20 }}>
            A confirmation email has been sent to you.
          </p>
        </div>

        {order && (
          <>
            {/* Items */}
            <div style={card}>
              <p style={sectionHead}>Items ordered</p>
              {order.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                    marginBottom: 12,
                    borderBottom:
                      i < order.items.length - 1
                        ? "1px solid var(--sand)"
                        : "none",
                    fontSize: 14,
                    color: "var(--ink)",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 500 }}>{item.name}</div>
                    <div
                      style={{
                        color: "var(--ink2)",
                        fontSize: 12,
                        marginTop: 2,
                      }}
                    >
                      × {item.qty}
                    </div>
                  </div>
                  <span style={{ fontWeight: 500 }}>
                    {fmt(item.price * item.qty)}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 12,
                  borderTop: "2px solid var(--sand)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--dark)",
                }}
              >
                <span>Total</span>
                <span>{fmt(order.total)}</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--ink2)", marginTop: 6 }}>
                Free shipping included
              </p>
            </div>

            {/* Shipping info */}
            <div style={card}>
              <p style={sectionHead}>Shipping to</p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {order.shipping.firstName} {order.shipping.lastName}
                <br />
                {order.shipping.address2}
                <br />
                {order.shipping.address1 && (
                  <>
                    {order.shipping.address1}
                    <br />
                  </>
                )}
                {order.shipping.postcode} {order.shipping.city}
                <br />
                {order.shipping.country}
              </p>
            </div>

            {/* Contact info */}
            <div style={card}>
              <p style={sectionHead}>Contact</p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {order.shipping.email}
                <br />
                {order.shipping.phone}
              </p>
            </div>
          </>
        )}

        <div style={{ textAlign: "center", marginTop: 8 }}>
          <Link href="/shop" className="btn btn-dark">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
