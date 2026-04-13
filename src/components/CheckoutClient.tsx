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
  phonePrefix: string;
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
    phonePrefix: "+32",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
  });

  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmailError("");
    setFormError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, phone: val }));
    setFormError("");
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Logic to check if form is valid before PayPal opens
  const isFormValid = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.address1 ||
      !form.city ||
      !form.country
    ) {
      setFormError(
        locale === "fr"
          ? "Veuillez remplir tous les champs obligatoires."
          : "Vul alle verplichte velden in.",
      );
      return false;
    }
    if (!validateEmail(form.email)) {
      setEmailError(
        locale === "fr"
          ? "Veuillez entrer une adresse email valide."
          : "Voer een geldig e-mailadres in.",
      );
      return false;
    }
    return true;
  };

  const createOrder = async () => {
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
      body: JSON.stringify({
        orderID: data.orderID,
        // Passing shipping info here so your backend can save it once payment is confirmed
        shipping: { ...form, phone: `${form.phonePrefix} ${form.phone}` },
        items,
        total,
      }),
    });

    const details = await res.json();
    if (details.status === "COMPLETED") {
      router.push(`/${locale}/checkout/success`);
    } else {
      setFormError(
        locale === "fr"
          ? "Le paiement a échoué. Veuillez réessayer."
          : "Betaling mislukt. Probeer het opnieuw.",
      );
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      router.push(`/${locale}/shop`);
    }
  }, [items.length, locale, router]);

  if (items.length === 0) return null;

  const label = (fr: string, nl: string) => (locale === "fr" ? fr : nl);

  // STYLES
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

  const countries =
    locale === "fr"
      ? [
          { value: "", label: "Sélectionnez un pays" },
          { value: "BE", label: "Belgique" },
          { value: "NL", label: "Pays-Bas" },
        ]
      : [
          { value: "", label: "Selecteer een land" },
          { value: "BE", label: "België" },
          { value: "NL", label: "Nederland" },
        ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--cream)",
        paddingBottom: 80,
      }}
    >
      <div
        className="page-hero"
        style={{ padding: "60px 40px 40px", textAlign: "center" }}
      >
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

        {/* Order Summary Card */}
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
                    width: 60,
                    height: 60,
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
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 400 }}>{item.name}</div>
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
              marginTop: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontFamily: "var(--serif)", fontSize: 18 }}>
              Total
            </span>
            <span style={{ fontFamily: "var(--serif)", fontSize: 22 }}>
              {fmt(total)}
            </span>
          </div>
        </div>

        {/* Shipping Form Card */}
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
              />
            </div>
            <div>
              <label style={labelStyle}>{label("Nom *", "Achternaam *")}</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>{label("Email *", "Email *")}</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            {emailError && (
              <p style={{ color: "#e74c3c", fontSize: 12, marginTop: 4 }}>
                {emailError}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>
              {label("Téléphone *", "Telefoon *")}
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              <select
                name="phonePrefix"
                value={form.phonePrefix}
                onChange={handleChange}
                style={{ ...inputStyle, width: "auto" }}
              >
                <option value="+32">🇧🇪 +32</option>
                <option value="+31">🇳🇱 +31</option>
              </select>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handlePhoneChange}
                style={{ ...inputStyle, flex: 1 }}
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
              />
            </div>
            <div>
              <label style={labelStyle}>{label("Pays *", "Land *")}</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                style={inputStyle}
              >
                {countries.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Payment Card */}
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
              marginBottom: 6,
            }}
          >
            {label("Moyen de paiement", "Betaalmethode")}
          </h2>
          <p style={{ fontSize: 12, color: "var(--ink3)", marginBottom: 24 }}>
            {label(
              "Paiement 100% sécurisé via PayPal",
              "100% veilige betaling via PayPal",
            )}
          </p>

          {formError && (
            <p
              style={{
                color: "#c0392b",
                fontSize: 13,
                marginBottom: 12,
                padding: "10px 14px",
                background: "#fdf0f0",
                borderRadius: 8,
                border: "1px solid #f5c6c6",
              }}
            >
              {formError}
            </p>
          )}

          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
              currency: "EUR",
            }}
          >
            <PayPalButtons
              style={{
                layout: "vertical",
                shape: "pill",
                label: "pay",
                color: "gold",
              }}
              // This is the magic: it checks the form before opening the PayPal window
              onClick={(data, actions) => {
                if (isFormValid()) {
                  return actions.resolve();
                } else {
                  return actions.reject();
                }
              }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid var(--sand)",
            }}
          >
            <span style={{ fontSize: 11, color: "var(--ink3)" }}>
              🔒 {label("Paiement sécurisé SSL", "Beveiligd met SSL")}
            </span>
            <span style={{ fontSize: 11, color: "var(--ink3)" }}>
              ✓ {label("Données protégées", "Gegevens beschermd")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
