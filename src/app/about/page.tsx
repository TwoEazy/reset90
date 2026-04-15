"use client";

import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

const bundles = [
  "Standard",
  "Advanced",
  "Premium",
  "Post-Pregnancy",
  "Post-Operations",
  "Reduced Mobility",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              About
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The RESET90 <span className="text-gradient-gold">Philosophy</span>
            </h1>
            <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
              A precision system that combines physical training, nutrition, and
              lifestyle optimization into measurable 90-day cycles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <AnimatedSection direction="up">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Why 90 Days?
              </h2>
              <p className="text-gray text-lg leading-relaxed mb-4">
                Research shows that meaningful, lasting transformation — both
                physical and mental — requires sustained effort over time. The
                90-day cycle is our proven framework for achieving real,
                measurable change.
              </p>
              <p className="text-gray text-lg leading-relaxed">
                Every RESET90 program is structured around this cycle: assess,
                plan, execute, measure, and evolve. Whether you&apos;re training
                online or with our professional team in Belgium, the 90-day
                structure ensures accountability, progression, and results.
              </p>
            </AnimatedSection>

            <div className="section-divider" />

            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Lifestyle Optimization System
              </h2>
              <p className="text-gray text-lg leading-relaxed mb-4">
                RESET90 goes beyond training and nutrition. Every program
                includes our Lifestyle Optimization System, a holistic framework
                that addresses the full picture of transformation:
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Stress management and recovery protocols",
                  "Sleep optimization for performance and health",
                  "Habit architecture — building routines that stick",
                  "Mindset coaching for discipline and resilience",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <div className="section-divider" />

            <AnimatedSection direction="up" delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Online Bundles
              </h2>
              <p className="text-gray text-lg leading-relaxed mb-6">
                Six specialized programs, each designed for specific needs and
                goals:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {bundles.map((b, i) => (
                  <div
                    key={i}
                    className="p-4 bg-dark-card rounded-lg border border-white/5 text-center"
                  >
                    <p className="text-sm font-medium text-white">
                      RESET90 {b}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Journey
            </h2>
            <p className="text-gray text-lg mb-10">
              Request an introduction meeting to learn more about how RESET90
              can work for you.
            </p>
            <CTAButton href="/contact">
              Request Introduction Meeting
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
