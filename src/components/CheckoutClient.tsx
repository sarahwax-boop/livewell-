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
  postcode: string;
  city: string;
  country: string;
}

export default function CheckoutClient({ locale }: Props) {
  const items = useCartItems();
  const router = useRouter();
  const fmt = (n: number) => formatEur(n);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const [form, setForm] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phonePrefix: "+353",
    phone: "",
    address1: "",
    address2: "",
    postcode: "",
    city: "",
    country: "",
  });

  const [formError, setFormError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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

  const allRequiredFilled = () => {
    return (
      form.firstName.trim() !== "" &&
      form.lastName.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.address2.trim() !== "" &&
      form.postcode.trim() !== "" &&
      form.city.trim() !== "" &&
      form.country.trim() !== "" &&
      validateEmail(form.email)
    );
  };

  const isFormValid = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.phone ||
      !form.address2 ||
      !form.postcode ||
      !form.city ||
      !form.country
    ) {
      const missingFields: string[] = [];
      if (!form.firstName) missingFields.push("First Name");
      if (!form.lastName) missingFields.push("Last Name");
      if (!form.phone) missingFields.push("Phone");
      if (!form.address2) missingFields.push("Address Line 1");
      if (!form.postcode) missingFields.push("Postcode / ZIP");
      if (!form.city) missingFields.push("City");
      if (!form.country) missingFields.push("Country");

      const msg = `Please fill in the following required fields: ${missingFields.join(", ")}`;
      setPopupMessage(msg);
      setShowErrorPopup(true);
      setFormError("Please fill in all required fields.");
      return false;
    }
    if (!validateEmail(form.email)) {
      setPopupMessage("Please enter a valid email address.");
      setShowErrorPopup(true);
      setEmailError("Please enter a valid email address.");
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
      router.push("/checkout/success");
    } else {
      setFormError("Payment failed. Please try again.");
    }
  };

  useEffect(() => {
    if (items.length === 0) router.push("/shop");
  }, [items.length, router]);

  if (items.length === 0) return null;

  // Styles kept exactly as per your design
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 10px",
    borderRadius: 10,
    border: "1px solid #ccbea4",
    fontFamily: "var(--sans)",
    fontSize: 14,
    color: "var(--ink)",
    background: "#f8f4ee",
    outline: "none",
  };
  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    fontSize: 16,
    appearance: "none",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    paddingRight: "32px",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
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

  const countries = [
    { value: "", label: "Select a country" },
    { value: "IE", label: "Ireland" },
    { value: "GB", label: "United Kingdom" },
    { value: "BE", label: "Belgium" },
    { value: "NL", label: "Netherlands" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
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
          Your order
        </span>
        <h1 style={{ fontSize: "clamp(32px,5vw,52px)", marginBottom: 8 }}>
          Secure checkout
        </h1>
        <p style={{ fontSize: 14 }}>
          Your data is protected.
        </p>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 24px 0" }}>
        <Link
          href="/shop"
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
          ← Continue shopping
        </Link>

        {/* Order Summary */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 28,
            marginBottom: 20,
            color: "#000",
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
            Order Summary
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
            color: "var(--dark)",
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
            Shipping details
          </h2>
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>First name *</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Last name *</label>
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
            <label style={labelStyle}>Phone *</label>
            <div style={{ display: "flex", gap: 8 }}>
              <select
                name="phonePrefix"
                value={form.phonePrefix}
                onChange={handleChange}
                style={{ ...selectStyle, width: 100, paddingLeft: 10 }}
              >
                <option value="+353">🇮🇪 +353</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+32">🇧🇪 +32</option>
                <option value="+31">🇳🇱 +31</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+49">🇩🇪 +49</option>
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
            <label style={labelStyle}>Address Line 1 *</label>
            <input
              name="address2"
              value={form.address2}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Address Line 2 (Optional):</label>
            <input
              name="address1"
              value={form.address1}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Postcode / ZIP *</label>
            <input
              name="postcode"
              value={form.postcode}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>City *</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Country *</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                style={selectStyle}
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
            Payment
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

          {allRequiredFilled() && (
            <div
              style={{
                background: "#eafbe7",
                border: "1px solid #6fbf73",
                color: "#2e7d32",
                padding: "14px 18px",
                borderRadius: 10,
                marginBottom: 16,
                fontSize: 14,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 20 }}>✓</span>
              You can now proceed and make your purchase with PayPal
            </div>
          )}

          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
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
      {/* Error Popup Overlay */}
      {showErrorPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setShowErrorPopup(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "32px 28px 28px",
              maxWidth: 420,
              width: "100%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowErrorPopup(false)}
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 22,
                color: "#999",
                cursor: "pointer",
                lineHeight: 1,
                padding: 4,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#333")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#999")}
              aria-label="Close"
            >
              ✕
            </button>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#fde8e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
                fontSize: 26,
              }}
            >
              ⚠
            </div>
            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                fontWeight: 500,
                color: "#c0392b",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Required Fields Missing
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                textAlign: "center",
                lineHeight: 1.6,
                marginBottom: 24,
              }}
            >
              {popupMessage}
            </p>
            <button
              onClick={() => setShowErrorPopup(false)}
              style={{
                width: "100%",
                padding: "13px 20px",
                borderRadius: 999,
                background: "var(--gold)",
                color: "var(--dark)",
                border: "none",
                fontFamily: "var(--sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Fill in the fields
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
