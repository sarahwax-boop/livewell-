"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useCartItems, formatEur } from "@/store/useCart";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  locale: Locale;
}

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
}

export default function CheckoutClient({ locale }: Props) {
  const items = useCartItems();
  const router = useRouter();
  const fmt = (n: number) => formatEur(n, locale);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const [form, setForm] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = () => {
    return (
      form.firstName &&
      form.lastName &&
      form.email &&
      form.phone &&
      form.address1 &&
      form.city &&
      form.country
    );
  };

  const createOrder = async () => {
    if (!isFormValid()) {
      setFormError(
        locale === "fr"
          ? "Veuillez remplir tous les champs obligatoires."
          : "Vul alle verplichte velden in.",
      );
      throw new Error("Form incomplete");
    }
    setFormError("");
    const res = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, total, shipping: form }),
    });
    const order = await res.json();
    return order.id;
  };

  const onApprove = async (data: { orderID: string }) => {
    const res = await fetch("/api/paypal/capture-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID: data.orderID }),
    });

    const details = await res.json();
    if (details.status === "COMPLETED") {
      await fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shipping: form,
          items,
          total,
          paypalOrderId: data.orderID,
        }),
      });

      await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shipping: form, items, total }),
      });

      router.push(`/${locale}/checkout/success`);
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      router.push(`/${locale}/shop`);
    }
  }, [items.length, locale, router]);

  useEffect(() => {
    console.log("PayPal ID:", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
  }, []);

  if (items.length === 0) return null;

  const label = (fr: string, nl: string) => (locale === "fr" ? fr : nl);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid var(--sand)",
    fontFamily: "var(--sans)",
    fontSize: 14,
    color: "var(--ink)",
    background: "var(--cream)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--ink2)",
    marginBottom: 6,
  };

  const rowStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        paddingBottom: 80,
      }}
    >
      {/* Page hero */}
      <div className="page-hero" style={{ padding: "60px 40px 40px" }}>
        <span
          className="eyebrow"
          style={{ justifyContent: "center", display: "flex" }}
        >
          {label("Votre commande", "Uw bestelling")}
        </span>
        <h1 style={{ fontSize: "clamp(32px,5vw,52px)", marginBottom: 8 }}>
          {label("Paiement sécurisé", "Veilig betalen")}
        </h1>
        <p style={{ fontSize: 14 }}>
          {label(
            "Vos données sont protégées par un cryptage SSL.",
            "Uw gegevens zijn beschermd met SSL-versleuteling.",
          )}
        </p>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 24px 0" }}>
        <Link
          href={`/${locale}/shop`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink2)",
            marginBottom: 32,
          }}
        >
          ← {label("Continuer mes achats", "Verder winkelen")}
        </Link>

        {/* Order summary */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            marginBottom: 20,
            border: "1px solid var(--sand)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: "1px solid var(--sand)",
            }}
          >
            {label("Récapitulatif", "Overzicht")}
          </h2>

          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                fontSize: 14,
                color: "var(--ink)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 101,
                    height: 104,
                    borderRadius: 10,
                    overflow: "hidden",
                    background: "var(--cream2)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      objectFit: "contain",
                      padding: 4,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 400, marginBottom: 2 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--ink3)" }}>
                    × {item.qty}
                  </div>
                </div>
              </div>
              <span style={{ fontWeight: 500 }}>
                {fmt(item.price * item.qty)}
              </span>
            </div>
          ))}

          <div
            style={{
              borderTop: "1px solid var(--sand)",
              paddingTop: 14,
              marginTop: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 13, color: "var(--ink2)" }}>
              {label("Livraison", "Verzending")}
            </span>
            <span
              style={{ fontSize: 13, color: "var(--gold)", fontWeight: 500 }}
            >
              {label("Offerte", "Gratis")}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: 18,
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: 22,
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              {fmt(total)}
            </span>
          </div>
        </div>

        {/* Shipping form */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            marginBottom: 20,
            border: "1px solid var(--sand)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: "1px solid var(--sand)",
            }}
          >
            {label("Informations de livraison", "Leveringsgegevens")}
          </h2>

          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>
                {label("Prénom *", "Voornaam *")}
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Jean"
              />
            </div>
            <div>
              <label style={labelStyle}>{label("Nom *", "Achternaam *")}</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Dupont"
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>{label("Email *", "Email *")}</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                placeholder="jean@email.com"
              />
            </div>
            <div>
              <label style={labelStyle}>
                {label("Téléphone *", "Telefoon *")}
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
                placeholder="+32 470 00 00 00"
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>{label("Adresse *", "Adres *")}</label>
            <input
              name="address1"
              value={form.address1}
              onChange={handleChange}
              style={inputStyle}
              placeholder={label("Rue et numéro", "Straat en huisnummer")}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>{label("Adresse 2", "Adres 2")}</label>
            <input
              name="address2"
              value={form.address2}
              onChange={handleChange}
              style={inputStyle}
              placeholder={label(
                "Appartement, bâtiment... (optionnel)",
                "Appartement, gebouw... (optioneel)",
              )}
            />
          </div>

          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>{label("Ville *", "Stad *")}</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Bruxelles"
              />
            </div>
            <div>
              <label style={labelStyle}>{label("Pays *", "Land *")}</label>
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Belgique"
              />
            </div>
          </div>

          {formError && (
            <p
              style={{
                color: "#c0392b",
                fontSize: 13,
                marginTop: 4,
                padding: "10px 14px",
                background: "#fdf0f0",
                borderRadius: 8,
                border: "1px solid #f5c6c6",
              }}
            >
              {formError}
            </p>
          )}
        </div>

        {/* Payment */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            border: "1px solid var(--sand)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: 20,
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: 6,
            }}
          >
            {label("Moyen de paiement", "Betaalmethode")}
          </h2>
          <p
            style={{
              fontSize: 12,
              color: "var(--ink3)",
              marginBottom: 24,
              letterSpacing: "0.02em",
            }}
          >
            {label(
              "Paiement 100% sécurisé via PayPal",
              "100% veilige betaling via PayPal",
            )}
          </p>

          <PayPalScriptProvider
            options={{
              clientId:
                "AaxB0nPjOU19Tw2VSloSpv1NZfBur9voFFaGaPTUhiUONW3ZMzMwP8U_Eb70O0dlRRIwJ0eh75-AmA-X",
              currency: "EUR",
              enableFunding: "applepay,googlepay,venmo",
              components: "buttons",
            }}
          >
            <PayPalButtons
              style={{
                layout: "vertical",
                shape: "pill",
                label: "pay",
                color: "gold",
              }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid var(--sand)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "var(--ink3)",
                letterSpacing: "0.06em",
              }}
            >
              🔒 {label("Paiement sécurisé SSL", "Beveiligd met SSL")}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--ink3)",
                letterSpacing: "0.06em",
              }}
            >
              ✓ {label("Données protégées", "Gegevens beschermd")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
