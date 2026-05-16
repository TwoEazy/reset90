"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useDictionary();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <select
      value={lang}
      onChange={(e) => switchLocale(e.target.value as Locale)}
      className="bg-transparent border border-gold/30 text-gold text-xs tracking-wider uppercase px-2 py-1.5 rounded cursor-pointer focus:outline-none focus:border-gold/60"
      aria-label="Select language"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale} className="bg-dark text-white">
          {localeNames[locale]}
        </option>
      ))}
    </select>
  );
}
