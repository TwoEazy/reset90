"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";

const segmentData: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string[];
    methodology: string[];
    examples: string[];
  }
> = {
  athletes: {
    title: "RESET90 Athletes",
    tagline: "Compete. Perform. Dominate.",
    description: [
      "RESET90 Athletes is for professionals and aspiring professionals competing at the highest level. This is a one-to-one performance pathway, where the same level of testing and analysis applied to teams is focused on a single athlete.",
      "Whether it's fight prep, seasonal peak, or a comeback, RESET90 Athletes is about pushing limits while maintaining balance, recovery, and long-term progression.",
    ],
    methodology: [
      "DEXA scans & metabolic testing to track physiology and recovery capacity",
      "Personalized nutrition and supplementation strategy",
      "Mental conditioning to withstand competition pressure",
      "Performance plan that evolves with competition calendars",
    ],
    examples: [
      "Fight preparation (boxing, MMA)",
      "Seasonal peak performance",
      "Comeback programs after injury",
      "Athletics and speed sports",
    ],
  },
  teams: {
    title: "RESET90 Teams",
    tagline: "Build stronger, sharper squads",
    description: [
      "For clubs and teams striving for peak performance, RESET90 Teams provides a complete framework to raise collective standards.",
      "We start by understanding the team's sport, objectives, and current challenges. Each player is assessed individually through detailed performance stats, body composition scans (DEXA), metabolism testing, and functional benchmarks.",
    ],
    methodology: [
      "Sport-specific strength & conditioning",
      "Nutrition optimization for sustained energy and recovery",
      "Mental resilience training to perform under pressure",
      "Continuous monitoring and adaptation",
    ],
    examples: [
      "Football clubs — seasonal development",
      "Basketball teams — endurance and agility",
      "Rugby squads — strength and conditioning",
      "Any team sport with competitive ambition",
    ],
  },
};

export default function SegmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const segment = segmentData[slug];

  if (!segment) {
    return (
      <section className="pt-40 pb-20 bg-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Segment Not Found
          </h1>
          <CTAButton href="/professional">
            Back to Professional Programs
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
              Professional Program
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
              {segment.description.map((p, i) => (
                <p key={i} className="text-gray text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 90-Day Methodology */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full">
                <h3 className="text-lg font-semibold text-white mb-6">
                  90-Day Cycle Includes
                </h3>
                <ul className="space-y-4">
                  {segment.methodology.map((m, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Examples */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Ideal For
                </h3>
                <ul className="space-y-4">
                  {segment.examples.map((e, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center p-12 bg-dark-card rounded-lg border border-gold/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Your Professional Consultation
              </h3>
              <p className="text-gray mb-8 max-w-lg mx-auto">
                Prices are tailored to each case. Every journey begins with a
                private video consultation where we assess your specific needs.
              </p>
              <CTAButton href="/contact">
                Request Professional Consultation
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
