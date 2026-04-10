import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
