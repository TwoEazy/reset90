"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";

const segments = [
  {
    slug: "premium-individuals",
    title: "Premium Individuals",
    subtitle: "For those who demand the highest level",
    description:
      "Built for dedicated individuals who treat personal progress with the same discipline as professionals treat their sport. Includes body transformations, post-injury comebacks, and peak lifestyle training.",
    features: [
      "Tailored physical training based on advanced assessments",
      "Comprehensive nutrition and metabolic strategy",
      "Stress and mental resilience coaching",
      "Structured tracking and ongoing adaptation",
    ],
    image: images.premiumIndividual,
  },
  {
    slug: "athletes",
    title: "Athletes",
    subtitle: "Compete at the highest level",
    description:
      "A one-to-one performance pathway for professionals and aspiring professionals. Whether it's fight prep, seasonal peak, or a comeback — pushing limits while maintaining balance and recovery.",
    features: [
      "DEXA scans & metabolic testing",
      "Personalized nutrition and supplementation",
      "Mental conditioning for competition pressure",
      "Performance plan aligned to competition calendars",
    ],
    image: images.athlete,
  },
  {
    slug: "teams",
    title: "Team Sports",
    subtitle: "Raise collective standards",
    description:
      "A complete framework for clubs and teams. We assess each player individually, then develop a tailored 90-day training cycle that builds stronger, sharper, more cohesive squads.",
    features: [
      "Sport-specific strength & conditioning",
      "Nutrition optimization for energy and recovery",
      "Mental resilience training under pressure",
      "Continuous monitoring and adaptation",
    ],
    image: images.teamSport,
  },
];

export default function ProfessionalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroProfessional}
            alt="Professional training"
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
              In-Person Coaching — Belgium
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              RESET90{" "}
              <span className="text-gradient-gold">Professional</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Designed for those who treat performance as more than a goal —
              it&apos;s their profession, their discipline, and their standard.
              Every case begins with a private video consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Segments */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-16">
            {segments.map((seg, i) => (
              <AnimatedSection
                key={seg.slug}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <div className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg border border-white/5 hover:border-gold/20 transition-all duration-500 overflow-hidden ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-72 lg:h-auto min-h-[320px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={seg.image}
                      alt={seg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-card/80 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className={`p-8 md:p-12 bg-dark-card ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-sm font-semibold tracking-[0.15em] uppercase text-gold mb-2">
                      {seg.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {seg.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {seg.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {seg.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-white/60"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <CTAButton href={`/professional/${seg.slug}`}>
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
            src={images.strengthTraining}
            alt="Professional training"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Professional Journey
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Prices are tailored to each case. Request a private consultation
              to discuss your specific needs and goals.
            </p>
            <CTAButton href="/contact" size="large">
              Request Professional Consultation
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
