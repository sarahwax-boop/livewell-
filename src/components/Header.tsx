"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useCartCount, useToggleDrawer } from "@/store/useCart";
import type { Locale } from "@/i18n/routing";

interface Props {
  locale: Locale;
}

export default function Header({ locale: localeProp }: Props) {
  // useLocale() reads from NextIntlClientProvider — always correct for current route
  const locale = useLocale() as Locale;
  const t = useTranslations("Nav");
  const a = useTranslations("Announce");
  const m = useTranslations("MobileMenu");
  const pathname = usePathname();
  const router = useRouter();
  const cartCount = useCartCount();
  const toggleDrawer = useToggleDrawer();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    const segs = pathname.split("/");
    segs[1] = next;
    router.push(segs.join("/") || `/${next}`);
  };

  const navLinks = [
    { label: t("home"), href: `/${locale}` },
    { label: t("shop"), href: `/${locale}/shop` },
    { label: t("about"), href: `/${locale}#about` },
    { label: t("contact"), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) =>
    href === `/${locale}`
      ? pathname === href
      : pathname.startsWith(href.split("#")[0]) &&
        href.split("#")[0] !== `/${locale}`;

  return (
    <>
      {/* Announcement bar */}
      <div className="announce">{a("text")}</div>

      <nav>
        <button
          className={`burger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={isActive(href) ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={`/${locale}`} className="nav-logo">
          <Image
            src="/images/logo.svg"
            alt="Live Well"
            width={170}
            height={50}
            priority
          />
        </Link>

        <div className="nav-right">
          <button
            className={`nav-lang${locale === "fr" ? " active" : ""}`}
            onClick={() => switchLocale("fr")}
          >
            FR
          </button>
          <span className="nav-lang-sep">|</span>
          <button
            className={`nav-lang${locale === "nl" ? " active" : ""}`}
            onClick={() => switchLocale("nl")}
          >
            NL
          </button>
          <button
            className="cart-btn"
            onClick={toggleDrawer}
            aria-label={t("cart")}
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="cart-btn-text">{t("cart")}</span>
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="mob-overlay open"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`mob-menu${mobileOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mob-menu-head">
          <Link
            href={`/${locale}`}
            className="mob-menu-logo"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/logo.svg"
              alt="Live Well"
              width={120}
              height={40}
            />
          </Link>
          <button
            className="mob-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Sluiten"
          >
            ✕
          </button>
        </div>

        <nav className="mob-menu-links">
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "block",
            }}
          >
            {navLinks.map(({ label, href }, i) => (
              <li key={href} style={{ display: "block", width: "100%" }}>
                <Link
                  href={href}
                  className={isActive(href) ? "active" : ""}
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                  <span className="mob-link-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mob-menu-footer">
          <div className="mob-menu-lang">
            <button
              className={`mob-lang-btn${locale === "fr" ? " active" : ""}`}
              onClick={() => {
                switchLocale("fr");
                setMobileOpen(false);
              }}
            >
              FR
            </button>
            <button
              className={`mob-lang-btn${locale === "nl" ? " active" : ""}`}
              onClick={() => {
                switchLocale("nl");
                setMobileOpen(false);
              }}
            >
              NL
            </button>
          </div>
          <Link
            href={`/${locale}/shop`}
            className="mob-shop-btn"
            onClick={() => setMobileOpen(false)}
          >
            {m("discover")}
          </Link>
          <p className="mob-menu-tagline">{m("tagline")}</p>
        </div>
      </div>
    </>
  );
}
