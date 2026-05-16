"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { dict, lang } = useDictionary();
  const t = dict.contact as any;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,168,78,0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              {t.label}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.heroTitle}{" "}
              <span className="text-gradient-gold">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
              {t.heroDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20 md:py-24 bg-dark-light">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection direction="up">
            {submitted ? (
              <div className="text-center p-12 bg-dark-card rounded-lg border border-gold/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.thankYou}
                </h3>
                <p className="text-gray">
                  {t.thankYouDesc}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-dark-card rounded-lg border border-white/5 p-5 sm:p-8 md:p-12 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t.interestedIn}
                  </label>
                  <select
                    required
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  >
                    <option value="">{t.selectProgram}</option>
                    <optgroup label={t.onlinePrograms}>
                      <option>RESET90 Standard</option>
                      <option>RESET90 Advanced</option>
                      <option>RESET90 Premium</option>
                      <option>RESET90 Post-Pregnancy</option>
                      <option>RESET90 Post-Operations</option>
                      <option>RESET90 Reduced Mobility</option>
                    </optgroup>
                    <optgroup label={t.professionalPrograms}>
                      <option>RESET90 Premium Individuals</option>
                      <option>RESET90 Athletes</option>
                      <option>RESET90 Team Sports</option>
                    </optgroup>
                    <option>{t.notSure}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t.yourGoals}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder={t.goalsPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    {t.preferredTime}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder={t.timePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full bg-gold text-dark font-semibold text-sm px-8 py-4 rounded tracking-wider uppercase hover:bg-gold-light transition-all"
                >
                  {t.submitButton}
                </button>

                <p className="text-xs text-white/30 text-center">
                  {t.noCommitment}
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
