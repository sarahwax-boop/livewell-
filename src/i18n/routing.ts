import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales:       ["fr", "nl"] as const,
  defaultLocale: "fr" as const,
  localePrefix:  "always",
  pathnames: {
    "/":              "/",
    "/shop":          { fr: "/boutique",        nl: "/winkel"      },
    "/shop/[slug]":   { fr: "/boutique/[slug]", nl: "/winkel/[slug]" },
    "/about":         { fr: "/a-propos",        nl: "/over-ons"    },
    "/blog":          { fr: "/blog",            nl: "/blog"        },
    "/contact":       { fr: "/contact",         nl: "/contact"     },
  },
});

export type Locale    = (typeof routing.locales)[number]; // "fr" | "nl"
export type Pathnames = keyof typeof routing.pathnames;
