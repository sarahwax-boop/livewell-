export type Locale = "en";

export interface Product {
  id: string;
  slug: string;
  image: string;
  gallery: string[];
  bottleClass: string;
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
    id: "test",
    slug: "test",
    image: "/images/products/radiantglow.webp",
    gallery: [
      "/images/products/radiantglow-2.webp",
      "/images/products/radiantglow-3.webp",
      "/images/products/radiantglow-4.webp",
      "/images/products/radiantglow-5.webp",
    ],
    bottleClass: "b2",
    category: ["beauty"],
    price: 1.00,
    priceOld: 20.90,
    save: "20%",
    rating: 4.7,
    reviews: 836,
    featured: true,
    badge: { en: "New" },
    affiliateLink: "#",
    name: { en: "RadiantGlow Gummies" },
    tagline: { en: "A delicious daily boost for hair, skin and nails." },
    headline: { en: "Our RadiantGlow elixir sets a new benchmark in nutri-cosmetic science, with a synergy of high-potency bioactive ingredients. This isn't just a supplement — it's the ultimate evolution of your beauty routine." },
    bullets: {
      en: [
        "Supports the natural radiance of hair, skin and nails",
        "Enriched with biotin, collagen and essential vitamins",
        "Light, refreshing passion fruit flavour",
        "Clean formula free from artificial flavourings and colorants",
      ],
    },
    marquee: ["Hair Skin & Nails", "Passion Fruit Flavor", "Clean Formula", "Daily Beauty Support"],
    whyTitle: { en: "Beauty <em>starts</em> from within." },
    whyText: {
      en: ["The missing architecture of your beauty routine. Not an addition, but the definitive foundation. True radiance is a biological by-product of cellular health. RadiantGlow doesn't simply 'cover up' — it rebuilds. By delivering a synergy of marine collagen and high-potency biotin directly to your system, we bypass the limitations of traditional skincare. Discover the distinction of a formula where every milligram is designed to synchronise with your body's natural renewal cycles."],
    },
    benefits: [
      { icon: "✨", title: { en: "Natural glow" }, desc: { en: "Supports a luminous, naturally radiant complexion" } },
      { icon: "💇", title: { en: "Strong hair" }, desc: { en: "Helps strengthen and nourish hair from within" } },
      { icon: "💅", title: { en: "Resilient nails" }, desc: { en: "Formula designed for stronger, more resilient nails" } },
      { icon: "🌸", title: { en: "Hydrated skin" }, desc: { en: "Supports skin elasticity and hydration" } },
    ],
    differentiators: [
      { icon: "🍭", title: { en: "Natural flavour" }, desc: { en: "Natural passion fruit aroma, no added sugars" } },
      { icon: "✅", title: { en: "Third-party tested" }, desc: { en: "Every batch independently verified for purity" } },
      { icon: "🌱", title: { en: "Clean ingredients" }, desc: { en: "No artificial colorants, flavourings or preservatives" } },
      { icon: "💊", title: { en: "Biotin 5000mcg" }, desc: { en: "Clinically studied dose for beauty" } },
      { icon: "🤝", title: { en: "Marine collagen" }, desc: { en: "Supports skin elasticity and firmness" } },
      { icon: "🔬", title: { en: "Vitamin C & E" }, desc: { en: "Powerful antioxidants for cellular protection" } },
    ],
    ingredients: [
      { emoji: "💊", name: { en: "Biotin (5,000 mcg)" }, desc: { en: "Essential B vitamin for hair, skin and nail health." } },
      { emoji: "🌊", name: { en: "Marine Collagen (100 mg)" }, desc: { en: "Highly bioavailable peptides for skin elasticity." } },
      { emoji: "🍊", name: { en: "Vitamin C & E" }, desc: { en: "Antioxidants that protect cells from oxidative stress." } },
    ],
    descriptionHTML: {
      en: `<p>Our <strong>RadiantGlow Gummies</strong> are a delicious daily boost for hair, skin and nail health.</p><p>Formulated with a refreshing <strong>passion fruit</strong> flavour. No artificial flavourings, no colorants, no preservatives†.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p><strong>Active ingredients (per 2 gummies):</strong><br>Vitamin A (as retinyl acetate), Vitamin C (as ascorbic acid), Vitamin D (as cholecalciferol), Vitamin E (as dl-alpha tocopheryl acetate), Vitamin B-6 (as pyridoxine hydrochloride), Folate, Vitamin B-12 (as cyanocobalamin), Biotin, Pantothenic Acid (as calcium d-pantothenate), Iodine (as potassium iodide), Zinc (as zinc citrate), PABA (para-aminobenzoic acid), Collagen (fish), Silicon, Glucose syrup, Sugar, Glucose, Pectin, Citric acid, Sodium citrate, Passion fruit flavour, Vegetable oil (contains carnauba wax), Purple carrot juice concentrate.</p><p><strong>60 gummies · 30 servings</strong></p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Take 2 gummies per day, preferably with a meal.</p><p><strong>Warning:</strong> Do not exceed the recommended dose. Store in a cool, dry place away from light.</p>`,
    },
  },

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
    badge: { en: "New" },
    affiliateLink: "#",
    name: { en: "RadiantGlow Gummies" },
    tagline: { en: "A delicious daily boost for hair, skin and nails." },
    headline: { en: "Our RadiantGlow elixir sets a new benchmark in nutri-cosmetic science, with a synergy of high-potency bioactive ingredients. This isn't just a supplement — it's the ultimate evolution of your beauty routine." },
    bullets: {
      en: [
        "Supports the natural radiance of hair, skin and nails",
        "Enriched with biotin, collagen and essential vitamins",
        "Light, refreshing passion fruit flavour",
        "Clean formula free from artificial flavourings and colorants",
      ],
    },
    marquee: ["Hair Skin & Nails", "Passion Fruit Flavor", "Clean Formula", "Daily Beauty Support"],
    whyTitle: { en: "Beauty <em>starts</em> from within." },
    whyText: {
      en: ["The missing architecture of your beauty routine. Not an addition, but the definitive foundation. True radiance is a biological by-product of cellular health. RadiantGlow doesn't simply 'cover up' — it rebuilds. By delivering a synergy of marine collagen and high-potency biotin directly to your system, we bypass the limitations of traditional skincare. Discover the distinction of a formula where every milligram is designed to synchronise with your body's natural renewal cycles."],
    },
    benefits: [
      { icon: "✨", title: { en: "Natural glow" }, desc: { en: "Supports a luminous, naturally radiant complexion" } },
      { icon: "💇", title: { en: "Strong hair" }, desc: { en: "Helps strengthen and nourish hair from within" } },
      { icon: "💅", title: { en: "Resilient nails" }, desc: { en: "Formula designed for stronger, more resilient nails" } },
      { icon: "🌸", title: { en: "Hydrated skin" }, desc: { en: "Supports skin elasticity and hydration" } },
    ],
    differentiators: [
      { icon: "🍭", title: { en: "Natural flavour" }, desc: { en: "Natural passion fruit aroma, no added sugars" } },
      { icon: "✅", title: { en: "Third-party tested" }, desc: { en: "Every batch independently verified for purity" } },
      { icon: "🌱", title: { en: "Clean ingredients" }, desc: { en: "No artificial colorants, flavourings or preservatives" } },
      { icon: "💊", title: { en: "Biotin 5000mcg" }, desc: { en: "Clinically studied dose for beauty" } },
      { icon: "🤝", title: { en: "Marine collagen" }, desc: { en: "Supports skin elasticity and firmness" } },
      { icon: "🔬", title: { en: "Vitamin C & E" }, desc: { en: "Powerful antioxidants for cellular protection" } },
    ],
    ingredients: [
      { emoji: "💊", name: { en: "Biotin (5,000 mcg)" }, desc: { en: "Essential B vitamin for hair, skin and nail health." } },
      { emoji: "🌊", name: { en: "Marine Collagen (100 mg)" }, desc: { en: "Highly bioavailable peptides for skin elasticity." } },
      { emoji: "🍊", name: { en: "Vitamin C & E" }, desc: { en: "Antioxidants that protect cells from oxidative stress." } },
    ],
    descriptionHTML: {
      en: `<p>Our <strong>RadiantGlow Gummies</strong> are a delicious daily boost for hair, skin and nail health.</p><p>Formulated with a refreshing <strong>passion fruit</strong> flavour. No artificial flavourings, no colorants, no preservatives†.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p><strong>Active ingredients (per 2 gummies):</strong><br>Vitamin A (as retinyl acetate), Vitamin C (as ascorbic acid), Vitamin D (as cholecalciferol), Vitamin E (as dl-alpha tocopheryl acetate), Vitamin B-6 (as pyridoxine hydrochloride), Folate, Vitamin B-12 (as cyanocobalamin), Biotin, Pantothenic Acid (as calcium d-pantothenate), Iodine (as potassium iodide), Zinc (as zinc citrate), PABA (para-aminobenzoic acid), Collagen (fish), Silicon, Glucose syrup, Sugar, Glucose, Pectin, Citric acid, Sodium citrate, Passion fruit flavour, Vegetable oil (contains carnauba wax), Purple carrot juice concentrate.</p><p><strong>60 gummies · 30 servings</strong></p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Take 2 gummies per day, preferably with a meal.</p><p><strong>Warning:</strong> Do not exceed the recommended dose. Store in a cool, dry place away from light.</p>`,
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
    name: { en: "Berberine" },
    tagline: { en: "Targeted molecular support for metabolic balance, healthy blood sugar and cardiovascular resilience." },
    headline: { en: "A targeted formula for metabolic balance, healthy blood sugar and heart health." },
    bullets: {
      en: [
        "Formulated with 97% pure Berberine for maximum efficacy and absorption.",
        "Optimises your energy and keeps your metabolism active.",
        "We use high-quality bark and root extracts to ensure an effective dose.",
        "Vegetable capsules: a pure formula with olive oil, no artificial additives.",
      ],
    },
    marquee: ["Antioxidants", "Cardiovascular System", "Healthy Digestion", "Weight Loss", "Healthy blood sugar levels"],
    whyTitle: { en: "Balance starts with <em>the right</em> nutrition." },
    whyText: {
      en: ["This intelligent formula works with your body to help manage cravings and keep your energy stable throughout the day."],
    },
    benefits: [
      { icon: "🧘", title: { en: "Stress management" }, desc: { en: "Ashwagandha helps modulate the stress response" } },
      { icon: "🎯", title: { en: "Focus & concentration" }, desc: { en: "L-Theanine promotes a state of relaxed concentration" } },
      { icon: "😊", title: { en: "Emotional balance" }, desc: { en: "Supports a stable mood and mental wellbeing" } },
      { icon: "🌙", title: { en: "Restorative sleep" }, desc: { en: "Helps improve sleep quality" } },
    ],
    differentiators: [
      { icon: "🔬", title: { en: "Patented KSM-66" }, desc: { en: "The most studied form of ashwagandha" } },
      { icon: "☕", title: { en: "Caffeine-free" }, desc: { en: "Natural focus without energy spikes" } },
      { icon: "✅", title: { en: "Certified vegan" }, desc: { en: "No animal-derived ingredients" } },
      { icon: "🌿", title: { en: "Adaptogenic plants" }, desc: { en: "Ancient tradition validated by science" } },
      { icon: "💊", title: { en: "High bioavailability" }, desc: { en: "Formula optimised for maximum absorption" } },
      { icon: "🏭", title: { en: "GMP certified" }, desc: { en: "Manufactured in certified facilities" } },
    ],
    ingredients: [
      { emoji: "🌿", name: { en: "Ashwagandha KSM-66 (600 mg)" }, desc: { en: "The most potent extract for lowering cortisol and improving stress resistance." } },
      { emoji: "🍵", name: { en: "L-Theanine (200 mg)" }, desc: { en: "Naturally present in green tea. Promotes relaxed concentration." } },
      { emoji: "💊", name: { en: "Vitamin B Complex" }, desc: { en: "B6, B9 and B12 to support neurotransmitter synthesis." } },
    ],
    descriptionHTML: {
      en: `<p>Made with a <strong>granular Berberine hydrochloride extract</strong> that is 97% pure, this formula helps your body process energy more efficiently. It is the ideal botanical solution for those who value discipline, helping you <strong>maintain a healthy weight</strong> and protect your daily momentum.</p>`,
    },
    ingredientsHTML: {
      en: `<p>Granular berberine hydrochloride extract 97% (bark), granular berberine hydrochloride extract 8% (bark/root), cellulose (vegetable capsule), MCC (microcrystalline cellulose), L-Leucine, olive oil - <strong>60 capsules</strong></p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Take 2 capsules per day with a large glass of water.</p><p><strong>Warning:</strong> Do not exceed the recommended dose. Not recommended for pregnant or breastfeeding women or children under 18. Store in a cool, dry place.</p>`,
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
    price: 27.90,
    priceOld: 34.90,
    save: "20%",
    rating: 4.7,
    reviews: 267,
    affiliateLink: "#",
    name: { en: "Appetite & Weight Control Strips" },
    tagline: { en: "We have created a formula that works in harmony with your body." },
    headline: { en: "By combining the traditional wisdom of Saffron with the metabolic precision of Chromium and Molybdenum, we have created a formula that works in harmony with your body's natural rhythms." },
    bullets: {
      en: [
        "Saffron and chromium work together to balance your daily cravings.",
        "Advanced strips dissolve quickly for highly effective absorption.",
        "Maintain a healthy blood sugar level with our precise metabolic formula.",
        "Achieve your wellness goals with this convenient, portable daily routine.",
      ],
    },
    marquee: ["Appetite Balance", "Weight Support Strips", "Satiety", "Healthy blood sugar levels"],
    whyTitle: { en: "Mental balance starts with <em>the right</em> nutrition." },
    whyText: {
      en: ["This intelligent formula works with your body to help manage cravings and keep your energy stable throughout the day."],
    },
    benefits: [
      { icon: "🧘", title: { en: "Stress management" }, desc: { en: "Ashwagandha helps modulate the stress response" } },
      { icon: "🎯", title: { en: "Focus & concentration" }, desc: { en: "L-Theanine promotes a state of relaxed concentration" } },
      { icon: "😊", title: { en: "Emotional balance" }, desc: { en: "Supports a stable mood and mental wellbeing" } },
      { icon: "🌙", title: { en: "Restorative sleep" }, desc: { en: "Helps improve sleep quality" } },
    ],
    differentiators: [
      { icon: "🔬", title: { en: "Patented KSM-66" }, desc: { en: "The most studied form of ashwagandha" } },
      { icon: "☕", title: { en: "Caffeine-free" }, desc: { en: "Natural focus without energy spikes" } },
      { icon: "✅", title: { en: "Certified vegan" }, desc: { en: "No animal-derived ingredients" } },
      { icon: "🌿", title: { en: "Adaptogenic plants" }, desc: { en: "Ancient tradition validated by science" } },
      { icon: "💊", title: { en: "High bioavailability" }, desc: { en: "Formula optimised for maximum absorption" } },
      { icon: "🏭", title: { en: "GMP certified" }, desc: { en: "Manufactured in certified facilities" } },
    ],
    ingredients: [
      { emoji: "🌿", name: { en: "Ashwagandha KSM-66 (600 mg)" }, desc: { en: "The most potent extract for lowering cortisol and improving stress resistance." } },
      { emoji: "🍵", name: { en: "L-Theanine (200 mg)" }, desc: { en: "Naturally present in green tea. Promotes relaxed concentration." } },
      { emoji: "💊", name: { en: "Vitamin B Complex" }, desc: { en: "B6, B9 and B12 to support neurotransmitter synthesis." } },
    ],
    descriptionHTML: {
      en: `<p>Our strips combine <strong>Saffron</strong>, <strong>Chromium</strong> and <strong>Molybdenum</strong> in a forest berry infusion that melts instantly on the tongue. This intelligent formula works in synergy with your metabolism to regulate appetite and stabilise your energy throughout the day.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p>Chromium (as chromium picolinate) (75 mcg), Molybdenum (as molybdenum glycinate) (10 mcg), Crocus sativus (Saffron) (10 mg), pullulan, cellulose, malic acid, sorbitol syrup, lecithin, forest berry flavour, steviol glycosides - <strong>30 strips</strong></p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Place one strip on your tongue and allow it to dissolve completely before swallowing. Take one strip at any time of day, not exceeding a maximum of <strong>1 strip per day</strong>.</p><p><strong>Warning:</strong> Not recommended for pregnant or breastfeeding women. May interact with sedatives.</p>`,
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
    badge: { en: "Hangover" },
    affiliateLink: "#",
    name: { en: "After-Party Recovery Strips" },
    tagline: { en: "A synergy of ingredients inspired by Ayurvedic traditions." },
    headline: { en: "A synergy of ingredients inspired by Ayurvedic traditions, designed to support your overall wellbeing." },
    bullets: {
      en: [
        "To restore your balance and stay on track.",
        "A blend of Turmeric and herbs to protect your liver.",
        "Dissolving strips to help the body recover faster.",
        "Natural ingredients to fight headaches and fatigue.",
      ],
    },
    marquee: ["Ayurvedic Tradition", "HANGover", "Detox"],
    whyTitle: { en: "True wellbeing lies in the <em>resilience</em> to return to your <em>centre</em>." },
    whyText: {
      en: ["By bridging ancestral wisdom with modern technology, we provide you with the means to honour your social life while protecting your internal ecosystem — ensuring your momentum remains intact."],
    },
    benefits: [
      { icon: "🦠", title: { en: "Balanced microbiome" }, desc: { en: "Strain diversity for a healthy gut microbiota" } },
      { icon: "🛡️", title: { en: "Strengthened immunity" }, desc: { en: "70% of the immune system resides in the gut" } },
      { icon: "😊", title: { en: "Gut-brain axis" }, desc: { en: "A healthy microbiome supports mood and mental wellbeing" } },
      { icon: "🍽️", title: { en: "Optimal digestion" }, desc: { en: "Improves digestive comfort and nutrient absorption" } },
    ],
    differentiators: [
      { icon: "🔢", title: { en: "50 billion CFU" }, desc: { en: "Clinically significant dose" } },
      { icon: "🧬", title: { en: "10 diverse strains" }, desc: { en: "Broad spectrum for a balanced microbiome" } },
      { icon: "💊", title: { en: "Acid-resistant capsule" }, desc: { en: "Protects probiotics all the way to the intestine" } },
      { icon: "🌾", title: { en: "FOS prebiotics" }, desc: { en: "Feeds the beneficial bacteria" } },
      { icon: "❄️", title: { en: "Stable without refrigeration" }, desc: { en: "Advanced stabilisation technology" } },
      { icon: "🌱", title: { en: "Vegan & lactose-free" }, desc: { en: "Suitable for all dietary sensitivities" } },
    ],
    ingredients: [
      { emoji: "🦠", name: { en: "Probiotic Blend (50B CFU)" }, desc: { en: "Complex of 10 strains certified live until the expiry date." } },
      { emoji: "🌾", name: { en: "FOS Prebiotics (200 mg)" }, desc: { en: "Prebiotic fibres that selectively feed beneficial bacteria." } },
      { emoji: "💊", name: { en: "DR Cap™ Technology" }, desc: { en: "Acid-resistant capsule for optimal delivery to the small intestine." } },
    ],
    descriptionHTML: {
      en: `<p>Recharge and recover with our natural, fast-dissolving <strong>Hangover Strips</strong>. Thanks to a blend of <strong>Ayurvedic ingredients</strong> such as <strong>turmeric</strong> and <strong>chicory</strong>, these mango-orange strips support your liver and help clear the brain fog after a night out.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p>Phoenix Dactylifera extract (Date), Curcuma Longa extract, Andrographis Paniculata extract, Cichorium Intybus extract (Chicory), Vitis Vinifera extract (Grape), Phyllanthus Niruri extract, Phyllanthus Emblica extract, pullulan, cellulose, mannitol, liquorice extract, lecithin, malic acid, mango flavour, steviol glycosides, orange flavour</p><p><strong>30 strips</strong></p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Place one strip on your tongue and allow it to dissolve completely before swallowing. Take one strip at any time of day, not exceeding a maximum of <strong>1 strip per day</strong>.</p><p><strong>Warning:</strong> Not recommended for pregnant or breastfeeding women. May interact with sedatives.</p>`,
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
    badge: { en: "Bestseller" },
    affiliateLink: "#",
    name: { en: "NAD+ Booster" },
    tagline: { en: "Boosts energy and supports metabolic and cognitive health." },
    headline: { en: "Our NAD+ complex sets a new benchmark in longevity science, with a unique combination of ingredients you won't find in any other bottle. This isn't just an addition to your routine — it's the ultimate upgrade." },
    bullets: {
      en: [
        "Balances metabolism and daily wellbeing.",
        "Antioxidant support (Quercetin & Resveratrol).",
        "Supports healthy cellular ageing.",
        "Ideal for daily vitality and overall functional wellbeing.",
      ],
    },
    marquee: ["Natural Energy Boost", "Quality Ingredients Only", "Daily Wellness Support"],
    whyTitle: { en: "The New Benchmark in <em>NAD+</em> Science" },
    whyText: {
      en: [
        "Most NAD+ supplements focus on a single molecule. We chose to prioritise the entire cellular ecosystem. By combining high-purity NAD+ with a precise ratio of co-factors, our unique blend is designed as a formula that doesn't just supplement — it synchronises.",
        "It is a sophisticated architecture of ingredients engineered to bypass traditional absorption barriers, ensuring that what you entrust to your body actually reaches your cells.",
      ],
    },
    benefits: [
      { icon: "⚡", title: { en: "Energy support" }, desc: { en: "Supports natural cellular energy metabolism" } },
      { icon: "🧠", title: { en: "Mental performance" }, desc: { en: "Helps maintain focus and cognitive function" } },
      { icon: "🌿", title: { en: "Healthy ageing" }, desc: { en: "Designed to support healthy cellular ageing processes" } },
      { icon: "⚖️", title: { en: "Metabolic function" }, desc: { en: "Helps support normal metabolic activity" } },
    ],
    differentiators: [
      { icon: "🌱", title: { en: "Non-GMO" }, desc: { en: "No genetically modified ingredients" } },
      { icon: "✅", title: { en: "Third-party tested" }, desc: { en: "Independent purity verification" } },
      { icon: "🌿", title: { en: "Plant-based formula" }, desc: { en: "Vegan & clean ingredients" } },
      { icon: "⚗️", title: { en: "Pure NAD+" }, desc: { en: "Supports natural cellular function" } },
      { icon: "🍃", title: { en: "Quercetin Extract" }, desc: { en: "Supports cellular utilisation" } },
      { icon: "🔬", title: { en: "Resveratrol" }, desc: { en: "Supports sirtuin pathways & healthy ageing" } },
    ],
    ingredients: [
      { emoji: "⚗️", name: { en: "NAD+ (500 mg)" }, desc: { en: "Essential coenzyme for energy production in every cell." } },
      { emoji: "🍃", name: { en: "Quercetin (250 mg)" }, desc: { en: "Plant-derived antioxidant that helps support immune function." } },
      { emoji: "🌿", name: { en: "Resveratrol (150 mg)" }, desc: { en: "Japanese knotweed extract, known for supporting cardiovascular health." } },
    ],
    descriptionHTML: {
      en: `<p>NAD+ is an essential coenzyme for supporting natural cellular energy production. This formula delivers <strong>500 mg of NAD+</strong> per serving, helping to support your body's daily vitality†.</p><p>It also includes <strong>Quercetin</strong> and <strong>Resveratrol</strong> for complete daily cellular support.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p><strong>Active ingredients (per 2 capsules):</strong><br>NAD+ (Nicotinamide Adenine Dinucleotide) (500 mg), quercetin dihydrate extract (Sophora japonica) (whole flower bud) (250 mg), Japanese knotweed extract (98% resveratrol) (Polygonum cuspidatum) (root) (150 mg), HPMC (vegetable capsule), microcrystalline cellulose (MCC), brown rice flour, olive oil, silicon dioxide, magnesium stearate.</p><p>60 capsules · 60 servings</p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Take 2 capsules per day with a large glass of water.</p><p><strong>Warning:</strong> Do not exceed the recommended dose. Not recommended for pregnant or breastfeeding women or children under 18. Store in a cool, dry place.</p>`,
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
    name: { en: "Mushroom 10-Synergy Complex" },
    tagline: { en: "Precision Bio-Support for the Active Mind." },
    headline: { en: "Using a precise 10:1 extraction ratio, we ensure that the bioactive compounds of Lion's Mane, Reishi and Cordyceps work in unison." },
    bullets: {
      en: [
        "Memory optimisation and cognitive architecture*",
        "Athletic performance and cellular endurance*",
        "Resilience and overall biological harmony*",
        "Metabolic balance and glycaemic support*",
      ],
    },
    marquee: ["20+ Nutrients", "Complete Formula", "Daily Foundation", "Optimal Absorption"],
    whyTitle: { en: "The <em>nutritional</em> foundation of your daily wellbeing." },
    whyText: {
      en: ["Modern life demands a level of mental and physical agility that standard supplements rarely deliver.<br> Our <strong>Mushroom 10-Synergy Complex</strong> is a precision-engineered protocol designed to synchronise ten of the world's most powerful adaptogenic fruiting body extracts — including Lion's Mane, Reishi and Cordyceps — into a single high-efficacy formula. Using a superior 10:1 extraction ratio, we deliver the concentrated bioactive compounds needed to optimise cellular energy and fortify your system. This is not simply a supplement; it is the definitive foundation for those who refuse to compromise on their biological potential."],
    },
    benefits: [
      { icon: "⚡", title: { en: "Daily energy" }, desc: { en: "B vitamins support metabolic energy production" } },
      { icon: "🛡️", title: { en: "Immunity" }, desc: { en: "Vitamins C, D3 and zinc for strong natural defences" } },
      { icon: "🦴", title: { en: "Bones & muscles" }, desc: { en: "Calcium, D3 and K2 for bone strength" } },
      { icon: "🧠", title: { en: "Cognitive function" }, desc: { en: "B12, B6 and folate for neurological health" } },
    ],
    differentiators: [
      { icon: "🔢", title: { en: "20+ nutrients" }, desc: { en: "Full coverage of core nutritional needs" } },
      { icon: "💊", title: { en: "Bioavailable forms" }, desc: { en: "Methylcobalamin B12, natural D3, K2 MK-7" } },
      { icon: "🌱", title: { en: "Certified vegan" }, desc: { en: "All vitamins from plant or synthetic origin" } },
      { icon: "🚫", title: { en: "No fillers" }, desc: { en: "No titanium dioxide or colorants" } },
      { icon: "✅", title: { en: "Lab tested" }, desc: { en: "Potency and purity third-party verified" } },
      { icon: "🏭", title: { en: "GMP certified" }, desc: { en: "Manufactured in certified facilities" } },
    ],
    ingredients: [
      { emoji: "☀️", name: { en: "Vitamin D3 + K2 (2000 IU + 100mcg)" }, desc: { en: "Synergistic combination for calcium absorption and bone strength." } },
      { emoji: "🔋", name: { en: "Full Vitamin B Complex" }, desc: { en: "B1, B2, B3, B5, B6, B7, B9, B12 for energy and neurology." } },
      { emoji: "⚡", name: { en: "Zinc + Magnesium + Selenium" }, desc: { en: "Mineral trio for immunity, recovery and cellular protection." } },
    ],
    descriptionHTML: {
      en: `<p>Our Mushroom 10-Synergy Complex brings together ten mushrooms recognised for their adaptogenic properties, from Lion's Mane to Reishi. Through concentrated fruiting body extraction, this formula is designed to naturally support your focus and daily vitality. It forms a solid foundation for an active lifestyle and a healthy biological balance.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p><strong>Active ingredients (per 2 capsules):</strong><br>Mushroom Extract Blend: 250 mg<br>Comprising: Maitake fruiting body extract 10:1, Shiitake fruiting body extract 10:1, Lion's Mane fruiting body extract 10:1 (Hericium erinaceus), Reishi fruiting body extract 10:1, Cordyceps fruiting body extract 10:1, Chaga fruiting body extract 10:1, Turkey Tail fruiting body extract 10:1, White Button fruiting body extract 10:1 (Agaricus bisporus), Black Fungus fruiting body extract 10:1 (Auricularia auricula-judae) and Royal Mushroom fruiting body extract 10:1 (Agaricus subrufescens).</p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Take 2 capsules per day with a meal.</p><p><strong>Warning:</strong> Do not exceed the recommended dose. Pregnant women should consult their doctor before use.</p>`,
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
    name: { en: "Mushroom Focus Strips" },
    tagline: { en: "Mushroom blend for vitality, clarity and immunity." },
    headline: { en: "Blend of adaptogenic mushrooms for vitality, mental clarity and immune resilience." },
    bullets: {
      en: [
        "Lion's Mane improves your focus and memory.",
        "Boosts your daily energy without a caffeine crash.",
        "Maitake and Shiitake support your immune system.",
        "Convenient chocolate strips that melt without water.",
      ],
    },
    marquee: ["Lion's Mane Focus", "Reishi Immunity", "Cordyceps Energy", "Adaptogen Blend"],
    whyTitle: { en: "Mushrooms: the wisdom of <em>nature</em>." },
    whyText: {
      en: ["Our Mushroom Focus Strips offer a powerful all-in-one blend of <strong>Lion's Mane</strong>, <strong>Cordyceps</strong>, <strong>Maitake and Shiitake</strong>. This intelligent formula works in synergy to support your whole body: <strong>Lion's Mane</strong> clears mental fog for better focus, while <strong>Cordyceps</strong> delivers natural energy and endurance. <strong>Shiitake</strong> helps protect your health and keep your immune system strong."],
    },
    benefits: [
      { icon: "🧠", title: { en: "Mental clarity" }, desc: { en: "Lion's Mane supports focus and memory" } },
      { icon: "🛡️", title: { en: "Immunity" }, desc: { en: "Reishi strengthens natural defences" } },
      { icon: "⚡", title: { en: "Natural energy" }, desc: { en: "Cordyceps improves endurance without caffeine" } },
      { icon: "⚖️", title: { en: "Balance" }, desc: { en: "Adaptogens help manage stress" } },
    ],
    differentiators: [
      { icon: "🍄", title: { en: "10:1 extract" }, desc: { en: "Maximum concentration of active compounds" } },
      { icon: "✅", title: { en: "Certified organic" }, desc: { en: "Mushrooms grown without pesticides" } },
      { icon: "☕", title: { en: "Caffeine-free" }, desc: { en: "Natural energy without jitters" } },
      { icon: "🔬", title: { en: "Beta-glucans" }, desc: { en: "Primary immunomodulatory compounds" } },
      { icon: "🌱", title: { en: "Vegan & clean" }, desc: { en: "No animal-derived ingredients" } },
      { icon: "✅", title: { en: "Lab tested" }, desc: { en: "Every batch verified for purity and potency" } },
    ],
    ingredients: [
      { emoji: "🦁", name: { en: "Lion's Mane (500 mg)" }, desc: { en: "Mushroom known for supporting neuroplasticity and focus." } },
      { emoji: "🍄", name: { en: "Reishi (400 mg)" }, desc: { en: "The 'mushroom of immortality' — supports the immune system." } },
      { emoji: "⚡", name: { en: "Cordyceps (300 mg)" }, desc: { en: "Supports cellular energy production (ATP) and endurance." } },
    ],
    descriptionHTML: {
      en: `<p>Our <strong>Mushroom Focus Strips</strong> to improve your focus and energy. We have combined Lion's Mane, Maitake, Cordyceps and Shiitake in a melting chocolate strip. Designed for a sharp mind and an active body, these strips require no water or capsules — simply let them melt on your tongue.</p><p style="font-size:12px;color:var(--ink3);margin-top:12px">† Not evaluated by health authorities.</p>`,
    },
    ingredientsHTML: {
      en: `<p>30 Strips - Hericium erinaceus (Lion's Mane) (30 mg), Grifola frondosa (Maitake) (25 mg), Cordyceps sinensis (Cordyceps) (25 mg), Lentinus edodes (Shiitake) (20 mg), pullulan, cellulose, lecithin, chocolate flavour, monk fruit extract, medium chain triglycerides (MCT), xanthan gum, steviol glycosides.</p>`,
    },
    safetyHTML: {
      en: `<p><strong>Directions:</strong> Place one strip on your tongue and allow it to dissolve completely before swallowing. Take one strip at any time of day, not exceeding a maximum of <strong>1 strip per day</strong>.</p>`,
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

export function formatPrice(n: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}
