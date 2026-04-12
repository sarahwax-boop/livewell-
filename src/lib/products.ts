export type Locale = "fr" | "nl";

export interface Product {
  id: string;
  slug: string;
  image: string;
  gallery: string[]; // up to 4 extra images
  bottleClass: string; // b1–b6
  category: ("energy" | "beauty" | "immunity" | "weight loss")[];
  price: number;
  priceOld: number;
  save: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  badge?: Record<Locale, string>;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  headline: Record<Locale, string>;
  bullets: Record<Locale, string[]>;
  marquee: string[];
  descriptionHTML: Record<Locale, string>;
  ingredientsHTML: Record<Locale, string>;
  safetyHTML: Record<Locale, string>;
  benefits: Array<{ icon: string; title: Record<Locale, string>; desc: Record<Locale, string> }>;
  whyTitle: Record<Locale, string>;
  whyText: Record<Locale, string[]>;
  differentiators: Array<{ icon: string; title: Record<Locale, string>; desc: Record<Locale, string> }>;
  ingredients: Array<{ emoji: string; name: Record<Locale, string>; desc: Record<Locale, string> }>;
  affiliateLink: string;
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: "radiantglow",
    slug: "radiantglow",
    image: "/images/products/radiantglow.webp",
    gallery: [
      "/images/products/radiantglow-2.webp",
      "/images/products/radiantglow-3.webp",
      "/images/products/radiantglow-4.webp",
      "/images/products/radiantglow-5.webp",
    ],
    bottleClass: "b2",
    category: ["beauty"],
    price: 34.90,
    priceOld: 45.90,
    save: "20%",
    rating: 4.7,
    reviews: 836,
    featured: true,
    badge: { fr: "Nouveau", nl: "Nieuw" },
    affiliateLink: "#",
    name: { fr: "RadiantGlow Gummies", nl: "RadiantGlow Gummies" },
    tagline: {
      fr: "Boost quotidien délicieux pour les cheveux, la peau et les ongles.",
      nl: "Dagelijkse heerlijke boost voor haar, huid en nagels.",
    },
    headline: {
      fr: "Notre élixir RadiantGlow représente une nouvelle référence dans la science nutricosmétique, avec une synergie d'ingrédients bio-actifs de haute puissance. Ce n'est pas seulement un supplément ; c'est l'évolution ultime de votre routine beauté.",
      nl: "Onze RadiantGlow-elixer vormt een nieuwe maatstaf in de nutricosmetische wetenschap, met een synergie van hoogwaardige bio-actieve ingrediënten. Het is niet zomaar een supplement; het is de ultieme evolutie van uw schoonheidsritueel.",
    },
    bullets: {
      fr: [
        "Soutient la brillance naturelle des cheveux, de la peau et des ongles",
        "Enrichi en biotine, collagène et vitamines essentielles",
        "Saveur légère et rafraîchissante de fruit de la passion",
        "Formule propre sans arômes artificiels ni colorants",
      ],
      nl: [
        "Ondersteunt de natuurlijke glans van haar, huid en nagels",
        "Verrijkt met biotine, collageen en essentiële vitamines",
        "Lichte en verfrissende passievruchtensmaak",
        "Zuivere formule zonder kunstmatige aroma's of kleurstoffen",
      ],
    },
    marquee: ["Hair Skin & Nails", "Passion Fruit Flavor", "Clean Formula", "Daily Beauty Support"],
    whyTitle: { fr: "La beauté <em>commence</em> de l'intérieur.", nl: "Schoonheid begint <em>van binnenuit</em>." },
    whyText: {
      fr: ["L'architecture manquante de votre routine beauté. Pas un ajout, mais la fondation définitive. Le véritable éclat est un sous-produit biologique de la santé cellulaire. RadiantGlow ne se contente pas de « couvrir » — il reconstruit. En délivrant une synergie de collagène marin et de biotine de haute puissance directement à votre organisme, nous contournons les limites des soins de la peau traditionnels. Découvrez la distinction d'une formule où chaque milligramme est conçu pour se synchroniser avec les cycles naturels de renouvellement de votre corps."],
      nl: ["De ontbrekende architectuur in uw schoonheidsritueel. Geen toevoeging, maar de definitieve fundering. Ware glans is een biologisch bijproduct van cellulaire gezondheid. RadiantGlow 'maskeert' niet alleen — het reconstrueert. Door een krachtige synergie van marien collageen en biotine rechtstreeks aan uw systeem te leveren, omzeilen we de beperkingen van traditionele huidverzorging. Ervaar het onderscheid van een formule waarbij elke milligram is ontwikkeld om te synchroniseren met de natuurlijke vernieuwingscycli van uw lichaam."],
    },
    benefits: [
      { icon: "✨", title: { fr: "Éclat naturel", nl: "Natuurlijke glans" }, desc: { fr: "Soutient un teint lumineux et naturellement radieux", nl: "Ondersteunt een stralende, natuurlijk glanzende teint" } },
      { icon: "💇", title: { fr: "Cheveux forts", nl: "Sterk haar" }, desc: { fr: "Aide à renforcer et nourrir les cheveux de l'intérieur", nl: "Helpt haar van binnenuit te versterken en voeden" } },
      { icon: "💅", title: { fr: "Ongles solides", nl: "Sterke nagels" }, desc: { fr: "Formule conçue pour des ongles plus forts et résistants", nl: "Formule ontworpen voor sterkere, meer resistente nagels" } },
      { icon: "🌸", title: { fr: "Peau hydratée", nl: "Gehydrateerde huid" }, desc: { fr: "Soutient l'élasticité et l'hydratation de la peau", nl: "Ondersteunt de elasticiteit en hydratatie van de huid" } },
    ],
    differentiators: [
      { icon: "🍭", title: { fr: "Saveur naturelle", nl: "Natuurlijke smaak" }, desc: { fr: "Arôme naturel de fruit de la passion, sans sucres ajoutés", nl: "Natuurlijk passievruchtaroma, zonder toegevoegde suikers" } },
      { icon: "✅", title: { fr: "Testé par des tiers", nl: "Derdenpartij getest" }, desc: { fr: "Chaque lot vérifié indépendamment pour la pureté", nl: "Elk lot onafhankelijk gecontroleerd op zuiverheid" } },
      { icon: "🌱", title: { fr: "Ingrédients propres", nl: "Zuivere ingrediënten" }, desc: { fr: "Sans colorants, arômes ou conservateurs artificiels", nl: "Zonder kunstmatige kleurstoffen, aroma's of conserveermiddelen" } },
      { icon: "💊", title: { fr: "Biotine 5000mcg", nl: "Biotine 5000mcg" }, desc: { fr: "Dose cliniquement étudiée pour la beauté", nl: "Klinisch bestudeerde dosis voor schoonheid" } },
      { icon: "🤝", title: { fr: "Collagène marin", nl: "Marien collageen" }, desc: { fr: "Soutient l'élasticité et la fermeté de la peau", nl: "Ondersteunt elasticiteit en stevigheid van de huid" } },
      { icon: "🔬", title: { fr: "Vitamine C & E", nl: "Vitamine C & E" }, desc: { fr: "Antioxydants puissants pour la protection cellulaire", nl: "Krachtige antioxidanten voor cellulaire bescherming" } },
    ],
    ingredients: [
      { emoji: "💊", name: { fr: "Biotine (5 000 mcg)", nl: "Biotine (5 000 mcg)" }, desc: { fr: "Vitamine B essentielle pour la santé des cheveux, de la peau et des ongles.", nl: "Essentieel B-vitamine voor de gezondheid van haar, huid en nagels." } },
      { emoji: "🌊", name: { fr: "Collagène marin (100 mg)", nl: "Marien collageen (100 mg)" }, desc: { fr: "Peptides hautement biodisponibles pour l'élasticité de la peau.", nl: "Hoog biobeschikbare peptiden voor huidlasticiteit." } },
      { emoji: "🍊", name: { fr: "Vitamine C & E", nl: "Vitamine C & E" }, desc: { fr: "Antioxydants qui protègent les cellules du stress oxydatif.", nl: "Antioxidanten die cellen beschermen tegen oxidatieve stress." } },
    ],
    descriptionHTML: {
      fr: `<p>Nos <strong>RadiantGlow Gummies</strong> sont un boost quotidien délicieux pour la santé des cheveux, de la peau et des ongles.</p><p>Formulé avec une saveur rafraîchissante de <strong>fruit de la passion</strong>. Sans arômes artificiels, sans colorants, sans conservateurs†.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Non évalué par les autorités sanitaires.</p>`,
      nl: `<p>Onze <strong>RadiantGlow Gummies</strong> zijn een dagelijkse, heerlijke boost voor de gezondheid van haar, huid en nagels.</p><p>Geformuleerd met een verfrissende smaak van <strong>passievrucht</strong>. Zonder kunstmatige aroma's, kleurstoffen of conserveermiddelen†.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p><strong>Actifs (par 2 gummies) :</strong><br>Vitamine A (sous forme d'acétate de rétinyle), Vitamine C (sous forme d'acide ascorbique), Vitamine D (sous forme de cholécalciférol), Vitamine E (sous forme d'acétate de dl-alpha tocophéryle), Vitamine B-6 (sous forme de chlorhydrate de pyridoxine), Folate, Vitamine B-12 (sous forme de cyanocobalamine), Biotine, Acide pantothénique (sous forme de d-pantothénate de calcium), Iode (sous forme d'iodure de potassium), Zinc (sous forme de citrate de zinc), PABA (acide para-aminobenzoïque), Collagène (poisson), Silicium, Sirop de glucose, Sucre, Glucose, Pectine, Acide citrique, Citrate de sodium, Arôme fruit de la passion, Huile végétale (contient de la cire de carnauba), Concentré de jus de carotte pourpre.</p><p><strong>60 gummies · 30 portions</strong></p>`,
      nl: `<p><strong>Actieve ingrediënten (per 2 gummies):</strong><br>Vitamine A (als retinylacetaat), Vitamine C (als ascorbinezuur), Vitamine D (als cholecalciferol), Vitamine E (als dl-alfa-tocoferylacetaat), Vitamine B-6 (als pyridoxine HCI), Folaat, Vitamine B-12 (als cyanocobalamine), Biotine, Pantotheenzuur (als calcium-d-pantothenaat), Jodium (als kaliumjodide), Zink (als zinkcitraat), PABA (para-aminobenzoëzuur), Collageen (vis), Silicium, Glucosestroop, Suiker, Glucose, Pectine, Citroenzuur, Natriumcitraat, Passievruchtaroma, Plantaardige olie (bevat carnaubawas), Paarse wortelsapconcentraat.</p><p><strong>60 gummies · 30 porties</strong></p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> Consommer 2 gummies par jour, de préférence pendant un repas.</p><p><strong>Avertissement :</strong> Ne pas dépasser la dose recommandée. Conserver dans un endroit frais et sec, à l'abri de la lumière.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> 2 gummies per dag innemen, bij voorkeur bij een maaltijd.</p><p><strong>Waarschuwing:</strong> Niet de aanbevolen dosis overschrijden. Op een koele, droge en lichte plaats bewaren.</p>`,
    },
  },
    {
      id: "berberine",
    slug: "berberine",
    image: "/images/products/berberine.webp",
    gallery: [
      "/images/products/berberine-2.webp",
      "/images/products/berberine-3.webp",

      "/images/products/berberine-6.webp",

    ],
    bottleClass: "b4",
    category: ["weight loss"],
    price: 30.00,
    priceOld: 37.90,
    save: "20%",
    rating: 4.7,
    reviews: 267,
    affiliateLink: "#",
    name: { fr: "Berberine", nl: "Berberine" },
    tagline: { fr: "Cette formule offre un soutien moléculaire pour l'équilibre métabolique, une glycémie saine et la résilience cardiovasculaire..", nl: "Deze formule is ontworpen voor de moderne mens die waarde hecht aan zowel discipline als resultaat, en biedt ondersteuning op moleculair niveau voor metabole balans, een gezonde bloedsuikerspiegel en cardiovasculaire veerkracht." },
    headline: { fr: "Une formule ciblée pour l’équilibre métabolique, la glycémie et la santé du cœur.", nl: "Voor wie gaat voor resultaat: een gerichte formule voor metabole balans, een gezonde bloedsuikerspiegel en een sterk hart." },
    bullets: {
      fr: ["Formulé avec de la Berbérine pure à 97 % pour une efficacité et une absorption maximales.", "Optimise votre énergie et maintient votre métabolisme actif.", "Nous utilisons des extraits d'écorce et de racine de haute qualité pour garantir une dose efficace.", "Capsules végétales : une formule pure à l'huile d'olive, sans aucun ajout artificiel."],
      nl: ["Gemaakt met 97 % zuivere Berbérine voor maximale opname en resultaat.", "Optimaliseert je energie en houdt je metabolisme actief.", "We gebruiken hoogwaardige schors- en wortelextracten om een effectieve dosering te garanderen.", "Plantaardige capsules: een pure formule met olijfolie, zonder kunstmatige toevoegingen."],
    },
    marquee: ["Antioxidants", "Cardiovascular System", "Healthy Digestion", "Weight Loss", "Healthy blood sugar levels"],
    whyTitle: { fr: "L'équilibre commence par <em>la bonne</em> nutrition.", nl: "Balans begint met <em>de juiste</em> voeding." },
    whyText: {
      fr: ["Cette formule intelligente travaille avec votre corps pour aider à gérer les fringales et maintenir votre énergie stable tout au long de la journée."],
      nl: ["Chronische stress put onze cognitieve reserves uit. <strong>Mind Balance</strong> is geformuleerd om het zenuwstelsel te ondersteunen.", "<strong>Ashwagandha KSM-66</strong> is het meest bestudeerde extract om cortisol te verlagen."],
    },
    benefits: [
      { icon: "🧘", title: { fr: "Gestion du stress", nl: "Stressbeheersing" }, desc: { fr: "L'ashwagandha aide à moduler la réponse au stress", nl: "Ashwagandha helpt de stressrespons te moduleren" } },
      { icon: "🎯", title: { fr: "Focus & concentration", nl: "Focus & concentratie" }, desc: { fr: "La L-Théanine favorise un état de concentration détendue", nl: "L-Theanine bevordert een ontspannen concentratiestatus" } },
      { icon: "😊", title: { fr: "Équilibre émotionnel", nl: "Emotioneel evenwicht" }, desc: { fr: "Soutient une humeur stable et un bien-être mental", nl: "Ondersteunt een stabiele stemming en mentaal welzijn" } },
      { icon: "🌙", title: { fr: "Sommeil réparateur", nl: "Herstellende slaap" }, desc: { fr: "Aide à améliorer la qualité du sommeil", nl: "Helpt de slaapkwaliteit te verbeteren" } },
    ],
    differentiators: [
      { icon: "🔬", title: { fr: "KSM-66 breveté", nl: "Gepatenteerd KSM-66" }, desc: { fr: "La forme d'ashwagandha la plus étudiée", nl: "De meest bestudeerde vorm van ashwagandha" } },
      { icon: "☕", title: { fr: "Sans caféine", nl: "Zonder cafeïne" }, desc: { fr: "Focus naturel sans pic d'énergie", nl: "Natuurlijke focus zonder energiepiek" } },
      { icon: "✅", title: { fr: "Végan certifié", nl: "Veganistisch gecertificeerd" }, desc: { fr: "Aucun ingrédient d'origine animale", nl: "Geen ingrediënten van dierlijke oorsprong" } },
      { icon: "🌿", title: { fr: "Plantes adaptogènes", nl: "Adaptogene planten" }, desc: { fr: "Tradition millénaire validée par la science", nl: "Millennialange traditie gevalideerd door wetenschap" } },
      { icon: "💊", title: { fr: "Biodisponibilité élevée", nl: "Hoge biobeschikbaarheid" }, desc: { fr: "Formule optimisée pour une absorption maximale", nl: "Formule geoptimaliseerd voor maximale absorptie" } },
      { icon: "🏭", title: { fr: "GMP certifié", nl: "GMP gecertificeerd" }, desc: { fr: "Produit dans des installations certifiées", nl: "Geproduceerd in gecertificeerde faciliteiten" } },
    ],
    ingredients: [
      { emoji: "🌿", name: { fr: "Ashwagandha KSM-66 (600 mg)", nl: "Ashwagandha KSM-66 (600 mg)" }, desc: { fr: "L'extrait le plus puissant pour réduire le cortisol et améliorer la résistance au stress.", nl: "Het krachtigste extract om cortisol te verlagen en stressweerstand te verbeteren." } },
      { emoji: "🍵", name: { fr: "L-Théanine (200 mg)", nl: "L-Theanine (200 mg)" }, desc: { fr: "Naturellement présent dans le thé vert. Favorise une concentration détendue.", nl: "Van nature aanwezig in groene thee. Bevordert ontspannen concentratie." } },
      { emoji: "💊", name: { fr: "Complexe Vitamine B", nl: "B-vitaminencomplex" }, desc: { fr: "B6, B9 et B12 pour soutenir la synthèse des neurotransmetteurs.", nl: "B6, B9 en B12 voor het ondersteunen van neurotransmittersynthese." } },
    ],
    descriptionHTML: {
      fr: `<p>À base d'extrait de <strong>chlorhydrate de Berbérine granulaire</strong> pur à 97 %, cette formule optimise la transformation de l'énergie par votre corps. C’est la solution botanique idéale pour ceux qui privilégient la discipline, vous aidant à <strong>maintenir un poids sain</strong> et à préserver votre élan au quotidien.</p>`,
      nl: `<p>Dankzij het <strong>granulair Berberine-hydrochloride extract</strong> met een zuiverheid van 97 %, helpt deze formule je lichaam om energie efficiënter te verwerken. Het is een zuivere, botanische oplossing voor wie kiest voor discipline: ondersteuning om een <strong>gezond gewicht</strong> te behouden en je momentum te beschermen.</p>`,
    },
    ingredientsHTML: {
      fr: `<p>Extrait de chlorhydrate de berbérine granulaire 97 % (écorce), extrait de chlorhydrate de berbérine granulaire 8 % (écorce/racine), cellulose (capsule végétale), MCC (cellulose microcristalline), L-Leucine, huile d'olive  - <strong> 60 capsules</strong></p>`,
      nl: `Granulair berberine-hydrochloride extract 97% (schors), granulair berberine-hydrochloride extract 8% (schors/wortel), cellulose (plantaardige capsule), MCC (microkristallijne cellulose), L-Leucine, olijfolie - <strong> 60 capsules</strong></p>`,
    },
        safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> 2 gélules par jour avec un grand verre d'eau.</p><p><strong>Avertissement :</strong> Ne pas dépasser la dose recommandée. Déconseillé aux femmes enceintes ou allaitantes et aux enfants de moins de 18 ans. Conserver dans un endroit frais et sec.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> 2 capsules per dag met een groot glas water.</p><p><strong>Waarschuwing:</strong> Niet de aanbevolen dosis overschrijden. Afgeraden voor zwangere of zogende vrouwen en kinderen onder 18 jaar. Op een koele, droge plaats bewaren.</p>`,
    },
  },
  {
    id: "appetite-strips",
    slug: "appetite-strips",
    image: "/images/products/appetite-strips.webp",
    gallery: [
      "/images/products/appetite-strips-2.webp",
      "/images/products/appetite-strips-3.webp",
      "/images/products/appetite-strips-4.webp",
      "/images/products/appetite-strips-5.webp",
      "/images/products/appetite-strips-6.webp",
    ],
    bottleClass: "b4",
    category: ["energy", "weight loss"],
    price: 27.92,
    priceOld: 34.90,
    save: "20%",
    rating: 4.7,
    reviews: 267,
    affiliateLink: "#",
    name: { fr: "Bandelettes Équilibre Appétit & Contrôle du Poids", nl: "Strips voor Appetijtbeheersing & Gewichtsbeheersing" },
    tagline: { fr: "Nous avons créé une formule qui agit en harmonie avec votre corps.", nl: "We hebben een formule gecreëerd die samenwerkt met uw lichaam." },
    headline: { fr: "En associant la sagesse traditionnelle du Safran à la précision métabolique du Chrome et du Molybdène, nous avons créé une formule qui agit en harmonie avec les rythmes naturels de votre corps.", nl: "Door de traditionele wijsheid van Saffraan te combineren met de metabole precisie van Chroomen Molybdeen, hebben we een formule gecreëerd die samenwerkt met de natuurlijke ritmes van uw lichaam." },
    bullets: {
      fr: ["Le safran et le chrome s'associent pour équilibrer vos envies.", "Les bandelettes orales se dissolvent rapidement pour une absorption efficace.", "Maintenez une glycémie saine grâce à notre formule métabolique précise.", "Atteignez vos objectifs de bien-être avec cette routine quotidienne pratique."],
      nl: ["Saffraan en chroom werken samen om uw dagelijkse trek te beheersen.", "Geavanceerde strips lossen snel op voor een zeer effectieve opname.", "Behoud een gezonde bloedsuikerspiegel met onze nauwkeurige metabole formule.", "Bereik uw welzijnsdoelen met deze handige en draagbare dagelijkse routine."],
    },
    marquee: ["Appetite Balance", "Weight Support Strips", "Satiety", "Healthy blood sugar levels"],
    whyTitle: { fr: "L'équilibre mental commence par <em>la bonne</em> nutrition.", nl: "Mentale balans begint met <em>de juiste</em> voeding." },
    whyText: {
      fr: ["Cette formule intelligente travaille avec votre corps pour aider à gérer les fringales et maintenir votre énergie stable tout au long de la journée."],
      nl: ["Chronische stress put onze cognitieve reserves uit. <strong>Mind Balance</strong> is geformuleerd om het zenuwstelsel te ondersteunen.", "<strong>Ashwagandha KSM-66</strong> is het meest bestudeerde extract om cortisol te verlagen."],
    },
    benefits: [
      { icon: "🧘", title: { fr: "Gestion du stress", nl: "Stressbeheersing" }, desc: { fr: "L'ashwagandha aide à moduler la réponse au stress", nl: "Ashwagandha helpt de stressrespons te moduleren" } },
      { icon: "🎯", title: { fr: "Focus & concentration", nl: "Focus & concentratie" }, desc: { fr: "La L-Théanine favorise un état de concentration détendue", nl: "L-Theanine bevordert een ontspannen concentratiestatus" } },
      { icon: "😊", title: { fr: "Équilibre émotionnel", nl: "Emotioneel evenwicht" }, desc: { fr: "Soutient une humeur stable et un bien-être mental", nl: "Ondersteunt een stabiele stemming en mentaal welzijn" } },
      { icon: "🌙", title: { fr: "Sommeil réparateur", nl: "Herstellende slaap" }, desc: { fr: "Aide à améliorer la qualité du sommeil", nl: "Helpt de slaapkwaliteit te verbeteren" } },
    ],
    differentiators: [
      { icon: "🔬", title: { fr: "KSM-66 breveté", nl: "Gepatenteerd KSM-66" }, desc: { fr: "La forme d'ashwagandha la plus étudiée", nl: "De meest bestudeerde vorm van ashwagandha" } },
      { icon: "☕", title: { fr: "Sans caféine", nl: "Zonder cafeïne" }, desc: { fr: "Focus naturel sans pic d'énergie", nl: "Natuurlijke focus zonder energiepiek" } },
      { icon: "✅", title: { fr: "Végan certifié", nl: "Veganistisch gecertificeerd" }, desc: { fr: "Aucun ingrédient d'origine animale", nl: "Geen ingrediënten van dierlijke oorsprong" } },
      { icon: "🌿", title: { fr: "Plantes adaptogènes", nl: "Adaptogene planten" }, desc: { fr: "Tradition millénaire validée par la science", nl: "Millennialange traditie gevalideerd door wetenschap" } },
      { icon: "💊", title: { fr: "Biodisponibilité élevée", nl: "Hoge biobeschikbaarheid" }, desc: { fr: "Formule optimisée pour une absorption maximale", nl: "Formule geoptimaliseerd voor maximale absorptie" } },
      { icon: "🏭", title: { fr: "GMP certifié", nl: "GMP gecertificeerd" }, desc: { fr: "Produit dans des installations certifiées", nl: "Geproduceerd in gecertificeerde faciliteiten" } },
    ],
    ingredients: [
      { emoji: "🌿", name: { fr: "Ashwagandha KSM-66 (600 mg)", nl: "Ashwagandha KSM-66 (600 mg)" }, desc: { fr: "L'extrait le plus puissant pour réduire le cortisol et améliorer la résistance au stress.", nl: "Het krachtigste extract om cortisol te verlagen en stressweerstand te verbeteren." } },
      { emoji: "🍵", name: { fr: "L-Théanine (200 mg)", nl: "L-Theanine (200 mg)" }, desc: { fr: "Naturellement présent dans le thé vert. Favorise une concentration détendue.", nl: "Van nature aanwezig in groene thee. Bevordert ontspannen concentratie." } },
      { emoji: "💊", name: { fr: "Complexe Vitamine B", nl: "B-vitaminencomplex" }, desc: { fr: "B6, B9 et B12 pour soutenir la synthèse des neurotransmetteurs.", nl: "B6, B9 en B12 voor het ondersteunen van neurotransmittersynthese." } },
    ],
    descriptionHTML: {
      fr: `<p>Nos bandelettes associent le <strong>Safran</strong>, le <strong>Chrome</strong> et le <strong>Molybdène</strong> dans une infusion de fruits des bois qui fond instantanément sur la langue. Cette formule intelligente agit en synergie avec votre métabolisme pour réguler l’appétit et stabiliser votre énergie tout au long de la journée.</p>`,
      nl: `<p>Onze strips combineren <strong>Saffraan</strong>, <strong>Chroom</strong> en <strong>Molybdeen</strong> in een infusie van bosvruchten die onmiddellijk op de tong smelt. Deze slimme formule werkt in synergie met uw metabolisme om de eetlust te reguleren en uw energie de hele dag door te stabiliseren.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p>Chrome (sous forme de picolinate de chrome) (75 mcg), Molybdène (sous forme de glycinate de molybdène) (10 mcg), Crocus sativus (Safran) (10 mg), pullulane, cellulose, acide malique, sirop de sorbitol, lécithine, arôme fruits des bois, glycoside de stéviol <br> <strong>30 bandelettes</strong></p>`,
      nl: `<p>Chroom (als chroompicolinaat) (75 mcg), Molybdeen (als molybdeenglycinaat) (10 mcg), Crocus sativus (Saffraan) (10 mg), pullulan, cellulose, appelzuur, sorbitolstroop, lecithine, bosvruchtenaroma, steviolglycoside - <strong> 30 strips</strong></p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> Placez une bandelette sur votre langue et laissez-la se dissoudre complètement avant d'avaler. Prenez une bandelette à tout moment de la journée, sans dépasser un maximum de <strong>1 bandelette par jour</strong>.</p><p><strong>Avertissement :</strong> Déconseillé aux femmes enceintes ou allaitantes. Peut interagir avec les sédatifs.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> Plaats één strip op de tong en laat deze volledig oplossen alvorens door te slikken. Neem op elk gewenst moment één strip in, met een <strong>maximum van 1 strip per dag</strong>.</p><p><strong>Waarschuwing:</strong> Afgeraden voor zwangere of zogende vrouwen. Kan wisselwerken met kalmerende middelen.</p>`,
    },
  },
  {
    id: "hangover-strips",
    slug: "hangover-strips",
    image: "/images/products/hangover-strips.webp",
    gallery: [
      "/images/products/hangover-strips-2.webp",
      "/images/products/hangover-strips-3.webp",
      "/images/products/hangover-strips-4.webp",
      "/images/products/hangover-strips-5.webp",
    ],
    bottleClass: "b5",
    category: ["immunity"],
    price: 27.92,
    priceOld: 34.90,
    save: "20%",
    rating: 4.8,
    reviews: 589,
    badge: { fr: "Hangover", nl: "Hangover" },
    affiliateLink: "#",
    name: { fr: "Bandelettes de Récupération Après-Soirée", nl: "Anti-kater ondersteuning" },
    tagline: { fr: "Une synergie d'ingrédients inspirée des traditions ayurvédiques.", nl: "Een zorgvuldig samengestelde mix geïnspireerd op de Ayurvedische traditie." },
    headline: { fr: "Une synergie d'ingrédients inspirée des traditions ayurvédiques, conçue pour soutenir votre bien-être global.", nl: "Een zorgvuldig samengestelde mix geïnspireerd op de Ayurvedische traditie, ontworpen om uw algehele welzijn te ondersteunen." },
    bullets: {
      fr: ["Pour retrouver votre équilibre et rester en forme.", "Un mélange de Curcuma et de plantes pour protéger votre foie.", "Des bandelettes fondantes pour aider le corps à récupérer.", "Des ingrédients naturels contre les maux de tête et la fatigue."],
      nl: ["om je balans te herstellen en op schema te blijven.", "Een mix van Kurkuma en planten om uw lever te beschermen.", "Smeltende strips die het lichaam helpen sneller te herstellen.", "Natuurlijke ingrediënten tegen hoofdpijn en vermoeidheid."],
    },
    marquee: ["Ayurvedic Tradition", "HANGover", "Detox"],
    whyTitle: { fr: "Le véritable bien-être réside dans la <em>résilience</em> à retrouver son <em>centre<em>.", nl: "Echt welzijn draait om de <em>veerkracht</em> om terug te keren naar je eigen <em>centrum</em>." },
    whyText: {
      fr: ["En alliant sagesse ancestrale et technologie moderne, nous vous offrons les moyens d'honorer votre vie sociale tout en protégeant votre écosystème interne — garantissant que votre élan reste intact."],
      nl: ["Door eeuwenoude wijsheid te verbinden met moderne technologie, bieden wij u de middelen om van uw sociale leven te genieten terwijl u uw interne ecosysteem beschermt — zodat uw momentum <strong>onverstoord</strong> blijft."],
    },
    benefits: [
      { icon: "🦠", title: { fr: "Microbiome équilibré", nl: "Evenwichtig microbioom" }, desc: { fr: "Diversité des souches pour un microbiote intestinal sain", nl: "Stammdiversiteit voor een gezond darmmicrobioom" } },
      { icon: "🛡️", title: { fr: "Immunité renforcée", nl: "Versterkte immuniteit" }, desc: { fr: "70% du système immunitaire réside dans l'intestin", nl: "70% van het immuunsysteem bevindt zich in de darm" } },
      { icon: "😊", title: { fr: "Axe intestin-cerveau", nl: "Darm-hersenverbinding" }, desc: { fr: "Un microbiome sain soutient l'humeur et le bien-être mental", nl: "Een gezond microbioom ondersteunt stemming en mentaal welzijn" } },
      { icon: "🍽️", title: { fr: "Digestion optimale", nl: "Optimale spijsvertering" }, desc: { fr: "Améliore le confort digestif et l'absorption des nutriments", nl: "Verbetert digestief comfort en nutriëntopname" } },
    ],
    differentiators: [
      { icon: "🔢", title: { fr: "50 milliards CFU", nl: "50 miljard CFU" }, desc: { fr: "Dose cliniquement significative", nl: "Klinisch significante dosis" } },
      { icon: "🧬", title: { fr: "10 souches diversifiées", nl: "10 diverse stammen" }, desc: { fr: "Large spectre pour un microbiome équilibré", nl: "Breed spectrum voor een evenwichtig microbioom" } },
      { icon: "💊", title: { fr: "Gélule gastro-résistante", nl: "Maagsapresistente capsule" }, desc: { fr: "Protège les probiotiques jusqu'à l'intestin", nl: "Beschermt probiotica tot in de darm" } },
      { icon: "🌾", title: { fr: "Prébiotiques FOS", nl: "FOS-prebiotica" }, desc: { fr: "Nourrit les bactéries bénéfiques", nl: "Voedt de nuttige bacteriën" } },
      { icon: "❄️", title: { fr: "Stable sans réfrigération", nl: "Stabiel zonder koeling" }, desc: { fr: "Technologie de stabilisation avancée", nl: "Geavanceerde stabilisatietechnologie" } },
      { icon: "🌱", title: { fr: "Végan & sans lactose", nl: "Veganistisch & lactosevrij" }, desc: { fr: "Convient à toutes les sensibilités alimentaires", nl: "Geschikt voor alle voedingssensitiviteiten" } },
    ],
    ingredients: [
      { emoji: "🦠", name: { fr: "Mélange probiotique (50 Mds CFU)", nl: "Probiotisch mengsel (50 mld CFU)" }, desc: { fr: "Complexe de 10 souches certifiées vivantes jusqu'à la date de péremption.", nl: "Complex van 10 stammen gecertificeerd levend tot de houdbaarheidsdatum." } },
      { emoji: "🌾", name: { fr: "FOS Prébiotiques (200 mg)", nl: "FOS-prebiotica (200 mg)" }, desc: { fr: "Fibres prébiotiques qui nourrissent sélectivement les bactéries bénéfiques.", nl: "Prebiotische vezels die selectief nuttige bacteriën voeden." } },
      { emoji: "💊", name: { fr: "Technologie DR Cap™", nl: "DR Cap™-technologie" }, desc: { fr: "Gélule gastro-résistante pour une livraison optimale dans l'intestin grêle.", nl: "Maagsapresistente capsule voor optimale afgifte in de dunne darm." } },
    ],
    descriptionHTML: {
      fr: `<p>Rechargez vos batteries et récupérez avec nos <strong>Hangover Strips</strong> naturels à dissolution rapide. Grâce à un mélange <strong>d'ingrédients ayurvédiques</strong> comme le <strong>curcuma</strong> et la <strong>chicorée</strong>, ces bandelettes mangue-orange soutiennent votre foie et aident à dissiper le brouillard cérébral après une soirée.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Non évalué par les autorités sanitaires.</p>`,
      nl: `<p>Laad jezelf op en herstel met onze natuurlijke, snel oplossende <strong>Hangover Strips</strong>. Dankzij een mix van <strong>Ayurvedische ingrediënten</strong> zoals <strong>kurkuma</strong> en <strong>cichorei</strong>, ondersteunen deze mango-sinaasappelstrips je lever en helpen ze een "mistig hoofd" na een avondje uit te voorkomen.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p>Extrait de Phoenix Dactylifera (Dattier), extrait de Curcuma Longa, extrait d’Andrographis Paniculata, extrait de Cichorium Intybus (Chicorée), extrait de Vitis Vinifera (Vigne), extrait de Phyllanthus Niruri, extrait de Phyllanthus Emblica, pullulane, cellulose, mannitol, extrait de réglisse, lécithine, acide malique, arôme mangue, glycosides de stéviol, arôme orange</p> <p><strong>30 bandelettes</strong></p>`,
      nl: `<p>Phoenix Dactylifera-extract (Dadel), Curcuma Longa-extract, Andrographis Paniculata-extract, Cichorium Intybus-extract (Cichorei), Vitis Vinifera-extract (Druif), Phyllanthus Niruri-extract, Phyllanthus Emblica-extract, pullulan, cellulose, mannitol, zoethoutextract, lecithine, appelzuur, mango-aroma, steviolglycosiden, sinaasappel-aroma <strong>30 strips </strong></p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> Placez une bandelette sur votre langue et laissez-la se dissoudre complètement avant d'avaler. Prenez une bandelette à tout moment de la journée, sans dépasser un maximum de <strong>1 bandelette par jour</strong>.</p><p><strong>Avertissement :</strong> Déconseillé aux femmes enceintes ou allaitantes. Peut interagir avec les sédatifs.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> Plaats één strip op de tong en laat deze volledig oplossen alvorens door te slikken. Neem op elk gewenst moment één strip in, met een <strong>maximum van 1 strip per dag</strong>.</p><p><strong>Waarschuwing:</strong> Afgeraden voor zwangere of zogende vrouwen. Kan wisselwerken met kalmerende middelen.</p>`,
    },
  },
  {
    id: "nad-booster",
    slug: "nad-booster",
    image: "/images/products/nad-booster.webp",
    gallery: [
      "/images/products/nad-booster-2.webp",
      "/images/products/nad-booster-3.webp",
      "/images/products/nad-booster-4.webp",
      "/images/products/nad-booster-5.webp",
      "/images/products/nad-booster-6.webp",
      "/images/products/nad-booster-7.webp",
    ],
    bottleClass: "b1",
    category: ["energy", "beauty"],
    price: 28.00,
    priceOld: 35.00,
    save: "20%",
    rating: 4.8,
    reviews: 1488,
    featured: true,
    badge: { fr: "Bestseller", nl: "Bestseller" },
    affiliateLink: "#",
    name: { fr: "NAD+ booster", nl: "NAD+ booster" },
    tagline: {
      fr: "Renforce l'énergie et soutient la santé métabolique et cognitive.",
      nl: "Versterkt energie en ondersteunt metabolische en cognitieve gezondheid.",
    },
    headline: {
      fr: "Notre complexe NAD+ représente une nouvelle référence dans la science de la longévité, avec une combinaison unique d'ingrédients que vous ne trouverez dans aucun autre flacon. Ce n'est pas seulement un ajout à votre routine ; c'est l'évolution ultime.",
      nl: "Ons NAD+-complex vormt een nieuwe maatstaf in de wetenschap van een lang leven, met een unieke combinatie van ingrediënten die u in geen enkel ander supplement zult vinden. Het is niet zomaar een toevoeging aan uw routine; het is de definitieve upgrade.",
    },
    bullets: {
      fr: [
        "Équilibre le métabolisme et le bien-être quotidien.",
        "Soutien antioxydant (Quercétine & Resvératrol).",
        "Soutient le vieillissement cellulaire sain.",
        "Idéal pour la vitalité quotidienne et le bien-être fonctionnel global",
      ],
      nl: [
        "Ondersteunt je metabolisme en dagelijks welzijn.",
        "Antioxidante steun (Quercetine & Resveratrol).",
        "Bevordert een gezonde celveroudering.",
        "Ideaal voor dagelijkse vitaliteit en algeheel functioneel welzijn",
      ],
    },
    marquee: ["Natural Energy Boost", "Quality Ingredients Only", "Daily Wellness Support"],
    whyTitle: {
      fr: "La Nouvelle Référence de la Science <em>NAD+</em>",
      nl: "De Nieuwe Maatstaf in <em>NAD+</em>-Wetenschap",
    },
    whyText: {
      fr: [
        "La plupart des suppléments de NAD+ se concentrent sur une seule molécule. Nous avons choisi de privilégier l'ensemble de l'écosystème cellulaire. En associant un <strong>NAD+ de haute pureté</strong> à un ratio précis de cofacteurs, notre mélange unique est conçu comme une formule qui ne se contente pas de compléter — elle synchronise.",
        "C’est une architecture sophistiquée d'ingrédients élaborée pour contourner les barrières d'absorption traditionnelles, garantissant que ce que vous apportez à votre corps atteigne réellement vos cellules.",
      ],
      nl: [
        "De meeste NAD+-supplementen richten zich op één enkel molecuul. Wij hebben ons gefocust op het volledige cellulaire ecosysteem. Door hoogzuivere NAD+ te combineren met een nauwkeurige ratio van co-factoren, is onze unieke NAD+-blend ontwikkeld als een formule die niet alleen aanvult, maar synchroniseert.",
        "Het is een geavanceerde architectuur van ingrediënten, ontworpen om traditionele absorptiebarrières te omzeilen, zodat wat u aan uw lichaam toevertrouwt ook daadwerkelijk uw cellen bereikt.",
      ],
    },
    benefits: [
      {
        icon: "⚡",
        title: { fr: "Soutien énergétique", nl: "Energieondersteuning" },
        desc: { fr: "Soutient le métabolisme énergétique cellulaire naturel", nl: "Ondersteunt het natuurlijke cellulaire energiemetabolisme" },
      },
      {
        icon: "🧠",
        title: { fr: "Performance mentale", nl: "Mentale prestaties" },
        desc: { fr: "Aide à maintenir la concentration et la fonction cognitive", nl: "Helpt concentratie en cognitieve functie te behouden" },
      },
      {
        icon: "🌿",
        title: { fr: "Vieillissement sain", nl: "Gezonde veroudering" },
        desc: { fr: "Conçu pour soutenir les processus de vieillissement cellulaire sain", nl: "Ontworpen om gezonde cellulaire verouderingsprocessen te ondersteunen" },
      },
      {
        icon: "⚖️",
        title: { fr: "Fonction métabolique", nl: "Metabolische functie" },
        desc: { fr: "Aide à soutenir l'activité métabolique normale", nl: "Helpt normale metabolische activiteit te ondersteunen" },
      },
    ],
    differentiators: [
      { icon: "🌱", title: { fr: "Non-OGM", nl: "Niet-GGO" }, desc: { fr: "Sans ingrédients génétiquement modifiés", nl: "Zonder genetisch gemodificeerde ingrediënten" } },
      { icon: "✅", title: { fr: "Testé par des tiers", nl: "Derdenpartij getest" }, desc: { fr: "Vérification indépendante de la pureté", nl: "Onafhankelijke zuiverheidsverificatie" } },
      { icon: "🌿", title: { fr: "Formule végétale", nl: "Plantaardig" }, desc: { fr: "Ingrédients végans & propres", nl: "Veganistische & zuivere ingrediënten" } },
      { icon: "⚗️", title: { fr: "NAD+ pur", nl: "Puur NAD+" }, desc: { fr: "Soutient la fonction cellulaire naturelle", nl: "Ondersteunt de natuurlijke cellulaire functie" } },
      { icon: "🍃", title: { fr: "Extrait de Quercétine", nl: "Quercetine-extract" }, desc: { fr: "Aide l'utilisation cellulaire", nl: "Helpt cellulaire benutting" } },
      { icon: "🔬", title: { fr: "Resvératrol", nl: "Resveratrol" }, desc: { fr: "Soutient les voies des sirtuines & le vieillissement sain", nl: "Ondersteunt sirtuïne-routes & gezonde veroudering" } },
    ],
    ingredients: [
      {
        emoji: "⚗️",
        name: { fr: "NAD+ (500 mg)", nl: "NAD+ (500 mg)" },
        desc: { fr: "Coenzyme essentielle pour la production d'énergie dans chaque cellule.", nl: "Essentieel co-enzym voor energieproductie in elke cel." },
      },
      {
        emoji: "🍃",
        name: { fr: "Quercétine (250 mg)", nl: "Quercetine (250 mg)" },
        desc: { fr: "Antioxydant d'origine végétale qui aide à soutenir la fonction immunitaire.", nl: "Plantaardig antioxidant dat helpt de immuunfunctie te ondersteunen." },
      },
      {
        emoji: "🌿",
        name: { fr: "Resvératrol (150 mg)", nl: "Resveratrol (150 mg)" },
        desc: { fr: "Extrait de Renouée du Japon, connu pour soutenir la santé cardiovasculaire.", nl: "Extract van Japanse duizendknoop, bekend om cardiovasculaire gezondheid te ondersteunen." },
      },
    ],
    descriptionHTML: {
      fr: `<p>Le NAD+ est une coenzyme essentielle pour soutenir la production naturelle d'énergie cellulaire. Cette formule délivre <strong>500 mg de NAD+</strong> par portion, aidant à soutenir la vitalité quotidienne de votre corps†.</p><p>Elle comprend également la <strong>Quercétine</strong> et le <strong>Resvératrol</strong> pour un soutien cellulaire quotidien complet.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Non évalué par les autorités sanitaires.</p>`,
      nl: `<p>NAD+ is een essentieel co-enzym voor het ondersteunen van de natuurlijke cellulaire energieproductie. Deze formule levert <strong>500 mg NAD+</strong> per portie†.</p><p>Het bevat ook <strong>Quercetine</strong> en <strong>Resveratrol</strong> voor volledige dagelijkse cellulaire ondersteuning.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p><strong>Actifs (par 2 gélules) :</strong><br>NAD+ (Nicotinamide Adénine Dinucléotide) (500 mg), extrait de quercétine dihydratée (Sophora japonica) (bouton de fleur entier) (250 mg), extrait de renouée du Japon (98 % de resvératrol) (Polygonum cuspidatum) (racine) (150 mg), HPMC (capsule végétale), cellulose microcristalline (MCC), farine de riz brun, huile d'olive, dioxyde de silicium, stéarate de magnésium.</p><p>60 gélules · 60 portions</p>`,
      nl: `<p><strong>Actieve ingrediënten (per 2 capsules):</strong><br>NAD+ (Nicotinamide-adenine-dinucleotide) (500 mg), quercetine dihydraat extract (Sophora japonica) (volledige bloemknop) (250 mg), Japanse duizendknoop extract (98% resveratrol) (Polygonum cuspidatum) (wortel) (150 mg), HPMC (plantaardige capsule), microkristallijne cellulose (MCC), bruine rijstbloem, olijfolie, siliciumdioxide, magnesiumstearaat.</p><p>60 capsules · 60 porties</p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> 2 gélules par jour avec un grand verre d'eau.</p><p><strong>Avertissement :</strong> Ne pas dépasser la dose recommandée. Déconseillé aux femmes enceintes ou allaitantes et aux enfants de moins de 18 ans. Conserver dans un endroit frais et sec.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> 2 capsules per dag met een groot glas water.</p><p><strong>Waarschuwing:</strong> Niet de aanbevolen dosis overschrijden. Afgeraden voor zwangere of zogende vrouwen en kinderen onder 18 jaar. Op een koele, droge plaats bewaren.</p>`,
    },
  },
   {
    id: "mushroom-synergy",
    slug: "mushroom-synergy",
    image: "/images/products/mushroom-synergy.webp",
    gallery: [
      "/images/products/mushroom-synergy-2.webp",
      "/images/products/mushroom-synergy-3.webp",
      "/images/products/mushroom-synergy-4.webp",
      "/images/products/mushroom-synergy-5.webp",
    ],
    bottleClass: "b6",
    category: ["energy"],
    price: 34.90,
    priceOld: 39.90,
    save: "20%",
    rating: 4.9,
    reviews: 721,
    affiliateLink: "#",
    name: { fr: "Complexe Champignons 10-Synergie", nl: "Mushroom 10-Synergy Complex" },
    tagline: { fr: "Bio-Support de Précision pour l'Esprit Actif.", nl: "Precisie Bio-Ondersteuning voor de Actieve Geest" },
    headline: { fr: "En utilisant un ratio d'extraction précis de 10:1, nous garantissons que les composés bioactifs du Lion’s Mane, du Reishi et du Cordyceps travaillent à l'unisson.", nl: "Door gebruik te maken van een nauwkeurige 10:1 extractieratio, zorgen we ervoor dat de bioactieve stoffen van Lion’s Mane, Reishi en Cordyceps in harmonie samenwerken" },
    bullets: {
      fr: ["Optimisation de la mémoire et de l'architecture cognitive*", "Performance athlétique et endurance cellulaire*", "Résilience et harmonie biologique globale*", "Équilibre métabolique et soutien glycémique*"],
      nl: ["Optimalisatie van het geheugen en de cognitieve architectuur*", "Atletische prestaties en celuithoudingsvermogen*", "Veerkracht en globale biologische harmonie*", "Metabolisch evenwicht en glykemische ondersteuning*"],
    },
    marquee: ["20+ Nutrients", "Complete Formula", "Daily Foundation", "Optimal Absorption"],
    whyTitle: { fr: "La fondation <em>nutritionnelle</em> de votre bien-être quotidien.", nl: "De <em>voedingsfundament</em> van jouw dagelijks welzijn." },
    whyText: {
      fr: ["La vie moderne exige une agilité mentale et physique que les suppléments standards atteignent rarement. <br> Notre <strong>Mushroom 10-Synergy Complex</strong> est un protocole d'ingénierie de précision conçu pour synchroniser dix des corps fructifères adaptogènes les plus puissants au monde — dont le Lion’s Mane, le Reishi et le Cordyceps — en une seule formule de haute efficacité. Grâce à un ratio d'extraction supérieur de 10:1, nous délivrons les composés bioactifs concentrés nécessaires pour optimiser l'énergie cellulaire et fortifier votre organisme. Ce n'est pas simplement un complément ; c'est la fondation définitive pour ceux qui refusent de faire des compromis sur leur potentiel biologique."],
      nl: ["Het moderne leven vraagt om een niveau van mentale en fysieke wendbaarheid dat standaard supplementen zelden bieden.<br> Ons <strong>Mushroom 10-Synergy Complex</strong> is een met precisie ontwikkeld protocol, ontworpen om tien van 's werelds krachtigste adaptogene extracten — waaronder Lion’s Mane, Reishi en Cordyceps — te synchroniseren in één hoogwaardige formule. Door gebruik te maken van een superieure 10:1 extractieratio, leveren wij de geconcentreerde bioactieve stoffen die nodig zijn om de focus te optimaliseren en uw systeem te versterken. Dit is niet zomaar een supplement; het is de definitieve fundering voor hen die geen compromissen sluiten op het gebied van hun biologisch potentieel."],
    },
    benefits: [
      { icon: "⚡", title: { fr: "Énergie quotidienne", nl: "Dagelijkse energie" }, desc: { fr: "Les vitamines B soutiennent la production d'énergie métabolique", nl: "B-vitamines ondersteunen de metabolische energieproductie" } },
      { icon: "🛡️", title: { fr: "Immunité", nl: "Immuniteit" }, desc: { fr: "Vitamines C, D3 et zinc pour des défenses naturelles solides", nl: "Vitamines C, D3 en zink voor sterke natuurlijke afweer" } },
      { icon: "🦴", title: { fr: "Os & muscles", nl: "Botten & spieren" }, desc: { fr: "Calcium, D3 et K2 pour la solidité osseuse", nl: "Calcium, D3 en K2 voor botsterkte" } },
      { icon: "🧠", title: { fr: "Fonction cognitive", nl: "Cognitieve functie" }, desc: { fr: "B12, B6 et folate pour la santé neurologique", nl: "B12, B6 en folaat voor neurologische gezondheid" } },
    ],
    differentiators: [
      { icon: "🔢", title: { fr: "20+ nutriments", nl: "20+ voedingsstoffen" }, desc: { fr: "Couverture complète des besoins nutritionnels de base", nl: "Volledige dekking van basisvoedingsbehoeften" } },
      { icon: "💊", title: { fr: "Formes biodisponibles", nl: "Biobeschikbare vormen" }, desc: { fr: "Méthylcobalamine B12, D3 naturelle, K2 MK-7", nl: "Methylcobalamine B12, natuurlijke D3, K2 MK-7" } },
      { icon: "🌱", title: { fr: "Végan certifié", nl: "Veganistisch gecertificeerd" }, desc: { fr: "Toutes les vitamines d'origine végétale ou synthétique", nl: "Alle vitamines van plantaardige of synthetische oorsprong" } },
      { icon: "🚫", title: { fr: "Sans remplisseurs", nl: "Zonder vulstoffen" }, desc: { fr: "Pas de dioxyde de titane ou colorants", nl: "Geen titaandioxide of kleurstoffen" } },
      { icon: "✅", title: { fr: "Testé en laboratoire", nl: "Labgetest" }, desc: { fr: "Puissance et pureté vérifiées par des tiers", nl: "Potentie en zuiverheid geverifieerd door derden" } },
      { icon: "🏭", title: { fr: "GMP certifié", nl: "GMP gecertificeerd" }, desc: { fr: "Fabriqué dans des installations certifiées", nl: "Geproduceerd in gecertificeerde faciliteiten" } },
    ],
    ingredients: [
      { emoji: "☀️", name: { fr: "Vitamine D3 + K2 (2000 UI + 100mcg)", nl: "Vitamine D3 + K2 (2000 IE + 100mcg)" }, desc: { fr: "Combinaison synergique pour l'absorption du calcium et la solidité osseuse.", nl: "Synergetische combinatie voor calciumopname en botsterkte." } },
      { emoji: "🔋", name: { fr: "Complexe Vitamine B complet", nl: "Volledig B-vitaminencomplex" }, desc: { fr: "B1, B2, B3, B5, B6, B7, B9, B12 pour l'énergie et la neurologie.", nl: "B1, B2, B3, B5, B6, B7, B9, B12 voor energie en neurologie." } },
      { emoji: "⚡", name: { fr: "Zinc + Magnésium + Sélénium", nl: "Zink + Magnesium + Selenium" }, desc: { fr: "Trio minéral pour l'immunité, la récupération et la protection cellulaire.", nl: "Mineraalentrio voor immuniteit, herstel en cellulaire bescherming." } },
    ],
    descriptionHTML: {
      fr: `<p>Notre complexe Mushroom 10-Synergy réunit dix des champignons reconnus pour leurs vertus adaptogènes, du Lion’s Mane au Reishi. Grâce à une extraction concentrée de corps fructifères, cette formule est conçue pour soutenir naturellement votre concentration et votre vitalité quotidienne. C’est une base solide pour accompagner un mode de vie actif et maintenir un équilibre biologique sain.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Non évalué par les autorités sanitaires.</p>`,
      nl: `<p>Ons Mushroom 10-Synergy Complex combineert tien van de meest gewaardeerde paddenstoelenextracten, van Lion’s Mane tot Reishi. Dankzij een geconcentreerde extractie van het vruchtvlees ondersteunt deze formule op natuurlijke wijze uw concentratie en dagelijkse vitaliteit. Het vormt een solide basis voor een actieve levensstijl en een gezond biologisch evenwicht.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p><strong>Actifs (par 2 gélules) :</strong><br>Mélange d'extraits de champignons: 250 mg<br> Extrait de corps fructifère de Maïtaké 10:1, extrait de corps fructifère de Shiitaké 10:1, extrait de corps fructifère de Crinière de Lion 10:1 (Hericium erinaceus), extrait de corps fructifère de Reishi 10:1, extrait de corps fructifère de Cordyceps 10:1, extrait de corps fructifère de Chaga 10:1, extrait de corps fructifère de Queue de Dinde 10:1, extrait de corps fructifère de Champignon de Paris 10:1 (Agaricus bisporus), extrait de corps fructifère de Champignon Noir 10:1 (Auricularia auricula-judae) et extrait de corps fructifère de Champignon Royal 10:1 (Agaricus subrufescens).</p>`,
      nl: `<p><strong>Actieve ingrediënten (per 2 capsules):</strong><br>Mushroom Extract Mix: 250 mg<br> Bestaande uit: Maitake vruchtlichaam extract 10:1, Shiitake vruchtlichaam extract 10:1, Lion's Mane vruchtlichaam extract 10:1 (Hericium erinaceus), Reishi vruchtlichaam extract 10:1, Cordyceps vruchtlichaam extract 10:1, Chaga vruchtlichaam extract 10:1, Turkey Tail vruchtlichaam extract 10:1, Gewone weidechampignon vruchtlichaam extract 10:1 (Agaricus bisporus), Judasoor vruchtlichaam extract 10:1 (Auricularia auricula-judae) en Amandelpaddenstoel vruchtlichaam extract 10:1 (Agaricus subrufescens).</p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Mode d'emploi :</strong> Prendre 2 gélules par jour avec un repas.</p><p><strong>Avertissement :</strong> Ne pas dépasser la dose recommandée. Les femmes enceintes doivent consulter leur médecin avant utilisation.</p>`,
      nl: `<p><strong>Gebruiksaanwijzing:</strong> 2 capsules per dag bij een maaltijd innemen.</p><p><strong>Waarschuwing:</strong> Niet de aanbevolen dosis overschrijden. Zwangere vrouwen moeten vóór gebruik een arts raadplegen.</p>`,
    },
  },
  {
    id: "mushroomfocusstrip",
    slug: "mushroomfocusstrip",
    image: "/images/products/mushroom-strip.webp",
    gallery: [
      "/images/products/mushroom-strip-2.webp",
      "/images/products/mushroom-strip-3.webp",
      "/images/products/mushroom-strip-4.webp",
      "/images/products/mushroom-strip-5.webp",
      "/images/products/mushroom-strip-6.webp",
      "/images/products/mushroom-strip-7.webp",
      "/images/products/mushroom-strip-8.webp",
    ],
    bottleClass: "b3",
    category: ["immunity"],
    price: 33.90,
    priceOld: 38.90,
    save: "20%",
    rating: 4.6,
    reviews: 412,
    featured: true,
    affiliateLink: "#",
    name: { fr: "Bandelettes Focus aux Champignons", nl: "Bandelettes Focus aux Champignons" },
    tagline: {
      fr: "Mélange de champignons pour la vitalité, la clarté et l'immunité.",
      nl: "Paddenstoelenmix voor vitaliteit, helderheid en immuniteit.",
    },
    headline: {
      fr: "Mélange de champignons adaptogènes pour la vitalité, la clarté mentale et la résilience immunitaire.",
      nl: "Blend van adaptogene paddenstoelen voor vitaliteit, mentale helderheid en immuunveerkracht.",
    },
    bullets: {
      fr: [
        "Le Lion’s Mane améliore votre concentration et mémoire.",
        "Booste votre énergie quotidienne sans effet de fatigue.",
        "Maïtaké et Shiitaké soutient votre système immunitaire.",
        "Bandelettes au chocolat pratiques qui fondent sans besoin d'eau.",
      ],
      nl: [
        "Lion's Mane werbetert je focus en geheugen.",
        "Geeft je dagelijkse energie een boost zonder cafeïne dip.",
        "Maitake en Shiitake extracten ondersteunt je immuunsysteem.",
        "Handige chocoladestrips die smelten op de tong zonder water.",
      ],
    },
    marquee: ["Lion's Mane Focus", "Reishi Immunity", "Cordyceps Energy", "Adaptogen Blend"],
    whyTitle: { fr: "Les champignons : la sagesse de la <em>nature</em>.", nl: "Paddenstoelen: de wijsheid van de <em>natuur</em>." },
    whyText: {
      fr: ["Nos Bandelettes Focus aux Champignons offrent un mélange puissant et tout-en-un de <strong>Lions Mane</strong>, <strong>Cordyceps</strong>, <strong>Maïtaké et Shiitaké</strong>. Cette formule intelligente travaille en synergie pour soutenir l'ensemble de votre corps : le <strong>Lions Mane</strong> dissipe le brouillard mental pour une meilleure concentration, tandis que le <strong>Cordyceps</strong> vous apporte une énergie naturelle et de l'endurance. Le <strong>Shiitaké</strong>, quant à lui, protège votre santé et renforce votre système immunitaire."],
      nl: ["Onze Mushroom Focus Strips bieden een krachtige alles-in-één mix van <strong>Lions Mane</strong>, Cordyceps, <strong>Maitake en Shiitake</strong>. Deze slimme formule werkt samen om je hele lichaam te ondersteunen: <strong>Lions Mane</strong> vermindert mentale mist voor een betere focus, terwijl <strong>Cordyceps</strong> je natuurlijke energie en uithoudingsvermogen geeft. <strong>Shiitake</strong> helpt je gezondheid te beschermen en je immuunsysteem sterk te houden."],
    },
    benefits: [
      { icon: "🧠", title: { fr: "Clarté mentale", nl: "Mentale helderheid" }, desc: { fr: "Lion's Mane soutient la concentration et la mémoire", nl: "Lion's Mane ondersteunt concentratie en geheugen" } },
      { icon: "🛡️", title: { fr: "Immunité", nl: "Immuniteit" }, desc: { fr: "Reishi renforce les défenses naturelles", nl: "Reishi versterkt de natuurlijke afweer" } },
      { icon: "⚡", title: { fr: "Énergie naturelle", nl: "Natuurlijke energie" }, desc: { fr: "Cordyceps améliore l'endurance sans caféine", nl: "Cordyceps verbetert uithoudingsvermogen zonder cafeïne" } },
      { icon: "⚖️", title: { fr: "Équilibre", nl: "Balans" }, desc: { fr: "Les adaptogènes aident à gérer le stress", nl: "Adaptogenen helpen stress te beheersen" } },
    ],
    differentiators: [
      { icon: "🍄", title: { fr: "Extrait 10:1", nl: "10:1 extract" }, desc: { fr: "Concentration maximale des composés actifs", nl: "Maximale concentratie actieve verbindingen" } },
      { icon: "✅", title: { fr: "Bio certifié", nl: "Bio gecertificeerd" }, desc: { fr: "Champignons cultivés sans pesticides", nl: "Paddenstoelen gekweekt zonder pesticiden" } },
      { icon: "☕", title: { fr: "Sans caféine", nl: "Zonder cafeïne" }, desc: { fr: "Énergie naturelle sans nervosité", nl: "Natuurlijke energie zonder nervositeit" } },
      { icon: "🔬", title: { fr: "Beta-glucanes", nl: "Beta-glucanen" }, desc: { fr: "Principaux composés immunomodulateurs", nl: "Belangrijkste immunomodulerende verbindingen" } },
      { icon: "🌱", title: { fr: "Végan & propre", nl: "Veganistisch & zuiver" }, desc: { fr: "Aucun ingrédient d'origine animale", nl: "Geen ingrediënten van dierlijke oorsprong" } },
      { icon: "✅", title: { fr: "Testé en laboratoire", nl: "Labgetest" }, desc: { fr: "Chaque lot vérifié pour la pureté et la puissance", nl: "Elk lot gecontroleerd op zuiverheid en potentie" } },
    ],
    ingredients: [
      { emoji: "🦁", name: { fr: "Lion's Mane (500 mg)", nl: "Lion's Mane (500 mg)" }, desc: { fr: "Champignon réputé pour soutenir la neuroplasticité et la concentration.", nl: "Paddenstoel bekend om neuroplasticiteit en concentratie te ondersteunen." } },
      { emoji: "🍄", name: { fr: "Reishi (400 mg)", nl: "Reishi (400 mg)" }, desc: { fr: "Le 'champignon de l'immortalité' — soutient le système immunitaire.", nl: "De 'paddenstoel van de onsterfelijkheid' — ondersteunt het immuunsysteem." } },
      { emoji: "⚡", name: { fr: "Cordyceps (300 mg)", nl: "Cordyceps (300 mg)" }, desc: { fr: "Soutient la production d'énergie cellulaire (ATP) et l'endurance.", nl: "Ondersteunt cellulaire energieproductie (ATP) en uithoudingsvermogen." } },
    ],
    descriptionHTML: {
      fr: `<p>Nos <strong>Bandelettes Focus aux Champignons</strong> pour améliorez votre concentration et votre énergie. Nous avons associé le Lion"s Mane, le Maïtaké, le Cordyceps et le Shiitaké dans une bandelette au chocolat fondant. Conçues pour un esprit vif et un corps actif, ces bandelettes s'utilisent sans eau ni gélules : laissez-les simplement fondre sur la langue.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Non évalué par les autorités sanitaires.</p>`,
      nl: `<p>Onze <strong>Onze Paddenstoelen Focus Strips</strong> om je concentratie en energie te verbeteren. We hebben Lion's Mane, Maitake, Cordyceps en Shiitake gecombineerd in een smeltende chocoladestrip. Ontworpen voor een scherpe geest en een actief lichaam: deze strips zijn te gebruiken zonder water of capsules—laat ze simpelweg smelten op de tong.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Niet beoordeeld door gezondheidsautoriteiten.</p>`,
    },
    ingredientsHTML: {
      fr: `<p>30 Bandelettes  - Hericium erinaceus (Crinière de Lion) (30 mg), Grifola frondosa (Maïtaké) (25 mg), Cordyceps sinensis (Cordyceps) (25 mg), Lentinus edodes (Shiitaké) (20 mg), pullulane, cellulose, lécithine, arôme chocolat, extrait de fruit du moine, triglycérides à chaîne moyenne (MCT), gomme xanthane, glycosides de stéviol.</p>`,
      nl: `<p>30 Strips - Hericium erinaceus (Pruikzwam / Lion's Mane) (30 mg), Grifola frondosa (Maitake) (25 mg), Cordyceps sinensis (Cordyceps) (25 mg), Lentinus edodes (Shiitake) (20 mg), pullulan, cellulose, lecithine, chocoladearoma, monniksvrucht-extract, medium-chain triglyceriden (MCT), xanthaangom, steviolglycosiden</p>`,
    },
    safetyHTML: {
      fr: `<p><strong>Conseils d'utilisation :</strong> Placez une bandelette sur votre langue et laissez-la se dissoudre complètement avant d'avaler. Prenez une bandelette à tout moment de la journée, sans dépasser un maximum de <strong>1 bandelette par jour</strong>.</p>`,
      nl: `<p><strong>Gebruiksadvies:</strong> Plaats één strip op de tong en laat deze volledig oplossen alvorens door te slikken. Neem op elk gewenst moment één strip in, met een maximum van <strong>1 strip per dag</strong>.</p>`,
    },
  },

 
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

type Category = "energy" | "beauty" | "immunity" | "weight loss";

export function getProductsByCategory(cat: Category | "all"): Product[] {
  if (cat === "all") return ALL_PRODUCTS;
  return ALL_PRODUCTS.filter((p) => p.category.includes(cat));
}
export function formatPrice(n: number, locale: Locale = "fr"): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-BE" : "nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}