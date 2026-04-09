"use client";

import { useParams } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const bundleData: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string;
    details: string[];
    consultations: string;
    support: string;
    equipment: string;
  }
> = {
  standard: {
    title: "RESET90 Standard",
    tagline: "Your foundation for transformation",
    description:
      "Tailored 90-day training and nutrition plan with the Lifestyle Optimization System. Perfect for those ready to commit to structured change with professional guidance at every step.",
    details: [
      "Personalized 90-day training program",
      "Custom nutrition plan",
      "Lifestyle Optimization System (stress, sleep, habits, mindset)",
      "Progress tracking and program adjustments",
    ],
    consultations: "30-minute bi-weekly video consultations",
    support: "24/7 email support",
    equipment: "RESET90 Resistance Band Kit (no walking pad)",
  },
  advanced: {
    title: "RESET90 Advanced",
    tagline: "Elevated coaching, deeper support",
    description:
      "A personalized 90-day plan with weekly consultations and multi-channel support. For those who want closer guidance, faster feedback, and the full RESET90 equipment experience.",
    details: [
      "Personalized 90-day training & nutrition plan",
      "Lifestyle Optimization System",
      "Weekly progress reviews and plan adjustments",
      "Multi-channel support for real-time guidance",
    ],
    consultations: "20-minute weekly video consultations",
    support: "WhatsApp (working hours), phone (CET), and 24/7 email support",
    equipment: "RESET90 Fitness Equipment Kit + walking pad",
  },
  premium: {
    title: "RESET90 Premium",
    tagline: "The flagship RESET90 experience",
    description:
      "Our most comprehensive online program. Twice-weekly consultations, priority support, and the complete equipment kit. For those who accept nothing less than the best.",
    details: [
      "Flagship 90-day training & nutrition program",
      "Lifestyle Optimization System",
      "Twice-weekly in-depth progress consultations",
      "Priority access to your coaching team",
    ],
    consultations: "30-minute twice-weekly video consultations",
    support: "Priority WhatsApp & phone support + 24/7 email",
    equipment: "RESET90 Fitness Equipment Kit + walking pad",
  },
  "post-pregnancy": {
    title: "RESET90 Post-Pregnancy",
    tagline: "Rebuild with care and confidence",
    description:
      "A gentle-to-progressive plan designed for after childbirth. We prioritize safe recovery, rebuilding core strength, and restoring energy — at your pace, with professional support.",
    details: [
      "Gentle-to-progressive 90-day recovery plan",
      "Postnatal nutrition and energy optimization",
      "Lifestyle Optimization System",
      "Core rebuilding and functional movement focus",
    ],
    consultations: "20-minute weekly video consultations",
    support: "WhatsApp & phone (CET) + 24/7 email",
    equipment: "RESET90 Fitness Equipment Kit + walking pad (low-impact cardio)",
  },
  "post-operations": {
    title: "RESET90 Post-Operations",
    tagline: "Recovery meets performance",
    description:
      "Recovery-aware programming that begins after medical clearance. Controlled progression, professional monitoring, and a structured path back to full strength.",
    details: [
      "Recovery-aware 90-day training program",
      "Post-surgery nutrition strategy",
      "Lifestyle Optimization System",
      "Controlled cardio and strength progression",
    ],
    consultations: "20-minute weekly video consultations",
    support: "WhatsApp & phone (CET) + 24/7 email",
    equipment: "RESET90 Fitness Equipment Kit + walking pad (controlled cardio)",
  },
  "reduced-mobility": {
    title: "RESET90 Reduced Mobility",
    tagline: "Adaptive. Inclusive. Effective.",
    description:
      "An adaptive training system — seated, assisted, or standing. Fully tailored to your capabilities, with the same precision and commitment as every RESET90 program.",
    details: [
      "Adaptive 90-day training system",
      "Modified nutrition and energy strategy",
      "Lifestyle Optimization System",
      "Seated, assisted, or standing exercise protocols",
    ],
    consultations: "20-minute weekly video consultations",
    support: "WhatsApp & phone (CET) + 24/7 email",
    equipment: "RESET90 Fitness Equipment Kit (no walking pad)",
  },
};

export default function BundleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const bundle = bundleData[slug];

  if (!bundle) {
    return (
      <section className="pt-40 pb-20 bg-dark min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Bundle Not Found
          </h1>
          <CTAButton href="/online">Back to Online Programs</CTAButton>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Online Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {bundle.title}
            </h1>
            <p className="text-xl text-gold/80 tracking-wide">
              {bundle.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection direction="up">
            <p className="text-gray text-lg leading-relaxed mb-12">
              {bundle.description}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* What's included */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full">
                <h3 className="text-lg font-semibold text-white mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {bundle.details.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Support Details */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="p-8 bg-dark-card rounded-lg border border-white/5 h-full space-y-8">
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    Consultations
                  </h4>
                  <p className="text-sm text-white/70">{bundle.consultations}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    Support Channels
                  </h4>
                  <p className="text-sm text-white/70">{bundle.support}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-3">
                    Equipment
                  </h4>
                  <p className="text-sm text-white/70">{bundle.equipment}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="text-center p-12 bg-dark-card rounded-lg border border-gold/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray mb-8 max-w-lg mx-auto">
                Request your free introduction meeting. We&apos;ll walk you
                through the program and answer any questions.
              </p>
              <CTAButton href="/contact">
                Request Your Introduction Meeting
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
