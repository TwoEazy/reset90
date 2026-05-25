"use client";

import { useState } from "react";
import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryContext";

const KLAVIYO_LIST_ID = "Wg8H23";

export default function Footer() {
  const { dict, lang } = useDictionary();
  const t = dict.footer as Record<string, string>;
  const nav = dict.nav as Record<string, string>;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const w = window as any;
      if (w.klaviyo) {
        await w.klaviyo.identify({ email });
      }
      setSubscribed(true);
      setEmail("");
    } catch {
      setSubscribed(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest text-gold mb-4">
              RESET90
            </h3>
            <p className="text-sm text-gray leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t.programs}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/${lang}/online`}
                  className="text-sm text-gray hover:text-gold transition-colors"
                >
                  {t.onlineLink}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/professional`}
                  className="text-sm text-gray hover:text-gold transition-colors"
                >
                  {t.professionalLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t.company}
            </h4>
            <ul className="space-y-3">
              {[
                { href: `/${lang}/about`, label: nav.about },
                { href: `/${lang}/faq`, label: nav.faq },
                { href: `/${lang}/contact`, label: nav.contact },
                { href: `/${lang}/policies`, label: "Policies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Capture */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              {t.readyToBegin}
            </h4>
            <p className="text-sm text-gray mb-4">
              {t.readyDesc}
            </p>
            {subscribed ? (
              <p className="text-sm text-gold">Thank you! We&apos;ll be in touch.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-dark-light border border-white/10 rounded px-4 py-2.5 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold bg-gold text-dark font-semibold text-sm px-6 py-2.5 rounded tracking-wider uppercase hover:bg-gold-light transition-all disabled:opacity-50"
                >
                  {submitting ? "..." : t.getStarted}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex gap-6">
            <Link
              href={`/${lang}/policies`}
              className="text-xs text-gray hover:text-gold transition-colors"
            >
              {t.privacyPolicy}
            </Link>
            <Link
              href={`/${lang}/policies`}
              className="text-xs text-gray hover:text-gold transition-colors"
            >
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
