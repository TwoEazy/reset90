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
            <p className="text-xl text-gold/80 tracking-wide">
              {bundle.tagline}
            </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What's included */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full">
                <h3 className="text-lg font-semibold text-white mb-6">
                  {t.whatsIncluded}
                </h3>
                <ul className="space-y-4">
                  {bundle.details.map((d: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Support Details */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full space-y-8">
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    {t.consultations}
                  </h4>
                  <p className="text-sm text-white/70">{bundle.consultations}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    {t.supportChannels}
                  </h4>
                  <p className="text-sm text-white/70">{bundle.support}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    {t.equipment}
                  </h4>
                  <p className="text-sm text-white/70">{bundle.equipment}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

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
