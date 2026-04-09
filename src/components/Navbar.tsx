"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/online", label: "Online" },
  { href: "/professional", label: "Professional" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
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
      <div className="w-full px-10 xl:px-16 2xl:px-24 flex items-center justify-between h-20 xl:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full border border-gold/40 flex items-center justify-center">
            <svg
              className="w-5 h-5 xl:w-6 xl:h-6 text-gold"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
            </svg>
          </div>
          <span className="text-2xl xl:text-3xl font-bold tracking-[0.15em] text-gold group-hover:text-gold-light transition-colors">
            RESET90
          </span>
        </Link>

        {/* Desktop Nav — centered absolute so it's truly centered on the page */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] xl:text-base font-medium tracking-wider uppercase text-white/80 hover:text-gold transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex btn-gold bg-gold text-dark font-bold text-[15px] xl:text-base px-8 xl:px-10 py-3.5 xl:py-4 rounded-md tracking-wider uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all flex-shrink-0"
        >
          Book A Free Consultation
        </Link>

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
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gold bg-gold text-dark font-bold text-base px-10 py-4 rounded-md tracking-wider uppercase mt-2"
              >
                Book A Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
