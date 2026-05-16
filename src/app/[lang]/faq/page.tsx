"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { useDictionary } from "@/i18n/DictionaryContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-gold transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gold text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const { dict, lang } = useDictionary();
  const t = dict.faq as any;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              {t.label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.heroTitle}{" "}
              <span className="text-gradient-gold">{t.heroTitleHighlight}</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              {(t.items as any[]).map((faq: any, i: number) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t.stillHaveQuestions}
            </h2>
            <p className="text-gray text-lg mb-10">
              {t.stillDesc}
            </p>
            <CTAButton href={`/${lang}/contact`}>
              {t.ctaButton}
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
