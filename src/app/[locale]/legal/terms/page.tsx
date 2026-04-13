import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/routing";
export const dynamic = "force-dynamic";
interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "fr"
        ? "Conditions Générales de Vente"
        : "Algemene Verkoopvoorwaarden",
    alternates: { languages: { fr: "/fr/legal/terms", nl: "/nl/legal/terms" } },
  };
}

const CONTENT = {
  fr: {
    title: "Conditions Générales de Vente",
    updated: "Dernière mise à jour : 1er janvier 2026",
    sections: [
      {
        h: "1. Parties",
        p: "Les présentes Conditions Générales de Vente (CGV) régissent les relations entre Live Well SRL, société à responsabilité limitée enregistrée en Belgique (ci-après « Live Well »), et toute personne physique ou morale souhaitant procéder à un achat via le site livewellshop.be (ci-après « l'Acheteur »).",
      },
      {
        h: "2. Produits et disponibilité",
        p: "Live Well propose à la vente des compléments alimentaires et produits de bien-être. Toutes les offres et prix sont valables dans la limite des stocks disponibles. En cas d'indisponibilité d'un produit après validation de la commande, Live Well s'engage à en informer l'Acheteur dans les meilleurs délais et à proposer un remboursement intégral.",
      },
      {
        h: "3. Prix",
        p: "Les prix indiqués sur le site sont exprimés en euros (€) toutes taxes comprises (TTC). Live Well se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable à la commande est celui en vigueur au moment de la validation. La livraison est offerte pour toute commande dépassant 60 € TTC.",
      },
      {
        h: "4. Commande",
        p: "L'Acheteur passe commande directement sur le site de notre partenaire Everen (geteveren.com). En cliquant sur « Commander », l'Acheteur est redirigé vers la boutique officielle Everen pour finaliser son achat. Live Well agit en qualité d'affilié et ne traite aucun paiement directement.",
      },
      {
        h: "5. Livraison",
        p: "Les commandes sont traitées et expédiées par notre partenaire Everen. Les délais de livraison indicatifs sont de 3 à 7 jours ouvrables pour la Belgique et de 5 à 10 jours ouvrables pour les autres pays de l'Union Européenne. Ces délais sont donnés à titre indicatif et ne constituent pas un engagement ferme.",
      },
      {
        h: "6. Droit de rétractation",
        p: "Conformément aux dispositions légales en vigueur, l'Acheteur dispose d'un délai de 30 jours à compter de la réception de sa commande pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités. Pour exercer ce droit, l'Acheteur doit contacter le service client d'Everen à l'adresse support@geteveren.com. Le remboursement sera effectué dans un délai de 14 jours suivant la réception des produits retournés.",
      },
      {
        h: "7. Programme d'affiliation",
        p: "Live Well est un site affilié au programme d'affiliation d'Everen. Lorsqu'un Acheteur est redirigé vers geteveren.com et effectue un achat, Live Well peut percevoir une commission. Cette commission n'affecte en aucune façon le prix payé par l'Acheteur.",
      },
      {
        h: "8. Loi applicable et juridiction",
        p: "Les présentes CGV sont soumises au droit belge. En cas de litige, et à défaut de résolution amiable, les tribunaux de Bruxelles seront seuls compétents.",
      },
      {
        h: "9. Contact",
        p: "Pour toute question relative aux présentes CGV : Live Well SRL, Bruxelles, Belgique — support@livewell.be",
      },
    ],
  },
  nl: {
    title: "Algemene Verkoopvoorwaarden",
    updated: "Laatste update: 1 januari 2026",
    sections: [
      {
        h: "1. Partijen",
        p: "Deze Algemene Verkoopvoorwaarden (AVV) regelen de relatie tussen Live Well SRL, een besloten vennootschap geregistreerd in België (hierna 'Live Well'), en elke natuurlijke of rechtspersoon die via de website livewellshop.be een aankoop wil doen (hierna 'Koper').",
      },
      {
        h: "2. Producten en beschikbaarheid",
        p: "Live Well biedt voedingssupplementen en welzijnsproducten te koop aan. Alle aanbiedingen en prijzen zijn geldig zolang de voorraad strekt. Bij onbeschikbaarheid van een product na bevestiging van de bestelling verbindt Live Well zich ertoe de Koper zo snel mogelijk te informeren en een volledige terugbetaling voor te stellen.",
      },
      {
        h: "3. Prijzen",
        p: "De op de website vermelde prijzen zijn uitgedrukt in euro (€), inclusief alle belastingen. Live Well behoudt zich het recht voor zijn prijzen op elk moment te wijzigen, met dien verstande dat de prijs die van toepassing is op de bestelling de prijs is die geldig is op het moment van bevestiging. Verzending is gratis voor bestellingen boven de € 60 inclusief btw.",
      },
      {
        h: "4. Bestelling",
        p: "De Koper plaatst zijn bestelling rechtstreeks op de website van onze partner Everen (geteveren.com). Door op 'Bestellen' te klikken, wordt de Koper doorgestuurd naar de officiële Everen-winkel om zijn aankoop af te ronden. Live Well treedt op als affiliate en verwerkt geen betalingen rechtstreeks.",
      },
      {
        h: "5. Levering",
        p: "Bestellingen worden verwerkt en verzonden door onze partner Everen. De indicatieve leveringstermijnen zijn 3 tot 7 werkdagen voor België en 5 tot 10 werkdagen voor andere landen van de Europese Unie. Deze termijnen zijn indicatief en vormen geen harde toezegging.",
      },
      {
        h: "6. Herroepingsrecht",
        p: "Overeenkomstig de geldende wettelijke bepalingen heeft de Koper een herroepingstermijn van 30 dagen vanaf de ontvangst van zijn bestelling, zonder opgave van redenen of betaling van boetes. Om dit recht uit te oefenen, moet de Koper contact opnemen met de klantenservice van Everen via support@geteveren.com. De terugbetaling vindt plaats binnen 14 dagen na ontvangst van de geretourneerde producten.",
      },
      {
        h: "7. Affiliateprogramma",
        p: "Live Well is een affiliatewebsite van het affiliateprogramma van Everen. Wanneer een Koper wordt doorgestuurd naar geteveren.com en een aankoop doet, kan Live Well een commissie ontvangen. Deze commissie heeft op geen enkele wijze invloed op de prijs die de Koper betaalt.",
      },
      {
        h: "8. Toepasselijk recht en bevoegde rechtbank",
        p: "Deze AVV zijn onderworpen aan het Belgische recht. Bij een geschil, en bij gebreke van een minnelijke schikking, zijn uitsluitend de rechtbanken van Brussel bevoegd.",
      },
      {
        h: "9. Contact",
        p: "Voor vragen over deze AVV: Live Well SRL, Brussel, België — support@livewell.be",
      },
    ],
  },
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const c = CONTENT[locale];

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 40px" }}>
        {/* Breadcrumb */}
        <nav
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            marginBottom: 40,
            fontSize: 12,
            color: "var(--ink3)",
          }}
        >
          <Link href={`/${locale}`} style={{ color: "var(--ink2)" }}>
            {locale === "fr" ? "Accueil" : "Startpagina"}
          </Link>
          <span>›</span>
          <span style={{ color: "var(--ink)" }}>{c.title}</span>
        </nav>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px,5vw,60px)",
            fontWeight: 300,
            color: "var(--ink)",
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {c.title}
        </h1>
        <p style={{ fontSize: 13, color: "var(--ink3)", marginBottom: 60 }}>
          {c.updated}
        </p>

        {/* Sections */}
        {c.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: 24,
                fontWeight: 400,
                color: "var(--ink)",
                marginBottom: 12,
              }}
            >
              {s.h}
            </h2>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "var(--ink2)",
                lineHeight: 1.8,
              }}
            >
              {s.p}
            </p>
          </div>
        ))}

        {/* Back link */}
        <div
          style={{
            marginTop: 60,
            paddingTop: 32,
            borderTop: "1px solid var(--sand)",
          }}
        >
          <Link
            href={`/${locale}`}
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "0.06em",
            }}
          >
            ←{" "}
            {locale === "fr" ? "Retour à l'accueil" : "Terug naar startpagina"}
          </Link>
        </div>
      </div>
    </div>
  );
}
