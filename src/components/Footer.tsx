import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

interface Props {
  locale: Locale;
}

export default async function Footer({ locale }: Props) {
  // Server component must use getTranslations (async), not useTranslations
  const t = await getTranslations({ locale, namespace: "Footer" });
  const n = await getTranslations({ locale, namespace: "Nav" });

  const menuLinks = [
    { label: n("home"), href: `/${locale}` },
    { label: n("shop"), href: `/${locale}/shop` },
    { label: n("contact"), href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { label: t("terms"), href: `/${locale}/legal/terms` },
    { label: t("privacy"), href: `/${locale}/legal/privacy` },
  ];

  return (
    <footer>
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-logo">
            <Image
              src="/images/logo.svg"
              alt="Live Well"
              width={150}
              height={48}
            />
          </div>
          <p className="footer-tagline">{t("tagline")}</p>
          <p className="footer-disclaimer">{t("disclaimer")}</p>
        </div>

        {/* Menu */}
        <div className="footer-col">
          <h4>{t("menuTitle")}</h4>
          <ul>
            {menuLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>{t("legalTitle")}</h4>
          <ul>
            {legalLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className="footer-col">
          <h4>{t("aboutTitle")}</h4>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.6,
            }}
          >
            Live Well SRL
            <br />
            {locale === "fr" ? "Bruxelles, Belgique" : "Brussel, België"}
            <br />
            <br />
            <a
              href="mailto:support@livewell.be"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              support@livewell.be
            </a>
          </p>
        </div>
      </div>

      {/* Lang bar */}
      <div className="lang-bar">
        <span>{locale === "fr" ? "Langue / Taal" : "Taal / Langue"}</span>
        <Link
          href="/fr"
          className={`lang-pill${locale === "fr" ? " active" : ""}`}
        >
          FR
        </Link>
        <Link
          href="/nl"
          className={`lang-pill${locale === "nl" ? " active" : ""}`}
        >
          NL
        </Link>
      </div>

      {/* Bottom */}
      <div
        className="footer-bottom"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 40px" }}
      >
        <p className="footer-copy">
          © {new Date().getFullYear()} Live Well — {t("rights")}
        </p>
        <p className="footer-copy">{t("poweredBy")}</p>
      </div>
    </footer>
  );
}
