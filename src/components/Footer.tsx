import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
export default async function Footer() {
  const t = await getTranslations("Footer");
  const n = await getTranslations("Nav");

  const menuLinks = [
    { label: n("home"), href: "/" },
    { label: n("shop"), href: "/shop" },
    { label: n("contact"), href: "/contact" },
  ];

  const legalLinks = [
    { label: t("terms"), href: "/legal/terms" },
    { label: t("privacy"), href: "/legal/privacy" },
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
            Live Well Ltd
            <br />
            Dublin, Ireland
            <br />
            <br />
            <a
              href="mailto:livewell4shop@gmail.com"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              livewell4shop@gmail.com
            </a>
          </p>
        </div>
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
