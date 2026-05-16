"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function PoliciesPage() {
  const { dict, lang } = useDictionary();
  const t = dict.policies as any;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.heroTitle}
            </h1>
            <p className="text-gray">{t.heroDesc}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <AnimatedSection direction="up">
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.privacyTitle}
              </h2>
              <div className="space-y-4 text-sm text-gray leading-relaxed">
                <p>{t.privacyIntro}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.infoCollectTitle}
                </h3>
                <p>{t.infoCollectDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.howWeUseTitle}
                </h3>
                <p>{t.howWeUseDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.dataProtectionTitle}
                </h3>
                <p>{t.dataProtectionDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.yourRightsTitle}
                </h3>
                <p>{t.yourRightsDesc}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.tosTitle}
              </h2>
              <div className="space-y-4 text-sm text-gray leading-relaxed">
                <p>{t.tosIntro}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.disclaimerTitle}
                </h3>
                <p>{t.disclaimerDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.paymentsTitle}
                </h3>
                <p>{t.paymentsDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.ipTitle}
                </h3>
                <p>{t.ipDesc}</p>
                <h3 className="text-white font-semibold text-base mt-6">
                  {t.liabilityTitle}
                </h3>
                <p>{t.liabilityDesc}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
