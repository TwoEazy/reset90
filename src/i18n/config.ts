// Italian ("it") and Spanish ("es") are temporarily disabled. Their dictionary
// files and loaders remain in place — re-add them to the arrays below to re-enable.
export const locales = ["en", "ar", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const rtlLocales: Locale[] = ["ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
};
