"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";

const highlights = [
  {
    title: "90-Day Cycles",
    description:
      "Every program runs on a structured 90-day cycle, designed for measurable transformation and sustainable results.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    image: images.gymInterior,
  },
  {
    title: "Precision Coaching",
    description:
      "Tailored training, nutrition, and lifestyle optimization — no generic plans. Every detail is built around you.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    image: images.strengthTraining,
  },
  {
    title: "Lifestyle Optimization",
    description:
      "Beyond training. We integrate stress management, sleep, habits, and mindset into every program.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    image: images.nutrition,
  },
  {
    title: "Measurable Results",
    description:
      "Advanced testing, body composition scans, and continuous monitoring ensure every step forward is tracked.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
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
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        </div>

        <Container className="relative z-10">
          <div className="py-32 lg:py-40 max-w-3xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold font-semibold tracking-[0.25em] uppercase text-sm md:text-base mb-6">
                Premium Transformation System
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-white">Precision</span>
              <br />
              <span className="text-white">Fitness &</span>
              <br />
              <span className="text-white">Coaching for</span>
              <br />
              <span className="text-gradient-gold">Real Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10"
            >
              Personalized 90-Day Training & Nutrition Cycles That Deliver
              Lasting Transformation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-7 h-12 rounded-full border-2 border-gold/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-gold/60" />
          </motion.div>
        </motion.div>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 2 — ABOUT ══════════ */}
      <section className="py-28 md:py-36 bg-[#0d0d0d]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                About the Program
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Precision Transformation in{" "}
                <span className="text-gradient-gold">90 Days</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                RESET90 is not a generic fitness program. It is a precision
                system that combines physical training, nutrition, and lifestyle
                optimization into measurable 90-day cycles.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Whether online or professional, RESET90 is designed for people
                who value commitment, clarity, and transformation above all
                else. Each program integrates our signature Lifestyle
                Optimization System — covering stress management, sleep, habits,
                and mindset.
              </p>
              <CTAButton href="/contact">
                Request Introduction Meeting
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Gold accent frame */}
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-gold/30 rounded-lg" />
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-gold/10">
                  <Image
                    src={images.aboutTraining}
                    alt="Personal training session"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-dark/80 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/10">
                          <span className="text-2xl font-bold text-gradient-gold">90</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold">Day Cycles</p>
                          <p className="text-sm text-white/50">Structured transformation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 3 — WHY RESET90 ══════════ */}
      <section className="py-28 md:py-36 bg-[#080808]">
        <Container>
          <SectionHeading
            title="Why RESET90"
            subtitle="Four pillars that define every program we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15} className="w-full max-w-sm">
                <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full hover:-translate-y-1 overflow-hidden shadow-lg shadow-black/30">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center text-gold border border-gold/20">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-6 bg-[#111]">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionSeparator />

      {/* ══════════ SECTION 4 — CHOOSE YOUR PATH ══════════ */}
      <section className="py-28 md:py-36 bg-[#0d0d0d]">
        <Container>
          <SectionHeading
            title="Choose Your Path"
            subtitle="Two distinct pathways — one shared commitment to transformation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Online */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="group relative rounded-lg border border-gold/10 hover:border-gold/30 transition-all duration-500 h-full flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg shadow-black/30">
                <div className="relative h-64 overflow-hidden">
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
                <div className="flex-1 p-8 md:p-10 bg-[#111]">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">RESET90 Online</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8">
                    Six tailored bundles — from Standard to Post-Pregnancy and Reduced Mobility. Train from anywhere, with precision.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {["6 specialized bundles", "Video consultations included", "Equipment kit provided", "24/7 email support"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60">
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
                <div className="relative h-64 overflow-hidden">
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
                <div className="flex-1 p-8 md:p-10 bg-[#111]">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">RESET90 Professional</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8">
                    In-person coaching in Belgium for athletes, teams, and dedicated individuals with advanced testing.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {["Premium Individuals", "Athletes & Fight Prep", "Team Sports Programs", "DEXA & metabolic testing"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60">
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
      <section className="relative py-28 md:py-36 overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your{" "}
                <span className="text-gradient-gold">Transformation</span>?
              </h2>
              <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-12">
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
