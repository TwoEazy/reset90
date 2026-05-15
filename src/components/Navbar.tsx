"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/online", label: "Online" },
  { href: "/professional", label: "Professional" },
  { href: "/about", label: "About" },
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
      <div className="w-full px-6 lg:px-8 xl:px-16 2xl:px-24 flex items-center justify-between h-20 xl:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <span className="text-xl xl:text-3xl font-bold tracking-[0.15em] text-gold group-hover:text-gold-light transition-colors">
            RESET90
          </span>
        </Link>

        {/* Desktop Nav — flex centered between logo and CTA */}
        <div className="hidden lg:flex flex-1 justify-center mx-4 xl:mx-8">
          <div className="flex items-center gap-4 xl:gap-8 2xl:gap-12">
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

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex btn-gold bg-gold text-dark font-bold text-xs xl:text-[15px] 2xl:text-base px-5 xl:px-8 2xl:px-10 py-3 xl:py-3.5 2xl:py-4 rounded-md tracking-wider uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all flex-shrink-0 whitespace-nowrap"
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
                className="btn-gold bg-gold text-dark font-bold text-sm px-8 py-4 rounded-md tracking-wider uppercase mt-2 w-[80%] text-center"
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
