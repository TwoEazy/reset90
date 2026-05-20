import type { MetadataRoute } from "next";

const BASE_URL = "https://reset90.be";
const locales = ["en", "ar", "it", "es", "fr"];

const staticPages = [
  { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/online", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/professional", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/policies", changeFrequency: "yearly" as const, priority: 0.2 },
];

const onlineSlugs = [
  "standard",
  "advanced",
  "premium",
  "postPregnancy",
  "postOperations",
  "reducedMobility",
];

const professionalSlugs = ["athletes", "teams"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  // Online bundle detail pages
  for (const locale of locales) {
    for (const slug of onlineSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/online/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Professional segment detail pages
  for (const locale of locales) {
    for (const slug of professionalSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/professional/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
