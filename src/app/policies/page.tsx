"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Policies
            </h1>
            <p className="text-gray">Privacy Policy & Terms of Service</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          <AnimatedSection direction="up">
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Privacy Policy
              </h2>
              <div className="space-y-4 text-sm text-gray leading-relaxed">
                <p>
                  At RESET90, we take your privacy seriously. This policy
                  outlines how we collect, use, and protect your personal
                  information.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Information We Collect
                </h3>
                <p>
                  We collect information you provide directly: name, email,
                  phone number, goals, and health-related information shared
                  during consultations. We also collect usage data through
                  cookies and analytics.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  How We Use Your Information
                </h3>
                <p>
                  Your information is used to deliver and personalize your
                  program, communicate with you about your progress, and improve
                  our services. We never sell your personal data to third
                  parties.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Data Protection
                </h3>
                <p>
                  We implement appropriate security measures to protect your
                  personal information. Health-related data is handled with extra
                  care in compliance with applicable regulations.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Your Rights
                </h3>
                <p>
                  You have the right to access, correct, or delete your personal
                  data at any time. Contact us at privacy@reset90.be for any
                  data-related requests.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="bg-dark-card rounded-lg border border-white/5 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Terms of Service
              </h2>
              <div className="space-y-4 text-sm text-gray leading-relaxed">
                <p>
                  By using RESET90 services, you agree to the following terms
                  and conditions.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Program Disclaimer
                </h3>
                <p>
                  RESET90 provides fitness coaching and lifestyle optimization
                  services. We are not a medical provider. Clients with medical
                  conditions must obtain clearance from their healthcare
                  provider before starting any program.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Commitment & Payments
                </h3>
                <p>
                  Programs run on 90-day cycles. Payment terms and refund
                  policies are discussed during your introduction meeting and
                  detailed in your individual agreement.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Intellectual Property
                </h3>
                <p>
                  All RESET90 training plans, materials, and content are
                  proprietary. They may not be shared, reproduced, or
                  distributed without written permission.
                </p>
                <h3 className="text-white font-semibold text-base mt-6">
                  Liability
                </h3>
                <p>
                  RESET90 is not liable for injuries or health issues that may
                  arise during training. Clients participate at their own risk
                  and are responsible for following safe exercise practices.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
