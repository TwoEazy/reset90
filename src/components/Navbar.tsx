"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { dict, lang } = useDictionary();
  const t = dict.nav as Record<string, string>;

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/online`, label: t.online },
    { href: `/${lang}/professional`, label: t.professional },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/faq`, label: t.faq },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gold/20"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full px-6 lg:px-8 xl:px-16 2xl:px-24 flex items-center justify-between h-20 xl:h-24">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center group flex-shrink-0">
          <Image
            src="/logoreset90.png"
            alt="RESET90 Logo"
            width={260}
            height={100}
            className="lg:w-[240px] xl:w-[320px] 2xl:w-[380px] object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav — flex centered between logo and CTA */}
        <div className="hidden lg:flex flex-1 justify-center mx-2 xl:mx-6">
          <div className="flex items-center gap-3 xl:gap-6 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-[15px] 2xl:text-base font-medium tracking-wider uppercase text-white/80 hover:text-gold transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Language Switcher + CTA Button */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <Link
            href={`/${lang}/contact`}
            className="btn-gold bg-gold text-dark font-bold text-[10px] xl:text-xs 2xl:text-sm px-4 xl:px-6 2xl:px-8 py-2.5 xl:py-3 2xl:py-3.5 rounded-md tracking-wider uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all whitespace-nowrap"
          >
            {t.bookConsultation}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-2 p-3"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="block w-7 h-[2px] bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-7 h-[2px] bg-gold"
          />
          <motion.span
            animate={
              mobileOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }
            }
            className="block w-7 h-[2px] bg-gold"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-7 py-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium tracking-wider uppercase text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileOpen(false)}
                className="btn-gold bg-gold text-dark font-bold text-sm px-8 py-4 rounded-md tracking-wider uppercase mt-2 w-[80%] text-center"
              >
                {t.bookConsultation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
