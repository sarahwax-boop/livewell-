"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useAddItem, useCheckout } from "@/store/useCart";
import type { Product, Locale } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

interface Labels {
  addToCart: string;
  addedToCart: string;
  buyNow: string;
  guarantee: string;
  guaranteeBody: string;
  disclaimer: string;
  quantity: string;
  clients: string;
  save: string;
  tabDesc: string;
  tabIng: string;
  tabSafety: string;
  related: string;
  relatedSub: string;
  crumbHome: string;
  crumbShop: string;
}

interface Props {
  product: Product;
  related: Product[];
  locale: Locale;
  labels: Labels;
}

function stars(n: number) {
  return "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
}

const AFFILIATE_URL = "https://www.geteveren.com/collections";

export default function PDPClient({ product, related, locale, labels }: Props) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [openTab, setOpenTab] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  // Individual stable hooks — no infinite loop
  const t = useTranslations("Product");
  const addItem = useAddItem();
  const checkout = useCheckout();

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      bottleClass: product.bottleClass,
      image: product.image, // <--- Add this line!
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const tabs = [
    { label: labels.tabDesc, html: product.descriptionHTML[locale] },
    { label: labels.tabIng, html: product.ingredientsHTML[locale] },
    { label: labels.tabSafety, html: product.safetyHTML[locale] },
  ];

  return (
    <>
      {/* ── Main 2-col layout ── */}
      <div style={{ background: "var(--cream)" }}>
        <div className="pdp-wrap">
          {/* Gallery */}
          <div className="pdp-gallery">
            {(() => {
              const allImgs = [product.image, ...product.gallery];
              return (
                <>
                  {/* Main image with slide animation */}
                  <div
                    className="pdp-main-img"
                    style={{
                      background: "var(--cream)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={allImgs[activeImg]}
                        alt={`${product.name[locale]} ${activeImg + 1}`}
                        width={480}
                        height={480}
                        style={{
                          objectFit: "contain",
                          padding: "0px",
                          width: "100%",
                          height: "100%",
                        }}
                        priority={activeImg === 0}
                        onError={(e) => {
                          // Fallback to main image if gallery image not found
                          (e.target as HTMLImageElement).src = product.image;
                        }}
                      />
                    </div>
                    {/* Image counter */}
                    <span className="pdp-img-counter">
                      {activeImg + 1} / {allImgs.length}
                    </span>
                  </div>

                  {/* Thumbnails */}
                  <div className="pdp-thumbs" style={{ marginTop: 12 }}>
                    {allImgs.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`pdp-thumb${activeImg === i ? " active" : ""}`}
                        aria-label={`Image ${i + 1}`}
                        style={{
                          border: "none",
                          cursor: "pointer",
                          background: "var(--cream)",
                          padding: 4,
                        }}
                      >
                        <Image
                          src={img}
                          alt={`${product.name[locale]} ${i + 1}`}
                          width={72}
                          height={72}
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = product.image;
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>

          {/* Info */}
          <div className="pdp-info">
            <div className="pdp-rating">
              <span className="stars">{stars(product.rating)}</span>
              <span className="pdp-rating-label">
                {t("excellent")} <strong>{product.rating}</strong> |{" "}
                {product.reviews.toLocaleString()} {labels.clients}
              </span>
            </div>

            <h1 className="pdp-name">{product.name[locale]}</h1>

            <div className="pdp-price-row">
              <span className="pdp-price-sale">
                {formatPrice(product.price, locale)}
              </span>
              <span className="pdp-price-old">
                {formatPrice(product.priceOld, locale)}
              </span>
              <span className="pdp-save">
                {labels.save} {product.save}
              </span>
            </div>

            <p className="pdp-headline">{product.headline[locale]}</p>

            <ul className="pdp-bullets">
              {product.bullets[locale].map((b, i) => (
                <li key={i}>
                  <span className="pdp-check">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="pdp-qty-row">
              <span className="pdp-qty-label">{labels.quantity}</span>
              <div className="pdp-qty">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                >
                  −
                </button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
            </div>

            <button
              className={`pdp-add-btn${added ? " added" : ""}`}
              onClick={handleAdd}
            >
              {added ? `✓ ${labels.addedToCart}` : labels.addToCart}
            </button>

            <p className="pdp-disclaimer">{labels.disclaimer}</p>

            <div className="pdp-accordion">
              {tabs.map((tab, i) => (
                <div className="pdp-acc-item" key={i}>
                  <button
                    className={`pdp-acc-trigger${openTab === i ? " open" : ""}`}
                    onClick={() => setOpenTab(openTab === i ? -1 : i)}
                  >
                    {tab.label}
                    <span className="pdp-acc-icon">+</span>
                  </button>
                  <div
                    className={`pdp-acc-body${openTab === i ? " open" : ""}`}
                    dangerouslySetInnerHTML={{ __html: tab.html }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="pdp-marquee-wrap">
        <div className="pdp-marquee">
          {[
            ...product.marquee,
            ...product.marquee,
            ...product.marquee,
            ...product.marquee,
          ].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* Why split */}
      <section className="pdp-why">
        <div className="pdp-why-inner">
          <div className="pdp-why-visual"></div>
          <div className="pdp-why-text">
            <span className="eyebrow eyebrow-ink">{t("whyEyebrow")}</span>
            <h2
              dangerouslySetInnerHTML={{ __html: product.whyTitle[locale] }}
            />
            {product.whyText[locale].map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <Link
              href={`/${locale}/shop`}
              className="btn btn-dark"
              style={{ marginTop: 28, alignSelf: "flex-start" }}
            >
              {locale === "fr" ? "Explorer la gamme" : "Ontdek het gamma"}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pdp-related">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="eyebrow">{labels.related}</span>
            <h2
              className="sec-heading sec-heading--white"
              style={{ fontSize: "clamp(26px,3vw,40px)" }}
            >
              {labels.relatedSub}
            </h2>
          </div>
          <div className="products-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
