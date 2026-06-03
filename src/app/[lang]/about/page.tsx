"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";
import { useDictionary } from "@/i18n/DictionaryContext";

const systemImages = [
  images.athleteTesting,      // 01 Metabolic & Respiratory Analysis
  images.forceAndMovement,    // 02 Force & Movement Diagnostics
  images.visualAndCog,        // 03 Visual & Cognitive-Reaction Training
  images.athleteStats,        // 04 Reactive Neuromuscular Drills
  images.playerInsights,      // 05 Video & Tactical Analysis
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
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_rgba(200,168,78,0.03)_0%,_transparent_60%)]" />
        <Container className="relative z-10">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24 items-center mb-20 md:mb-28">
            <AnimatedSection direction="left">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                {t.frameworkLabel}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {t.why90Title} <span className="text-gradient-gold">{t.why90Highlight}</span>{lang === "ar" ? "؟" : "?"}
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                {t.why90Intro}
              </p>
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

          {/* Core Systems Intro */}
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                {t.why90CoreLabel}
              </p>
              <div className="gold-line mx-auto mb-5" />
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                {t.why90CoreDesc}
              </p>
            </div>
          </AnimatedSection>

          {/* Five Systems — alternating image + text rows */}
          <div className="space-y-16 md:space-y-24 mb-16 md:mb-20">
            {(t.why90Systems as any[]).map((system: any, i: number) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center"
                >
                  <AnimatedSection
                    direction={isEven ? "left" : "right"}
                    delay={0.1}
                    className={!isEven ? "lg:order-2" : ""}
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-gold/10">
                      <Image
                        src={systemImages[i]}
                        alt={system.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                        <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/[0.07] leading-none select-none">
                          {system.number}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    direction={isEven ? "right" : "left"}
                    delay={0.2}
                    className={!isEven ? "lg:order-1" : ""}
                  >
                    <span className="text-xs font-bold tracking-[0.3em] text-gold/40 uppercase mb-3 block">
                      System {system.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {system.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-gold/50 to-transparent mb-5" />
                    <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                      {system.desc}
                    </p>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>

          {/* Outcome */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="relative rounded-lg border border-gold/10 bg-[#111]/80 p-6 sm:p-8 md:p-10 max-w-4xl mx-auto text-center">
              <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.04)_0%,_transparent_70%)]" />
              <p className="relative text-white/50 text-base sm:text-lg leading-relaxed">
                {t.why90Outcome}
              </p>
            </div>
          </AnimatedSection>
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
