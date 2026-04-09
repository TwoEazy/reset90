"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";

const bundles = [
  {
    slug: "standard",
    title: "RESET90 Standard",
    description:
      "Tailored 90-day training & nutrition with bi-weekly video consultations and 24/7 email support.",
    highlights: [
      "30-min bi-weekly video consultations",
      "Lifestyle Optimization System",
      "24/7 email support",
      "RESET90 Resistance Band Kit",
    ],
    image: images.standard,
  },
  {
    slug: "advanced",
    title: "RESET90 Advanced",
    description:
      "Personalized 90-day plan with weekly consultations, multi-channel support, and full equipment kit.",
    highlights: [
      "20-min weekly consultations",
      "Lifestyle Optimization System",
      "WhatsApp, phone & 24/7 email",
      "Full Equipment Kit + walking pad",
    ],
    image: images.advanced,
  },
  {
    slug: "premium",
    title: "RESET90 Premium",
    description:
      "The flagship experience. Twice-weekly consultations, priority support, and our complete equipment kit.",
    highlights: [
      "30-min twice-weekly consultations",
      "Lifestyle Optimization System",
      "Priority WhatsApp & phone",
      "Full Equipment Kit + walking pad",
    ],
    featured: true,
    image: images.premium,
  },
  {
    slug: "post-pregnancy",
    title: "RESET90 Post-Pregnancy",
    description:
      "Gentle-to-progressive plan after childbirth, designed for safe recovery and rebuilding strength.",
    highlights: [
      "20-min weekly consultations",
      "Lifestyle Optimization System",
      "WhatsApp & phone support",
      "Equipment Kit + walking pad (low-impact)",
    ],
    image: images.postPregnancy,
  },
  {
    slug: "post-operations",
    title: "RESET90 Post-Operations",
    description:
      "Recovery-aware program post medical clearance. Controlled progression with professional monitoring.",
    highlights: [
      "20-min weekly consultations",
      "Lifestyle Optimization System",
      "WhatsApp & phone support",
      "Equipment Kit + walking pad (controlled)",
    ],
    image: images.postOperations,
  },
  {
    slug: "reduced-mobility",
    title: "RESET90 Reduced Mobility",
    description:
      "Adaptive training system — seated, assisted, or standing. Fully tailored to your capabilities.",
    highlights: [
      "20-min weekly consultations",
      "Lifestyle Optimization System",
      "WhatsApp & phone support",
      "RESET90 Fitness Equipment Kit",
    ],
    image: images.reducedMobility,
  },
];

export default function OnlinePage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Online Programs
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              RESET90 <span className="text-gradient-gold">Online</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Six specialized bundles, each built on our 90-day cycle methodology.
              Tailored training, nutrition, and lifestyle optimization —
              delivered remotely with precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bundles.map((bundle, i) => (
              <AnimatedSection key={bundle.slug} direction="up" delay={i * 0.1}>
                <div
                  className={`group relative rounded-lg border transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 ${
                    bundle.featured
                      ? "border-gold/30 shadow-lg shadow-gold/5"
                      : "border-white/5 hover:border-gold/20"
                  }`}
                >
                  {bundle.featured && (
                    <span className="absolute top-4 right-4 z-10 bg-gold text-dark text-xs font-bold px-3 py-1 rounded tracking-wider uppercase">
                      Flagship
                    </span>
                  )}
                  {/* Card image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={bundle.image}
                      alt={bundle.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                  </div>
                  <div className={`flex-1 p-8 flex flex-col ${bundle.featured ? "bg-gradient-to-b from-dark-card to-dark" : "bg-dark-card"}`}>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {bundle.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-6">
                        {bundle.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {bundle.highlights.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-white/60"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CTAButton
                      href={`/online/${bundle.slug}`}
                      variant={bundle.featured ? "primary" : "outline"}
                      className="w-full text-center"
                    >
                      Learn More
                    </CTAButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
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
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Bundle?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Request a free introduction meeting and we&apos;ll help you find
              the perfect fit for your goals.
            </p>
            <CTAButton href="/contact" size="large">
              Request Introduction Meeting
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
