"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { images } from "@/lib/images";

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.gymInterior}
            alt="Gym"
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
              The Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Your <span className="text-gradient-gold">Coach</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Real experience. Real results. Guided by science, driven by
              discipline, and committed to your transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coach Profile */}
      <section className="py-24 bg-dark-light">
        <div className="max-w-[1000px] mx-auto px-8">
          <AnimatedSection direction="up">
            <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg border border-white/5 hover:border-gold/20 transition-all duration-500 overflow-hidden">
              {/* Coach image — replace /riyad.png with your own photo */}
              <div className="relative h-[400px] md:h-auto md:min-h-[500px] overflow-hidden bg-dark flex items-center justify-center">
                <Image
                  src="/riyad.png"
                  alt="Riyad Alssed"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              {/* Coach info */}
              <div className="p-10 md:p-14 bg-dark-card flex flex-col justify-center">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                  Head Coach & Founder
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Riyad Alssed
                </h2>
                <p className="text-gold/70 text-lg mb-6">
                  Personal Trainer & Boxing Coach
                </p>
                <p className="text-white/50 leading-relaxed mb-6">
                  A seasoned personal trainer and boxing coach who guides with
                  results and science. Riyad brings years of hands-on experience
                  in strength & conditioning, fight preparation, and body
                  transformation — combining proven training methodologies with a
                  deep understanding of nutrition and recovery.
                </p>
                <p className="text-white/50 leading-relaxed mb-8">
                  His approach is built on precision, accountability, and a
                  relentless commitment to helping every client reach their full
                  potential — whether they&apos;re stepping into the ring, rebuilding
                  after injury, or transforming their lifestyle from the ground up.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Strength & Conditioning",
                    "Boxing",
                    "Nutrition Science",
                    "Body Transformation",
                    "Fight Preparation",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium tracking-wider uppercase text-gold/80 bg-gold/10 border border-gold/15 px-3 py-1.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CTAButton href="/contact">
                  Book Introduction with Riyad
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Train with Riyad?
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Book your introduction meeting and start your 90-day
              transformation journey.
            </p>
            <CTAButton href="/contact" size="large">
              Book Introduction
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
