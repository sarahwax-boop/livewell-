# Live Well — Confirmed Directory Structure

```
live-well/
│
├── messages/
│   ├── fr.json                          ✅ French translations (Nav, Cart, Redirect + all pages)
│   └── nl.json                          ✅ Dutch translations (mirror structure)
│
├── public/
│   └── images/
│       └── products/                    → Drop product bottle PNGs here
│           ├── nad-booster.png
│           ├── radiantglow-gummies.png
│           ├── mycobloom-gummies.png
│           └── ...
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── [locale]/                    → next-intl dynamic locale segment
│   │   │   ├── layout.tsx               → Fonts (Cormorant + Jost), Header, Footer, Drawers
│   │   │   ├── page.tsx                 → Homepage (Hero → Products → Sale → About → Glow → Trust → Bundle)
│   │   │   │
│   │   │   ├── shop/
│   │   │   │   ├── page.tsx             → PLP: filter pills + sort dropdown + 4-col grid
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx         → PDP: gallery, qty stepper, add-to-cart, accordion
│   │   │   │
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx             → Blog index
│   │   │   │   └── [slug]/page.tsx      → Blog post
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/                       → Outside [locale] — no i18n, protected by Supabase auth
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                 → Dashboard overview
│   │   │   ├── products/page.tsx
│   │   │   └── orders/page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── revalidate/route.ts      → On-demand ISR webhook (Supabase → Next.js)
│   │   │
│   │   ├── globals.css                  → Tailwind directives + CSS custom properties
│   │   ├── layout.tsx                   → Root layout (html/body shell only)
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               → Sticky nav, frosted glass on scroll, cart badge
│   │   │   ├── Footer.tsx               → Dark footer with 4-col grid
│   │   │   └── LocaleSwitcher.tsx       → FR | NL toggle (patches pathname)
│   │   │
│   │   ├── home/
│   │   │   ├── AnnouncementBar.tsx      → Gold bar: "Soldes jusqu'à 40%…"
│   │   │   ├── Hero.tsx                 → Full-width dark hero, Cormorant H1 + gold italic
│   │   │   ├── ProductSection.tsx       → 3-col featured products on dark-2 bg
│   │   │   ├── SaleBanner.tsx           → Massive serif type, gold CTA
│   │   │   ├── AboutSection.tsx         → Cream bg, 2-col text + dark image panel
│   │   │   ├── GlowSection.tsx          → Split: image left, text right, dark bg
│   │   │   ├── TrustSection.tsx         → 4-col cream cards with photo placeholders
│   │   │   └── BundleSection.tsx        → Cream bg, bottle visual + perk grid
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx          → Cream card, bottle image, dark badge, gold sale price
│   │   │   ├── ProductGrid.tsx          → Responsive 2→4 col grid with filter/sort
│   │   │   ├── ProductImages.tsx        → Main image + thumbnail strip
│   │   │   ├── AddToCartButton.tsx      → Qty stepper + animated add CTA
│   │   │   └── ShopClient.tsx           → "use client" wrapper for filter state
│   │   │
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx           → Slide-in panel from right
│   │   │   ├── CartItem.tsx             → Line item with qty stepper + remove
│   │   │   ├── CartSummary.tsx          → Subtotal, shipping bar, checkout CTA
│   │   │   └── RedirectModal.tsx        → Full-screen cream overlay with progress bar
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx               → btn-white | btn-gold | btn-dark | btn-outline
│   │       ├── Badge.tsx                → Pill badge (dark bg on cream card)
│   │       ├── Skeleton.tsx             → Shimmer loader
│   │       └── AnimatedCounter.tsx      → Cart count badge
│   │
│   ├── store/
│   │   └── useCart.ts                   ✅ Zustand + persist (addItem, removeItem, initiateCheckout)
│   │
│   ├── lib/
│   │   ├── supabase.ts                  ✅ Browser + Server + Admin clients (@supabase/ssr)
│   │   ├── products.ts                  → Static catalogue + Supabase fetch helpers
│   │   └── utils.ts                     → cn(), formatPrice(), buildAffiliateUrl()
│   │
│   ├── hooks/
│   │   ├── useLocale.ts                 → Thin wrapper around next-intl useLocale
│   │   └── useMediaQuery.ts
│   │
│   ├── i18n/
│   │   ├── routing.ts                   ✅ defineRouting({ locales, defaultLocale, pathnames })
│   │   └── request.ts                   ✅ getRequestConfig() — loads messages server-side
│   │
│   └── types/
│       ├── product.ts                   → Product, CartItem, Locale types
│       └── supabase.ts                  → Generated DB types (run: supabase gen types)
│
├── middleware.ts                        ✅ next-intl + Supabase session refresh
├── next.config.mjs                     ✅ withNextIntl wrapper, image domains, headers
├── tailwind.config.ts                  ✅ Everen palette, Cormorant + Jost, full token system
├── tsconfig.json                       ✅ Strict mode, @/* path aliases
├── package.json                        ✅ All deps pinned (Next 15, next-intl 3, Zustand 5)
└── .env.local                          → YOUR KEYS (already configured)
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    SUPABASE_SERVICE_ROLE_KEY=
```

## Boot sequence

```bash
npm install
npm run dev
# → http://localhost:3000  (redirects to /fr)
# → http://localhost:3000/fr   French homepage
# → http://localhost:3000/nl   Dutch homepage
```
