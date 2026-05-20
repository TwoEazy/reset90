"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function NotFound() {
  const { dict, lang } = useDictionary();
  const t = dict.notFound as {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    backHome: string;
    backHomeSub: string;
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,168,78,0.04)_0%,_transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[20rem] sm:text-[28rem] md:text-[36rem] font-bold text-white/[0.02] leading-none tracking-tighter">
          404
        </span>
      </div>

      <div className="relative z-10 w-[90%] max-w-[600px] mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-gold/60 mb-6"
        >
          {t.label}
        </motion.p>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-line mx-auto mb-8"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
        >
          {t.title}{" "}
          <span className="text-gradient-gold">{t.titleHighlight}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/40 text-base sm:text-lg leading-relaxed mb-12 max-w-md mx-auto"
        >
          {t.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link
            href={`/${lang}`}
            className="btn-gold inline-block font-bold tracking-wider uppercase text-xs sm:text-sm px-8 sm:px-12 py-3.5 sm:py-4 rounded-md bg-gold text-dark hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25 hover:scale-[1.02] transition-all duration-400"
          >
            {t.backHome}
          </Link>
          <p className="text-white/25 text-xs tracking-wide mt-4 uppercase">
            {t.backHomeSub}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
