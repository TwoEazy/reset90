"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function SegmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { dict, lang } = useDictionary();
  const t = dict.professionalDetail as any;

  const segment = t.segments[slug];

  if (!segment) {
    return (
      <section className="pt-40 pb-20 bg-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            {t.notFound}
          </h1>
          <CTAButton href={`/${lang}/professional`}>
            {t.backToPro}
          </CTAButton>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={slug === "teams" ? images.teamSport : images.athlete}
            alt={segment.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              {t.programLabel}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {segment.title}
            </h1>
            <p className="text-xl text-gold/80 tracking-wide">
              {segment.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-16 md:py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6">
          {/* Description */}
          <AnimatedSection direction="up">
            <div className="space-y-4 mb-16">
              {segment.description.map((p: string, i: number) => (
                <p key={i} className="text-gray text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center p-12 bg-dark-card rounded-lg border border-gold/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.ctaTitle}
              </h3>
              <p className="text-gray mb-8 max-w-lg mx-auto">
                {t.ctaDesc}
              </p>
              <CTAButton href={`/${lang}/contact`}>
                {t.ctaButton}
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
