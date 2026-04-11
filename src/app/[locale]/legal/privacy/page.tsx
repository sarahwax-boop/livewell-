import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";

interface Props { params: Promise<{ locale: Locale }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "fr" ? "Politique de Confidentialité" : "Privacybeleid",
    alternates: { languages: { fr: "/fr/legal/privacy", nl: "/nl/legal/privacy" } },
  };
}

const CONTENT = {
  fr: {
    title: "Politique de Confidentialité",
    updated: "Dernière mise à jour : 1er janvier 2026 · Conforme au RGPD",
    sections: [
      {
        h: "1. Responsable du traitement",
        p: "Le responsable du traitement des données personnelles collectées via le site livewellshop.be est Live Well SRL, Bruxelles, Belgique — support@livewell.be",
      },
      {
        h: "2. Données collectées",
        p: "Dans le cadre de votre utilisation du site, Live Well peut être amené à collecter les catégories de données suivantes : données d'identification (nom, prénom, adresse e-mail), données de navigation (adresse IP, pages visitées, durée de visite), données de panier (produits sélectionnés, stockés localement dans votre navigateur via localStorage) et données de formulaire de contact (nom, e-mail, sujet, message). Live Well ne collecte pas directement vos données de paiement.",
      },
      {
        h: "3. Finalités du traitement",
        p: "Les données collectées sont utilisées aux fins suivantes : répondre à vos demandes via le formulaire de contact, améliorer l'expérience utilisateur et les performances du site, analyser le trafic et l'utilisation du site (statistiques anonymisées), vous rediriger vers notre partenaire Everen pour la finalisation de vos achats, respecter nos obligations légales et réglementaires.",
      },
      {
        h: "4. Base légale du traitement",
        p: "Le traitement de vos données personnelles est fondé sur votre consentement pour les cookies analytiques et marketing, l'intérêt légitime de Live Well pour les cookies strictement nécessaires au fonctionnement du site, l'exécution d'un contrat pour le traitement des demandes de contact, et le respect d'obligations légales pour la conservation de certains documents.",
      },
      {
        h: "5. Cookies et stockage local",
        p: "Notre site utilise des cookies essentiels au fonctionnement (panier, navigation) et des cookies analytiques (audience, performances). Le contenu de votre panier est stocké localement dans votre navigateur via la technologie localStorage. Ces données restent sur votre appareil et ne sont pas transmises à nos serveurs. Vous pouvez les effacer à tout moment en vidant le cache de votre navigateur.",
      },
      {
        h: "6. Partage des données",
        p: "Live Well ne vend, ne loue ni ne cède vos données personnelles à des tiers. Vos données peuvent être transmises à Everen (geteveren.com) lorsque vous êtes redirigé pour finaliser un achat, et à des prestataires techniques (hébergement, analyse d'audience) dans le cadre strict de leurs missions.",
      },
      {
        h: "7. Durée de conservation",
        p: "Données de contact : 3 ans à compter du dernier contact. Données de navigation : 13 mois maximum. Données de panier (localStorage) : jusqu'à suppression par l'utilisateur. Données comptables : 7 ans (obligation légale).",
      },
      {
        h: "8. Vos droits",
        p: "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation concernant vos données personnelles. Pour exercer ces droits, contactez-nous à support@livewell.be. Vous avez également le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données belge (APD) : autoriteprotectiondonnees.be",
      },
      {
        h: "9. Sécurité",
        p: "Live Well met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation. Notre site est sécurisé via le protocole HTTPS.",
      },
      {
        h: "10. Modifications",
        p: "Live Well se réserve le droit de modifier la présente politique de confidentialité à tout moment. En cas de modification substantielle, nous vous en informerons via le site ou par e-mail.",
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    updated: "Laatste update: 1 januari 2026 · AVG-conform",
    sections: [
      {
        h: "1. Verwerkingsverantwoordelijke",
        p: "De verwerkingsverantwoordelijke voor de persoonsgegevens die via de website livewellshop.be worden verzameld, is Live Well SRL, Brussel, België — support@livewell.be",
      },
      {
        h: "2. Verzamelde gegevens",
        p: "In het kader van uw gebruik van de website kan Live Well de volgende categorieën gegevens verzamelen: identificatiegegevens (naam, voornaam, e-mailadres), navigatiegegevens (IP-adres, bezochte pagina's, bezoekduur), winkelwagengegevens (geselecteerde producten, lokaal opgeslagen in uw browser via localStorage) en formuliergegevens (naam, e-mail, onderwerp, bericht). Live Well verzamelt uw betalingsgegevens niet rechtstreeks.",
      },
      {
        h: "3. Verwerkingsdoeleinden",
        p: "De verzamelde gegevens worden gebruikt voor de volgende doeleinden: reageren op uw vragen via het contactformulier, verbeteren van de gebruikerservaring en websiteprestaties, analyseren van het verkeer en gebruik van de website (geanonimiseerde statistieken), doorverwijzen naar onze partner Everen voor het afronden van uw aankopen, en naleven van onze wettelijke en reglementaire verplichtingen.",
      },
      {
        h: "4. Rechtsgrondslag",
        p: "De verwerking van uw persoonsgegevens is gebaseerd op uw toestemming voor analytische en marketingcookies, het legitiem belang van Live Well voor strikt noodzakelijke cookies voor de werking van de website, de uitvoering van een overeenkomst voor de verwerking van contactverzoeken, en de naleving van wettelijke verplichtingen voor het bewaren van bepaalde documenten.",
      },
      {
        h: "5. Cookies en lokale opslag",
        p: "Onze website maakt gebruik van essentiële cookies voor de werking (winkelwagen, navigatie) en analytische cookies (publiek, prestaties). De inhoud van uw winkelwagen wordt lokaal in uw browser opgeslagen via de localStorage-technologie. Deze gegevens blijven op uw apparaat en worden niet naar onze servers verzonden. U kunt ze op elk moment verwijderen door de cache van uw browser te legen.",
      },
      {
        h: "6. Gegevensdeling",
        p: "Live Well verkoopt, verhuurt of geeft uw persoonsgegevens niet door aan derden. Uw gegevens kunnen worden doorgegeven aan Everen (geteveren.com) wanneer u wordt doorgestuurd om een aankoop af te ronden, en aan technische dienstverleners (hosting, publieksanalyse) in het strikte kader van hun opdrachten.",
      },
      {
        h: "7. Bewaartermijnen",
        p: "Contactgegevens: 3 jaar na het laatste contact. Navigatiegegevens: maximaal 13 maanden. Winkelwagengegevens (localStorage): tot verwijdering door de gebruiker. Boekhoudkundige gegevens: 7 jaar (wettelijke verplichting).",
      },
      {
        h: "8. Uw rechten",
        p: "Overeenkomstig de AVG heeft u recht op inzage, rectificatie, verwijdering, overdraagbaarheid, bezwaar en beperking met betrekking tot uw persoonsgegevens. Om deze rechten uit te oefenen, kunt u contact met ons opnemen via support@livewell.be. U heeft ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA): gegevensbeschermingsautoriteit.be",
      },
      {
        h: "9. Beveiliging",
        p: "Live Well treft passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeoorloofde toegang, verlies, vernietiging of openbaarmaking. Onze website is beveiligd via het HTTPS-protocol.",
      },
      {
        h: "10. Wijzigingen",
        p: "Live Well behoudt zich het recht voor dit privacybeleid op elk moment te wijzigen. Bij wezenlijke wijzigingen zullen wij u hiervan op de hoogte stellen via de website of per e-mail.",
      },
    ],
  },
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale];

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 40px" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 40, fontSize: 12, color: "var(--ink3)" }}>
          <Link href={`/${locale}`} style={{ color: "var(--ink2)" }}>
            {locale === "fr" ? "Accueil" : "Startpagina"}
          </Link>
          <span>›</span>
          <span style={{ color: "var(--ink)" }}>{c.title}</span>
        </nav>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--serif)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 300,
          color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.02em",
        }}>
          {c.title}
        </h1>
        <p style={{ fontSize: 13, color: "var(--ink3)", marginBottom: 60 }}>{c.updated}</p>

        {/* Sections */}
        {c.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{
              fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400,
              color: "var(--ink)", marginBottom: 12,
            }}>
              {s.h}
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "var(--ink2)", lineHeight: 1.8 }}>
              {s.p}
            </p>
          </div>
        ))}

        {/* Back link */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--sand)" }}>
          <Link href={`/${locale}`} style={{
            fontFamily: "var(--sans)", fontSize: 13, fontWeight: 500,
            color: "var(--gold)", letterSpacing: "0.06em",
          }}>
            ← {locale === "fr" ? "Retour à l'accueil" : "Terug naar startpagina"}
          </Link>
        </div>
      </div>
    </div>
  );
}
