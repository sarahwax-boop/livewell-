"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  useCartItems,
  useCartIsOpen,
  useCloseDrawer,
  useRemoveItem,
  useUpdateQty,
  useCheckout,
  FREE_SHIPPING_THRESHOLD,
  formatEur,
} from "@/store/useCart";
import type { Locale } from "@/i18n/routing";

const AFFILIATE_URL = "https://www.geteveren.com/collections";

export default function CartDrawer({ locale }: { locale: Locale }) {
  const t = useTranslations("Cart");
  const items = useCartItems();
  const isOpen = useCartIsOpen();
  const closeDrawer = useCloseDrawer();
  const removeItem = useRemoveItem();
  const updateQty = useUpdateQty();
  const checkout = useCheckout();
  const panelRef = useRef<HTMLDivElement>(null);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const pct = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const rem = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);
  const isEmpty = items.length === 0;
  const fmt = (n: number) => formatEur(n, locale);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    if (isOpen) window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, closeDrawer]);

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? " open" : ""}`}
        aria-hidden
        onClick={closeDrawer}
      />
      <div
        ref={panelRef}
        className={`cart-drawer${isOpen ? " open" : ""}`}
        role="dialog"
        aria-label={t("title")}
        aria-modal="true"
        tabIndex={-1}
        style={{ outline: "none" }}
      >
        <div className="cart-drawer-header">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            <span className="cart-drawer-title">{t("title")}</span>
            {count > 0 && (
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                ({count})
              </span>
            )}
          </div>
          <button
            className="cart-close"
            onClick={closeDrawer}
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="cart-ship-bar">
          <p className={`cart-ship-msg${pct >= 100 ? " unlocked" : ""}`}>
            {pct >= 100
              ? t("shippingUnlocked")
              : t("shippingProgress", { amount: fmt(rem) })}
          </p>
          <div className="ship-track">
            <div className="ship-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="cart-items">
          {isEmpty ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛍</div>
              <h3>{t("empty")}</h3>
              <p>{t("emptyHint")}</p>
              <Link
                href={`/${locale}/shop`}
                onClick={closeDrawer}
                style={{
                  marginTop: 8,
                  padding: "10px 24px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {t("continueShopping")}
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-thumb">
                  <div
                    className={`bottle ${item.bottleClass}`}
                    style={{ width: 44, height: 90 }}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-top">
                    <span className="cart-item-name">{item.name}</span>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="cart-item-price">
                    {fmt(item.price * item.qty)}
                  </div>
                  <div className="cart-qty">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {!isEmpty && (
          <div className="cart-footer">
            <div className="cart-totals">
              <div className="cart-row">
                <span className="label">{t("subtotal")}</span>
                <span className="value">{fmt(total)}</span>
              </div>
              <div className="cart-row">
                <span className="label">{t("shipping")}</span>
                <span className={`value${pct >= 100 ? " free" : ""}`}>
                  {pct >= 100 ? t("shippingFree") : "—"}
                </span>
              </div>
            </div>
            <button
              className="cart-checkout"
              onClick={() => checkout(AFFILIATE_URL)}
            >
              {t("checkout")}
            </button>
            <p className="cart-note">{t("affiliateNote")}</p>
          </div>
        )}
      </div>
    </>
  );
}
