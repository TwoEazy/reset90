import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "@/i18n/dictionaries";
import { DictionaryProvider } from "@/i18n/DictionaryContext";
import { locales, rtlLocales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

const GTM_ID = "GTM-THNPBH3K";

export const metadata: Metadata = {
  title: "RESET90 — The Shift Begins",
  description:
    "A precision transformation system built on structured 90-day cycles. Physical conditioning, nutrition, and lifestyle optimization.",
  metadataBase: new URL("https://reset90.be"),
  openGraph: {
    title: "RESET90 — The Shift Begins",
    description:
      "Premium 90-day transformation system. Physical conditioning, nutrition, and lifestyle optimization.",
    siteName: "RESET90",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "RESET90 — The Shift Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESET90 — The Shift Begins",
    description:
      "Premium 90-day transformation system. Physical conditioning, nutrition, and lifestyle optimization.",
    images: ["/about.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);
  const isRtl = rtlLocales.includes(locale);

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <DictionaryProvider dictionary={dictionary} lang={locale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </DictionaryProvider>
      </body>
    </html>
  );
}
