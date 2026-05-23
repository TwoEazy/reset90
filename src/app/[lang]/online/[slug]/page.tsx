"use client";

import { useParams } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function BundleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { dict, lang } = useDictionary();
  const t = dict.onlineDetail as any;

  const bundle = t.bundles[slug];

  if (!bundle) {
    return (
      <section className="pt-40 pb-20 bg-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {t.notFound}
          </h1>
          <CTAButton href={`/${lang}/online`}>{t.backToOnline}</CTAButton>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              {t.programLabel}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {bundle.title}
            </h1>
            <p className="text-xl text-gold/80 tracking-wide mb-4">
              {bundle.tagline}
            </p>
            {bundle.price && (
              <div className="inline-flex items-center gap-2 mt-2">
                <span className="text-3xl sm:text-4xl font-bold text-gradient-gold">
                  {bundle.price}
                </span>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 sm:py-16 md:py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection direction="up">
            <p className="text-gray text-lg leading-relaxed mb-12">
              {bundle.description}
            </p>
          </AnimatedSection>

          {/* What's Included — editorial numbered list */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="mb-12 sm:mb-16">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold mb-8 sm:mb-10">
                {t.whatsIncluded}
              </p>
              <ul className="space-y-5 sm:space-y-6">
                {bundle.details.map((d: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 sm:gap-5"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5 sm:mt-3" />
                    <span className="text-base sm:text-lg text-white/85 leading-snug">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center p-12 bg-dark-card rounded-lg border border-gold/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.readyTitle}
              </h3>
              <p className="text-gray mb-8 max-w-lg mx-auto">
                {t.readyDesc}
              </p>
              <CTAButton href={`/${lang}/contact`}>
                {t.readyButton}
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
