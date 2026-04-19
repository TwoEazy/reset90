"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";

const highlights = [
  {
    label: "The Problem",
    title: "Performance breaks down under pressure.",
    description:
      "Most athletes and teams don't fail because of lack of effort — they fail because of hidden inefficiencies. Late-game drop-offs, recurring injuries, and inconsistent performance are not random. They are the result of unresolved gaps in how the body produces energy, generates force, and responds under fatigue.",
    image: images.gymInterior,
  },
  {
    label: "The System",
    title: "RESET90 replaces guesswork with structure.",
    description:
      "RESET90 is built as a 90-day performance cycle that connects diagnostics, intervention, and re-measurement into one continuous system. By integrating metabolic profiling, neuromuscular analysis, and performance feedback, it identifies exactly where performance breaks down — and corrects it with precision.",
    image: images.strengthTraining,
  },
  {
    label: "The Difference",
    title: "Most train harder. Few train smarter.",
    description:
      "Traditional training focuses on volume. RESET90 focuses on efficiency. Instead of adding more workload, the system targets what actually limits performance — energy inefficiency, force imbalances, and fatigue-related decline. This creates measurable improvements in availability, repeat performance, and resilience.",
    image: images.nutrition,
  },
  {
    label: "The Outcome",
    title: "Performance you can rely on.",
    description:
      "RESET90 delivers measurable, repeatable performance under real competitive demands. Athletes sustain higher output, recover faster, and maintain efficiency under fatigue. Teams operate with greater availability, reduced non-contact injuries, and consistent physical performance across the season.",
    image: images.cardio,
  },
];

/* Centered container used by every section */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[90%] max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

function SectionSeparator() {
  return <div className="section-separator" />;
}

export default function Home() {
  return (
    <>
      {/* ══════════ SECTION 1 — HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroMain}
            alt="Gym training"
            fill
            className="object-cover scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(200,168,78,0.06)_0%,_transparent_50%)]" />
          {/* Noise grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
        </div>

        <Container className="relative z-10">
          <div className="py-24 sm:py-32 lg:py-40 max-w-3xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight mb-6 sm:mb-8"
            >
              A data-driven system for{" "}
              <span className="text-gradient-gold">performance optimization</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Most athletes train harder. We make athletes perform better when it matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton href="/online" size="large">
                RESET90 Online
              </CTAButton>
              <CTAButton href="/professional" variant="outline" size="large">
                RESET90 Professional
              </CTAButton>
            </motion.div>
          </div>
        </Container>
        </section>

      {/* ══════════ SECTION 2 — ABOUT ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#0d0d0d] relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_rgba(200,168,78,0.03)_0%,_transparent_60%)]" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 xl:gap-24 items-center">
            <AnimatedSection direction="left">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4">
                Not a training program — a performance system
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-7 leading-tight">
                Performance is not random.{" "}
                <span className="text-gradient-gold">It is engineered.</span>
              </h2>
              <div className="space-y-4 text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                <p>
                  RESET90 is a structured performance system designed to optimize output at both the individual and team level. By integrating metabolic profiling, neuromuscular analysis, and targeted intervention cycles, it identifies inefficiencies that directly impact availability, resilience, and repeat performance.
                 </p> <p>Over a structured 90-day cycle, athletes are assessed, analyzed, and systematically optimized across the key drivers of performance — energy production, force generation, and resilience under fatigue.
                </p>
                <p>
                  By integrating metabolic profiling, neuromuscular analysis, and targeted intervention cycles, RESET90 identifies inefficiencies that directly impact availability, recovery, and repeat performance. Each phase follows a clear process: diagnose, correct, and re-measure.
                </p>
                <p className="text-white/65 font-medium">
                  The result is not temporary improvement — it is controlled, repeatable performance under competitive conditions.
                </p>
              </div>

              {/* Inline stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 sm:mb-10">
                {[
                  { value: "Diagnose", desc: "Phase 1" },
                  { value: "Correct", desc: "Phase 2" },
                  { value: "Prove", desc: "Phase 3" },
                ].map((s, i) => (
                  <div key={i} className="border-t border-gold/20 pt-3">
                    <p className="text-sm sm:text-base font-bold text-white">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-white/35 tracking-wider uppercase mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>

              <CTAButton href="/contact">
                Request Introduction Meeting
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none pt-3 pr-3">
                {/* Gold accent frame */}
                <div className="absolute top-0 right-0 w-[calc(100%-0.75rem)] h-[calc(100%-0.75rem)] border-2 border-gold/20 rounded-lg" />
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gold/10">
                  <Image
                    src={images.aboutTraining}
                    alt="Personal training session"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 3 — WHY RESET90 ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#080808]">
        <Container>
          <SectionHeading
            title="Why RESET90"
            subtitle="The gap between training and performance is where RESET90 operates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15} className="w-full max-w-sm">
                <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full hover:-translate-y-1 overflow-hidden shadow-lg shadow-black/30 flex flex-col">
                  <div className="relative h-28 sm:h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-6 bg-[#111] flex-1">
                    <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-1.5 sm:mb-2">{item.label}</p>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-3 leading-snug">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 4 — CHOOSE YOUR PATH ══════════ */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-[#0d0d0d]">
        <Container>
          <SectionHeading
            title="Choose Your Path"
            subtitle="Two distinct pathways — one shared commitment to transformation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            {/* Online */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/30">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={images.cardio}
                    alt="Online training"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">Online</p>
                  </div>
                </div>
                <div className="flex-1 p-6 sm:p-8 md:p-10 bg-[#111]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">RESET90 Online</h3>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    Six tailored bundles — from Standard to Post-Pregnancy and Reduced Mobility. Train from anywhere, with precision.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {["6 specialized bundles", "Video consultations included", "Equipment kit provided", "24/7 email support"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-white/60">
                        <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CTAButton href="/online">Explore Online Programs</CTAButton>
                </div>
              </div>
            </AnimatedSection>

            {/* Professional */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/30">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={images.boxing}
                    alt="Professional coaching"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold">Professional</p>
                  </div>
                </div>
                <div className="flex-1 p-6 sm:p-8 md:p-10 bg-[#111]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5">RESET90 Professional</h3>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    In-person coaching in Belgium for athletes, teams, and dedicated individuals with advanced testing.
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    {["Premium Individuals", "Athletes & Fight Prep", "Team Sports Programs", "DEXA & metabolic testing"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-white/60">
                        <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CTAButton href="/professional" variant="outline">Explore Professional</CTAButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 5 — CTA BANNER ══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.transformation}
            alt="Transformation"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.1)_0%,_transparent_60%)]" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Ready to Start Your{" "}
                <span className="text-gradient-gold">Transformation</span>?
              </h2>
              <p className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
                Request your free introduction meeting. No commitment, no
                pressure — just a conversation about your goals and how RESET90
                can help you achieve them.
              </p>
              <CTAButton href="/contact" size="large">
                Schedule Your Free Consultation
              </CTAButton>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
