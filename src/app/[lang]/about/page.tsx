"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";
import { useDictionary } from "@/i18n/DictionaryContext";

const bundleImages = [
  images.standard,
  images.advanced,
  images.premium,
  images.postPregnancy,
  images.postOperations,
  images.reducedMobility,
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[90%] max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const { dict, lang } = useDictionary();
  const t = dict.about as any;

  const bundles = (t.bundles as any[]).map((b: any, i: number) => ({
    ...b,
    image: bundleImages[i],
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.lifestyle}
            alt="RESET90 lifestyle"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.08)_0%,_transparent_50%)]" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4"
            >
              {t.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {t.heroTitle}{" "}
              <span className="text-gradient-gold">{t.heroTitleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {t.heroDesc}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Why 90 Days */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,_rgba(200,168,78,0.03)_0%,_transparent_60%)]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                {t.frameworkLabel}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {t.why90Title} <span className="text-gradient-gold">{t.why90Highlight}</span>?
              </h2>
              <div className="space-y-4 text-white/50 text-base sm:text-lg leading-relaxed">
                <p>{t.why90P1}</p>
                <p>{t.why90P2}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gold/10">
                <Image
                  src={images.strengthTraining}
                  alt="Strength training"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <div className="section-separator" />

      {/* Online Bundles */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0d0d0d]">
        <Container>
          <AnimatedSection direction="up" className="text-center mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              {t.programsLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {t.bundlesTitle} <span className="text-gradient-gold">{t.bundlesTitleHighlight}</span>
            </h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="text-white/45 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.bundlesDesc}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {bundles.map((b: any, i: number) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                <div className="group relative rounded-lg border border-gold/10 hover:border-gold/25 overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-lg shadow-black/20">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6 bg-[#111]">
                    <p className="text-sm sm:text-base font-bold text-white mb-1">
                      RESET90 {b.name}
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-separator" />

      {/* CTA */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.transformation}
            alt="Transformation"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.08)_0%,_transparent_50%)]" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                {t.ctaTitle}{" "}
                <span className="text-gradient-gold">{t.ctaTitleHighlight}</span>
              </h2>
              <p className="text-white/45 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
                {t.ctaDesc}
              </p>
              <CTAButton href={`/${lang}/contact`} size="large">
                {t.ctaButton}
              </CTAButton>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
