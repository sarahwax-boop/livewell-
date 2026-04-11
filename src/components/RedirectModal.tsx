"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRedirectIsOpen, useCloseRedirect } from "@/store/useCart";
import type { Locale } from "@/i18n/routing";

export default function RedirectModal({ locale }: { locale: Locale }) {
  const t = useTranslations("Redirect");
  const isOpen = useRedirectIsOpen();
  const closeRedirect = useCloseRedirect();
  const fillRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !fillRef.current) return;
    fillRef.current.classList.remove("run");
    void fillRef.current.offsetWidth;
    fillRef.current.classList.add("run");
    overlayRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRedirect();
    };
    if (isOpen) window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, closeRedirect]);

  return (
    <div
      ref={overlayRef}
      className={`redirect-overlay${isOpen ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      style={{ outline: "none" }}
    >
      <button className="redirect-cancel" onClick={closeRedirect}>
        ✕ {t("cancel")}
      </button>
      <div className="redirect-logo">
        <Image src="/images/logo.svg" alt="Live Well" width={150} height={48} />
      </div>
      <div className="redirect-spinner" aria-hidden />
      <h2 className="redirect-heading">{t("heading")}</h2>
      <p className="redirect-body">{t("body")}</p>
      <div className="redirect-progress">
        <div ref={fillRef} className="redirect-fill" />
      </div>
      <p className="redirect-sub">{t("sub")}</p>
    </div>
  );
}
