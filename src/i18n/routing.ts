import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales:       ["en"] as const,
  defaultLocale: "en" as const,
  localePrefix:  "as-needed",
});

export type Locale    = (typeof routing.locales)[number]; // "en"
export type Pathnames = string;
