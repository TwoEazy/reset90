"use client";

import { useEffect } from "react";
import Script from "next/script";
import AnimatedSection from "@/components/AnimatedSection";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function ContactPage() {
  const { dict } = useDictionary();
  const t = dict.contact as any;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-dark relative overflow-hidden">
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

      {/* Calendly */}
      <section className="pb-14 sm:pb-20 md:pb-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden"
            data-url="https://calendly.com/reset90project/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=c8a84e"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </section>
    </>
  );
}
