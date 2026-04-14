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

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            qty: item.qty || 1, // Fixed: uses 'qty' to match your store
          })),
        }),
      });

      const data = await res.json();
      if (data.id) return data.id;
      throw new Error(data.error || "Failed to create order");
    } catch (err) {
      console.error("Checkout Error:", err);
      return "";
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    const res = await fetch("/api/paypal/capture-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderID: data.orderID,
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
        locale === "fr" ? "Le paiement a échoué." : "Betaling mislukt.",
      );
    }
  };

  useEffect(() => {
    if (items.length === 0) router.push(`/${locale}/shop`);
  }, [items.length, locale, router]);

  if (items.length === 0) return null;

  const label = (fr: string, nl: string) => (locale === "fr" ? fr : nl);

  // Styles kept exactly as per your design
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
          {label("Vos données sont protégées.", "Uw gegevens zijn beschermd.")}
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

        {/* Order Summary */}
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
                marginBottom: 14,
                fontSize: 14,
              }}
            >
              <div style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    background: "var(--cream2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <div>{item.name}</div>
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
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 18 }}>Total</span>
            <span style={{ fontSize: 22 }}>{fmt(total)}</span>
          </div>
        </div>

        {/* Shipping Form */}
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
              marginBottom: 20,
            }}
          >
            {label("Livraison", "Levering")}
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
            <label style={labelStyle}>Email *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />
            {emailError && (
              <p style={{ color: "#e74c3c", fontSize: 12 }}>{emailError}</p>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Téléphone *</label>
            <div style={{ display: "flex", gap: 8 }}>
              <select
                name="phonePrefix"
                value={form.phonePrefix}
                onChange={handleChange}
                style={{ ...inputStyle, width: "auto" }}
              >
                <option value="+32">+32</option>
                <option value="+31">+31</option>
              </select>
              <input
                name="phone"
                value={form.phone}
                onChange={handlePhoneChange}
                style={{ ...inputStyle, flex: 1 }}
              />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Adresse *</label>
            <input
              name="address1"
              value={form.address1}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Ville *</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Pays *</label>
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

        {/* Payment Section with Hardcoded ID */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            border: "1px solid var(--sand)",
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 24 }}>
            {label("Paiement", "Betaling")}
          </h2>
          {formError && (
            <p
              style={{
                color: "#c0392b",
                background: "#fdf0f0",
                padding: 12,
                borderRadius: 8,
                marginBottom: 12,
              }}
            >
              {formError}
            </p>
          )}

          <PayPalScriptProvider
            options={{
              clientId:
                "AaxB0nPjOU19Tw2VSloSpv1NZfBur9voFFaGaPTUhiUONV3ZMzMwP8U_Eb70O0dlRRIwJ0eh75-AmA-X",
              currency: "EUR",
              intent: "capture",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical", shape: "pill", color: "gold" }}
              onClick={(data, actions) =>
                isFormValid() ? actions.resolve() : actions.reject()
              }
              createOrder={createOrder}
              onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
}
