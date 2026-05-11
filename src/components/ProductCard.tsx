"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAddItem } from "@/store/useCart";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

interface Props {
  product: Product;
  locale: string;
}

export default function ProductCard({ product }: Props) {
  const [added, setAdded] = useState(false);
  const addItem = useAddItem();

  const stars = (n: number) =>
    "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name.en,
      price: product.price,
      bottleClass: product.bottleClass,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="product-card"
      style={{ textDecoration: "none" }}
    >
      {product.badge && (
        <span className="product-badge">{product.badge.en}</span>
      )}

      <div className="product-img-wrap">
        <Image
          src={product.image}
          alt={product.name.en}
          width={280}
          height={260}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
        <span className="product-hover-cta">View product</span>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <span className="stars">{stars(product.rating)}</span>
          <span className="rating-text">
            {product.rating} | {product.reviews?.toLocaleString()} customers
          </span>
        </div>
        <h3 className="product-name">{product.name.en}</h3>
        <p className="product-desc">
          {product.tagline.en.slice(0, 72)}
          {product.tagline.en.length > 72 ? "…" : ""}
        </p>
        <div className="product-price-row">
          <div>
            <span className="price-old">{formatPrice(product.priceOld)}</span>
            <span className="price-sale">{formatPrice(product.price)}</span>
          </div>
          <button
            className={`btn-add${added ? " added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </Link>
  );
}
