"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";
import { useDictionary } from "@/i18n/DictionaryContext";

const highlightImages = [
  "/the problem.jpeg",
  "/the systemcard.png",
  "/healthtracking.png",
  "/the outcome.jpeg",
];

/* Centered container used by every section */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[90%] max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

function SectionSeparator() {
  return <div className="section-separator" />;
}

export default function Home() {
  const { dict, lang } = useDictionary();
  const t = dict.home as any;

  const highlights = (t.highlights as any[]).map((h: any, i: number) => ({
    ...h,
    image: highlightImages[i],
  }));

  return (
    <>
      {/* ══════════ SECTION 1 — HERO ══════════ */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroMain}
            alt="Gym training"
            fill
            className="object-cover object-bottom sm:object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(200,168,78,0.06)_0%,_transparent_50%)]" />
          {/* Noise grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
        </div>

        <Container className="relative z-10">
          <div className="py-24 sm:py-32 lg:py-40 max-w-3xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8"
            >
              {t.heroTitle}{" "}
              <span className="text-gradient-gold">{t.heroTitleHighlight}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href={`/${lang}/online`} size="large">
                {t.onlineCta}
              </CTAButton>
              <CTAButton href={`/${lang}/professional`} variant="outline" size="large">
                {t.professionalCta}
              </CTAButton>
            </motion.div>
          </div>
        </Container>
        </section>

      {/* ══════════ SECTION 2 — ABOUT ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#0d0d0d] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_rgba(200,168,78,0.03)_0%,_transparent_60%)]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 xl:gap-24 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4">
                {t.aboutLabel}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-7 leading-tight">
                {t.aboutTitle}{" "}
                <span className="text-gradient-gold">{t.aboutTitleHighlight}</span>
              </h2>
              <div className="space-y-4 text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p className="text-white/65 font-medium">{t.aboutP3}</p>
              </div>

              {/* Inline stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 sm:mb-10">
                {[
                  { value: t.diagnose, desc: t.phase1 },
                  { value: t.correct, desc: t.phase2 },
                  { value: t.prove, desc: t.phase3 },
                ].map((s, i) => (
                  <div key={i} className="border-t border-gold/20 pt-3">
                    <p className="text-sm sm:text-base font-bold text-white">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-white/35 tracking-wider uppercase mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>

              <CTAButton href={`/${lang}/contact`}>
                {t.requestIntro}
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none pt-3 pr-3">
                {/* Gold accent frame */}
                <div className="absolute top-0 right-0 w-[calc(100%-0.75rem)] h-[calc(100%-0.75rem)] border-2 border-gold/20 rounded-lg" />
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gold/10">
                  <Image
                    src={images.aboutTraining}
                    alt="Personal training session"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 3 — WHY RESET90 ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#080808]">
        <Container>
          <SectionHeading
            title={t.whyTitle}
            subtitle={t.whySubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {highlights.map((item: any, i: number) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15} className="w-full max-w-sm">
                <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full hover:-translate-y-1 overflow-hidden shadow-lg shadow-black/30 flex flex-col">
                  <div className="relative h-28 sm:h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6 bg-[#111] flex-1">
                    <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-1.5 sm:mb-2">{item.label}</p>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 4 — CHOOSE YOUR PATH ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#0d0d0d]">
        <Container>
          <SectionHeading
            title={t.chooseTitle}
            subtitle={t.chooseSubtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            {/* Online */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/30">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={images.cardio}
                    alt="Online training"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">{t.onlineLabel}</p>
                  </div>
                </div>
                <div className="flex-1 p-6 sm:p-8 md:p-10 bg-[#111]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">{t.onlineTitle}</h3>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                    {t.onlineDesc}
                  </p>
                  <CTAButton href={`/${lang}/online`}>{t.exploreOnline}</CTAButton>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/30">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={images.boxing}
                    alt="Professional coaching"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">{t.proLabel}</p>
                  </div>
                </div>
                <div className="flex-1 p-6 sm:p-8 md:p-10 bg-[#111]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">{t.proTitle}</h3>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                    {t.proDesc}
                  </p>
                  <CTAButton href={`/${lang}/professional`} variant="outline">{t.explorePro}</CTAButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 5 — CTA BANNER ══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.transformation}
            alt="Transformation"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.1)_0%,_transparent_60%)]" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t.ctaTitle}{" "}
                <span className="text-gradient-gold">{t.ctaTitleHighlight}</span>?
              </h2>
              <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
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
