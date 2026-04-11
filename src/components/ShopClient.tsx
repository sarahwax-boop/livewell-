"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ALL_PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import type { Locale } from "@/i18n/routing";

interface Props {
  locale: Locale;
}

export default function ShopClient({ locale }: Props) {
  const t = useTranslations("Shop");
  const [filter, setFilter] = useState<
    "all" | "energy" | "beauty" | "immunity" | "weight loss"
  >("all");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );

  let products = ALL_PRODUCTS.filter(
    (p) => filter === "all" || p.category.includes(filter),
  );
  if (sort === "price-asc")
    products = [...products].sort((a, b) => a.price - b.price);
  if (sort === "price-desc")
    products = [...products].sort((a, b) => b.price - a.price);

  const pills = [
    { id: "all", label: t("filterAll") },
    { id: "energy", label: t("filterEnergy") },
    { id: "beauty", label: t("filterBeauty") },
    { id: "immunity", label: t("filterImmunity") },
    { id: "weight loss", label: t("filterWeightLoss") },
  ] as const;

  const trustCards = [
    { img: "/images/pro2.webp", cls: "tc1", h: t("trust1H"), p: t("trust1P") },
    { img: "/images/pure.webp", cls: "tc2", h: t("trust2H"), p: t("trust2P") },
    { img: "/images/inno.webp", cls: "tc3", h: t("trust3H"), p: t("trust3P") },
    {
      img: "/images/clinic.webp",
      cls: "tc4",
      h: t("trust4H"),
      p: t("trust4P"),
    },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <span
          className="eyebrow"
          style={{ justifyContent: "center", display: "flex" }}
        >
          {t("eyebrow")}
        </span>
        <h1>{t("heading")}</h1>
        <p>{t("sub")}</p>
      </section>

      {/* Shop grid */}
      <section
        style={{ background: "var(--cream2)", padding: "60px 40px 100px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="filter-bar">
            <div className="filter-pills">
              {pills.map((pill) => (
                <button
                  key={pill.id}
                  className={`pill${filter === pill.id ? " active" : ""}`}
                  onClick={() => setFilter(pill.id)}
                >
                  {pill.label}
                </button>
              ))}
            </div>
            <select
              className="sort-sel"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
            >
              <option value="featured">{t("sortFeatured")}</option>
              <option value="price-asc">{t("sortPriceAsc")}</option>
              <option value="price-desc">{t("sortPriceDesc")}</option>
            </select>
          </div>

          {products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  fontWeight: 300,
                  color: "var(--ink2)",
                }}
              >
                {t("noResults")}
              </p>
            </div>
          ) : (
            <div className="products-grid products-grid-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} locale={locale} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section className="trust-section" style={{ padding: "60px 40px" }}>
        <div className="trust-grid">
          {trustCards.map((c, i) => (
            <div className="trust-card" key={i}>
              <div className={`trust-img ${c.cls}`}>
                <Image
                  src={c.img}
                  alt={c.h}
                  width={300}
                  height={220}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="trust-label">
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
