import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { FEATURED_PRODUCTS, formatPrice } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
export const dynamic = "force-dynamic"; // 👈 ADD THIS
export function generateStaticParams() {
  // 👈 ADD THIS
  return [{ locale: "fr" }, { locale: "nl" }];
}
interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Hero" });
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", nl: "/nl" },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Home" });
  const hr = await getTranslations({ locale, namespace: "Hero" });

  const shopHref = `/${locale}/shop`;

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

  const perks = [
    { icon: "💰", h: t("perk1H"), p: t("perk1P") },
    { icon: "✨", h: t("perk2H"), p: t("perk2P") },
    { icon: "🚀", h: t("perk3H"), p: t("perk3P") },
    { icon: "💬", h: t("perk4H"), p: t("perk4P") },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <p className="hero-eyebrow">{hr("eyebrow")}</p>
        <h1>
          {hr("h1a")}
          <br />
          {hr("h1b")}
          <em>{hr("h1c")}</em>
        </h1>
        <p className="hero-sub">{hr("sub")}</p>
        <div className="hero-btns">
          <Link href={shopHref} className="btn btn-white">
            {hr("ctaShop")}
          </Link>
          <Link href={`/${locale}#about`} className="btn btn-outline">
            {hr("ctaAbout")}
          </Link>
        </div>
      </section>

      {/* ── Featured products ── */}
      <section className="products-section">
        <div className="section-header">
          <p className="section-eyebrow">{t("featuredEyebrow")}</p>
          <h2
            className="sec-heading sec-heading--white"
            style={{ fontSize: "clamp(32px,4vw,52px)" }}
          >
            {t("featuredHeading")}
          </h2>
        </div>
        <div className="products-grid">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} locale={locale} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link
            href={shopHref}
            style={{
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: ".08em",
              color: "rgba(255,255,255,0.45)",
              borderBottom: "1px solid rgba(255,255,255,0.18)",
              paddingBottom: 2,
            }}
          >
            {t("viewAll")}
          </Link>
        </div>
      </section>

      {/* ── Sale banner ── */}
      <section className="sale-banner">
        <p className="sale-eyebrow">{t("saleEyebrow")}</p>
        <h2 className="sale-heading">
          {t("saleH1")}&nbsp;{t("saleH2")}
        </h2>
        <p className="sale-sub">{t("saleSub")}</p>
        <Link href={shopHref} className="btn btn-gold">
          {t("saleCta")}
        </Link>
      </section>

      {/* ── About ── */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-text">
            <h2>
              <strong>{t("aboutH")}</strong>
            </h2>
            <p>{t("aboutP1")}</p>
            <p>
              {t("aboutP2")} <strong>{t("aboutHighlight")}</strong>
            </p>
            <Link
              href={shopHref}
              className="btn btn-dark"
              style={{ marginTop: 32 }}
            >
              {t("exploreCta")}
            </Link>
          </div>
          <div className="about-img">
            <p className="about-quote">
              {locale === "fr"
                ? '"La nutrition cellulaire commence\nlà où la science rencontre\nl\'intégrité."'
                : '"Cellulaire voeding begint\nwaar wetenschap\nintegriteit ontmoet."'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Glow split ── */}
      <section className="glow-section">
        <div className="glow-inner">
          <div className="glow-visual" />
          <div className="glow-text">
            <span className="eyebrow">{t("glowEyebrow")}</span>
            <h2>
              {t("glowH1")} <strong>{t("glowH2")}</strong>
            </h2>
            <p>{t("glowP1")}</p>
            <p>{t("glowP2")}</p>
            <Link
              href={shopHref}
              className="btn btn-white"
              style={{ marginTop: 28, alignSelf: "flex-start" }}
            >
              {t("glowCta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust pillars ── */}
      <section className="trust-section">
        <div className="trust-header">
          <span className="eyebrow">{t("trustEyebrow")}</span>
          <h2>{t("trustH")}</h2>
        </div>
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

      {/* ── Bundle ── */}
      <section className="bundle-section">
        <div className="bundle-inner">
          <div className="bundle-visual"></div>
          <div className="bundle-text">
            <span className="eyebrow eyebrow-ink">{t("bundleEyebrow")}</span>
            <h2 dangerouslySetInnerHTML={{ __html: t("bundleH") }} />
            <p>{t("bundleP")}</p>
            <div className="bundle-perks">
              {perks.map((perk, i) => (
                <div className="perk" key={i}>
                  <div className="perk-icon">{perk.icon}</div>
                  <div className="perk-copy">
                    <h4>{perk.h}</h4>
                    <p>{perk.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={shopHref} className="btn btn-dark">
              {t("bundleCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
