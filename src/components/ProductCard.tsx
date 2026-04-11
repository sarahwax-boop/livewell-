"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAddItem } from "@/store/useCart";
import type { Product, Locale } from "@/lib/products";
import { formatPrice } from "@/lib/products";

interface Props {
  product: Product;
  locale: Locale;
}

export default function ProductCard({ product, locale }: Props) {
  const [added, setAdded] = useState(false);
  const addItem = useAddItem();

  const stars = (n: number) =>
    "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      bottleClass: product.bottleClass,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const addLabel = locale === "fr" ? "Ajouter" : "Toevoegen";
  const addedLabel = locale === "fr" ? "Ajouté ✓" : "Toegevoegd ✓";

  return (
    <Link
      href={`/${locale}/shop/${product.slug}`}
      className="product-card"
      style={{ textDecoration: "none" }}
    >
      {product.badge && (
        <span className="product-badge">{product.badge[locale]}</span>
      )}

      <div className="product-img-wrap">
        <Image
          src={product.image}
          alt={product.name[locale]}
          width={280}
          height={260}
          style={{ objectFit: "contain", padding: "16px" }}
        />
        <span className="product-hover-cta">
          {locale === "fr" ? "Voir le produit" : "Bekijk product"}
        </span>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <span className="stars">{stars(product.rating)}</span>
          <span className="rating-text">
            {product.rating} | {product.reviews?.toLocaleString()}{" "}
            {locale === "fr" ? "clients" : "klanten"}
          </span>
        </div>
        <h3 className="product-name">{product.name[locale]}</h3>
        <p className="product-desc">
          {product.tagline[locale].slice(0, 72)}
          {product.tagline[locale].length > 72 ? "…" : ""}
        </p>
        <div className="product-price-row">
          <div>
            <span className="price-old">
              {formatPrice(product.priceOld, locale)}
            </span>
            <span className="price-sale">
              {formatPrice(product.price, locale)}
            </span>
          </div>
          <button
            className={`btn-add${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? addedLabel : addLabel}
          </button>
        </div>
      </div>
    </Link>
  );
}
