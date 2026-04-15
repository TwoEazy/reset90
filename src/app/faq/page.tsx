"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const faqs = [
  {
    q: "What is RESET90?",
    a: "RESET90 is a precision transformation system built on structured 90-day cycles. Each program combines physical training, nutrition, and our Lifestyle Optimization System (stress, sleep, habits, mindset) to deliver measurable, sustainable results.",
  },
  {
    q: "How does the 90-day cycle work?",
    a: "Each cycle follows a structured framework: assess, plan, execute, measure, and evolve. You start with a consultation, receive a tailored plan, and work through it with regular check-ins and adjustments. After 90 days, you can renew or step up to the next level.",
  },
  {
    q: "What equipment do I need for online programs?",
    a: "Most online bundles include a RESET90 Fitness Equipment Kit and walking pad. The Standard bundle includes a Resistance Band Kit. The Reduced Mobility bundle does not include a walking pad. All equipment is provided as part of your program.",
  },
  {
    q: "How do consultations work?",
    a: "Consultations are held via video call. Frequency depends on your bundle: bi-weekly for Standard, weekly for Advanced/Post-Pregnancy/Post-Operations/Reduced Mobility, and twice-weekly for Premium. Each session reviews progress and adjusts your plan.",
  },
  {
    q: "What support is available between consultations?",
    a: "All bundles include 24/7 email support. Advanced and above include WhatsApp and phone support during CET working hours. Premium members receive priority access across all channels.",
  },
  {
    q: "What is the introduction meeting?",
    a: "Before committing to any program, you can request a free video introduction meeting with the RESET90 coaching team. It's a no-pressure conversation to understand your goals, explain the program, and ensure alignment.",
  },
  {
    q: "Are prices displayed on the website?",
    a: "Prices are not emphasized upfront. We prioritize clarity and value first. Pricing is presented during the introduction meeting or at the purchase stage, once you have a clear understanding of the program.",
  },
  {
    q: "What is RESET90 Professional?",
    a: "RESET90 Professional is our in-person coaching model based in Belgium. It serves athletes, team sports, and premium individuals through hands-on 90-day cycles with advanced testing (DEXA, metabolic) and face-to-face coaching.",
  },
  {
    q: "Is RESET90 suitable for people with medical conditions?",
    a: "Our Post-Operations and Reduced Mobility programs are designed for recovery and adaptation. However, RESET90 is not a medical program. Post-Operations requires medical clearance before beginning. Always consult your doctor first.",
  },
  {
    q: "Can I switch bundles mid-program?",
    a: "Yes, adjustments can be discussed during your consultations. We aim for flexibility within the 90-day structure to ensure the program remains aligned with your evolving needs.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-gold transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gold text-xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              FAQ
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-gradient-gold">Questions</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray text-lg mb-10">
              Request an introduction meeting and we&apos;ll answer everything
              in person.
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
