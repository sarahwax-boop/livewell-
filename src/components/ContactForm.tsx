"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";

interface Labels {
  eyebrow: string;
  heading: string;
  sub: string;
  talkTitle: string;
  talkBody: string;
  emailLabel: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: string;
  promiseTitle: string;
  promise1: string;
  promise2: string;
  promise3: string;
  formTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  subjectPlaceholder: string;
  subjectOrder: string;
  subjectProduct: string;
  subjectReturn: string;
  subjectOther: string;
  message: string;
  messagePlaceholder: string;
  send: string;
  privacyNote: string;
  privacyLink: string;
  success: string;
}

interface Props {
  locale: Locale;
  labels: Labels;
}

export default function ContactForm({ locale, labels: l }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <span
          className="eyebrow"
          style={{ justifyContent: "center", display: "flex" }}
        >
          {l.eyebrow}
        </span>
        <h1>{l.heading}</h1>
        <p>{l.sub}</p>
      </section>

      {/* Contact grid */}
      <section style={{ background: "var(--dark)", padding: "0 0 100px" }}>
        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info">
            <h2>{l.talkTitle}</h2>
            <p>{l.talkBody}</p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {[
                {
                  icon: "✉️",
                  label: l.emailLabel,
                  content: (
                    <a
                      href="mailto:livewell4shop@gmail.com"
                      style={{ color: "var(--gold)", fontSize: 14 }}
                    >
                      livewell4shop@gmail.com
                    </a>
                  ),
                },
                {
                  icon: "📍",
                  label: l.addressLabel,
                  content: (
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                      }}
                    >
                      {l.address.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < l.address.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ),
                },
                {
                  icon: "🕐",
                  label: l.hoursLabel,
                  content: (
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                      }}
                    >
                      {l.hours.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < l.hours.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ),
                },
              ].map(({ icon, label, content }) => (
                <div className="contact-detail" key={label}>
                  <div className="contact-detail-icon">{icon}</div>
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: 4,
                      }}
                    >
                      {label}
                    </p>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise */}
            <div
              style={{
                marginTop: 48,
                padding: 28,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: 16,
                }}
              >
                {l.promiseTitle}
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[l.promise1, l.promise2, l.promise3].map((p, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: 14 }}>
                      ✦
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 40,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  fontWeight: 300,
                  color: "#fff",
                  marginBottom: 28,
                  letterSpacing: "-0.01em",
                }}
              >
                {l.formTitle}
              </h2>

              {submitted ? (
                <div
                  style={{
                    background: "rgba(200,169,106,0.12)",
                    border: "1px solid rgba(200,169,106,0.3)",
                    color: "var(--gold)",
                    padding: "14px 18px",
                    borderRadius: 12,
                    fontSize: 14,
                  }}
                >
                  {l.success}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div className="form-group">
                      <label className="form-label">{l.firstName}</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={l.firstName}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{l.lastName}</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={l.lastName}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{l.email}</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="votre@email.be"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{l.subject}</label>
                    <select
                      className="form-input"
                      style={{
                        color: "#fff",
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      <option value="" style={{ background: "var(--dark2)" }}>
                        {l.subjectPlaceholder}
                      </option>
                      <option
                        value="order"
                        style={{ background: "var(--dark2)" }}
                      >
                        {l.subjectOrder}
                      </option>
                      <option
                        value="product"
                        style={{ background: "var(--dark2)" }}
                      >
                        {l.subjectProduct}
                      </option>
                      <option
                        value="return"
                        style={{ background: "var(--dark2)" }}
                      >
                        {l.subjectReturn}
                      </option>
                      <option
                        value="other"
                        style={{ background: "var(--dark2)" }}
                      >
                        {l.subjectOther}
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{l.message}</label>
                    <textarea
                      className="form-textarea"
                      placeholder={l.messagePlaceholder}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: 13,
                    }}
                  >
                    {l.send}
                  </button>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.25)",
                      textAlign: "center",
                      marginTop: 12,
                    }}
                  >
                    {l.privacyNote}{" "}
                    <Link
                      href={`/${locale}/legal/privacy`}
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {l.privacyLink}
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
