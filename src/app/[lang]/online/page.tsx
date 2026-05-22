"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function OnlinePage() {
  const { dict, lang } = useDictionary();
  const t = dict.online as any;

  const bundles = [
    {
      slug: "standard",
      number: "01",
      title: t.bundles.standard.title,
      description: t.bundles.standard.description,
      image: images.standard,
    },
    {
      slug: "advanced",
      number: "02",
      title: t.bundles.advanced.title,
      description: t.bundles.advanced.description,
      image: images.advanced,
    },
    {
      slug: "premium",
      number: "03",
      title: t.bundles.premium.title,
      description: t.bundles.premium.description,
      featured: true,
      image: images.premium,
    },
    {
      slug: "post-pregnancy",
      number: "04",
      title: t.bundles.postPregnancy.title,
      description: t.bundles.postPregnancy.description,
      image: images.postPregnancy,
    },
    {
      slug: "post-operations",
      number: "05",
      title: t.bundles.postOperations.title,
      description: t.bundles.postOperations.description,
      image: images.postOperations,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroOnline}
            alt="Online training"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              {t.label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.heroTitle}{" "}
              <span className="text-gradient-gold">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.heroDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bundles */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-16">
            {bundles.map((bundle, i) => (
              <AnimatedSection
                key={bundle.slug}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg border transition-all duration-500 overflow-hidden ${
                    bundle.featured
                      ? "border-gold/30 shadow-lg shadow-gold/5 hover:border-gold/50"
                      : "border-white/5 hover:border-gold/20"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-72 lg:h-auto min-h-[360px] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={bundle.image}
                      alt={bundle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-card/80 to-transparent" />
                    {bundle.featured && (
                      <span className="absolute top-4 left-4 z-10 bg-gold text-dark text-xs font-bold px-3 py-1 rounded tracking-wider uppercase">
                        {t.flagship}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    } ${
                      bundle.featured
                        ? "bg-gradient-to-b from-dark-card to-dark"
                        : "bg-dark-card"
                    }`}
                  >
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                      {bundle.number}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {bundle.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-8">
                      {bundle.description}
                    </p>
                    <div>
                      <CTAButton
                        href={`/${lang}/online/${bundle.slug}`}
                        variant={bundle.featured ? "primary" : "outline"}
                      >
                        {t.learnMore}
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.lifestyle}
            alt="Fitness lifestyle"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              {t.ctaDesc}
            </p>
            <CTAButton href={`/${lang}/contact`} size="large">
              {t.ctaButton}
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
