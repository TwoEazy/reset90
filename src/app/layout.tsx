import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "RESET90 — The Shift Begins",
    description:
      "Premium 90-day transformation system. Physical conditioning, nutrition, and lifestyle optimization.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
