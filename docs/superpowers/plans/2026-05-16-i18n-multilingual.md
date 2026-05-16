# i18n Multilingual Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add multilingual support (English, Arabic, Italian, Spanish, French) using Next.js 16 built-in `[lang]` routing with JSON dictionaries — no external i18n library needed.

**Architecture:** All pages move under `src/app/[lang]/`. A middleware redirects `/` to `/en/`. Each locale has a JSON dictionary. A React context provides translations to client components via a `useDictionary()` hook. Arabic gets RTL `dir="rtl"` on `<html>`.

**Tech Stack:** Next.js 16 App Router, `@formatjs/intl-localematcher`, `negotiator` (for Accept-Language detection in middleware)

---

## File Structure

### New files:
- `src/i18n/config.ts` — locale list, default locale, type exports
- `src/i18n/dictionaries.ts` — dictionary loader (server-only)
- `src/i18n/DictionaryContext.tsx` — React context + provider + hook for client components
- `src/i18n/dictionaries/en.json` — English translations
- `src/i18n/dictionaries/ar.json` — Arabic translations
- `src/i18n/dictionaries/it.json` — Italian translations
- `src/i18n/dictionaries/es.json` — Spanish translations
- `src/i18n/dictionaries/fr.json` — French translations
- `src/middleware.ts` — locale detection & redirect
- `src/components/LanguageSwitcher.tsx` — dropdown to switch languages
- `src/app/[lang]/layout.tsx` — locale-aware root layout
- `src/app/[lang]/page.tsx` — homepage (moved)
- `src/app/[lang]/about/page.tsx` — about (moved)
- `src/app/[lang]/online/page.tsx` — online (moved)
- `src/app/[lang]/online/[slug]/page.tsx` — bundle detail (moved)
- `src/app/[lang]/professional/page.tsx` — professional (moved)
- `src/app/[lang]/professional/[slug]/page.tsx` — segment detail (moved)
- `src/app/[lang]/contact/page.tsx` — contact (moved)
- `src/app/[lang]/faq/page.tsx` — FAQ (moved)
- `src/app/[lang]/policies/page.tsx` — policies (moved)

### Modified files:
- `src/components/Navbar.tsx` — use translations + locale-prefixed links + language switcher
- `src/components/Footer.tsx` — use translations + locale-prefixed links
- `src/components/CTAButton.tsx` — locale-aware href
- `next.config.ts` — no changes needed (App Router handles it)

### Deleted files:
- `src/app/layout.tsx` — replaced by `src/app/[lang]/layout.tsx`
- `src/app/page.tsx` — replaced by `src/app/[lang]/page.tsx`
- All other `src/app/<route>/page.tsx` — replaced by `src/app/[lang]/<route>/page.tsx`

---

### Task 1: Install Dependencies & Create i18n Config

**Files:**
- Create: `src/i18n/config.ts`

- [ ] **Step 1: Install negotiator and intl-localematcher**

```bash
npm install negotiator @formatjs/intl-localematcher
npm install -D @types/negotiator
```

- [ ] **Step 2: Create i18n config**

Create `src/i18n/config.ts`:

```ts
export const locales = ["en", "ar", "it", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const rtlLocales: Locale[] = ["ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  it: "Italiano",
  es: "Español",
  fr: "Français",
};
```

- [ ] **Step 3: Commit**

```bash
git add src/i18n/config.ts package.json package-lock.json
git commit -m "feat: add i18n config and dependencies"
```

---

### Task 2: Create English Dictionary

**Files:**
- Create: `src/i18n/dictionaries/en.json`

This is the master dictionary. All text from every page, component, and data array is extracted here. Other locales will copy this structure.

- [ ] **Step 1: Create the English dictionary**

Create `src/i18n/dictionaries/en.json` with all site text organized by page/component:

```json
{
  "nav": {
    "home": "Home",
    "online": "Online",
    "professional": "Professional",
    "about": "About",
    "faq": "FAQ",
    "contact": "Contact",
    "bookConsultation": "Book A Free Consultation"
  },
  "footer": {
    "tagline": "A precision transformation system built on structured 90-day cycles.",
    "programs": "Programs",
    "onlineLink": "RESET90 Online",
    "professionalLink": "RESET90 Professional",
    "company": "Company",
    "readyToBegin": "Ready to Begin?",
    "readyDesc": "Request your introduction meeting and start your transformation.",
    "getStarted": "Get Started",
    "copyright": "RESET90. All rights reserved.",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service"
  },
  "home": {
    "heroTitle": "A Data-Driven system for",
    "heroTitleHighlight": "performance optimization",
    "onlineCta": "RESET90 Online",
    "professionalCta": "RESET90 Professional",
    "aboutLabel": "Not a training program. A performance system.",
    "aboutTitle": "Performance is not random.",
    "aboutTitleHighlight": "It is engineered.",
    "aboutP1": "RESET90 is a structured performance system designed to optimize output at both the individual and team level. By integrating metabolic profiling, neuromuscular analysis, and targeted intervention cycles, it identifies inefficiencies that directly impact availability, resilience, and repeat performance.",
    "aboutP2": "Over a structured 90-day cycle, athletes are assessed, analyzed, and systematically optimized across the key drivers of performance: energy production, force generation, and resilience under fatigue.",
    "aboutP3": "By integrating metabolic profiling, neuromuscular analysis, and targeted intervention cycles, RESET90 identifies inefficiencies that directly impact availability, recovery, and repeat performance. Each phase follows a clear process: diagnose, correct, and re-measure.",
    "aboutP4": "The result is not temporary improvement. It is controlled, repeatable performance under competitive conditions.",
    "diagnose": "Diagnose",
    "correct": "Correct",
    "prove": "Prove",
    "phase1": "Phase 1",
    "phase2": "Phase 2",
    "phase3": "Phase 3",
    "requestIntro": "Request Introduction Meeting",
    "whyTitle": "Why RESET90",
    "whySubtitle": "The gap between training and performance is where RESET90 operates.",
    "highlights": [
      {
        "label": "The Problem",
        "title": "Performance breaks down under pressure.",
        "description": "Most athletes and teams don't fail because of lack of effort. They fail because of hidden inefficiencies. Late-game drop-offs, recurring injuries, and inconsistent performance are not random. They are the result of unresolved gaps in how the body produces energy, generates force, and responds under fatigue."
      },
      {
        "label": "The System",
        "title": "RESET90 replaces guesswork with structure.",
        "description": "RESET90 is built as a 90-day performance cycle that connects diagnostics, intervention, and re-measurement into one continuous system. By integrating metabolic profiling, neuromuscular analysis, and performance feedback, it identifies exactly where performance breaks down and corrects it with precision."
      },
      {
        "label": "The Difference",
        "title": "Most train harder. Few train smarter.",
        "description": "Traditional training focuses on volume. RESET90 focuses on efficiency. Instead of adding more workload, the system targets what actually limits performance: energy inefficiency, force imbalances, and fatigue-related decline. This creates measurable improvements in availability, repeat performance, and resilience."
      },
      {
        "label": "The Outcome",
        "title": "Performance you can rely on.",
        "description": "RESET90 delivers measurable, repeatable performance under real competitive demands. Athletes sustain higher output, recover faster, and maintain efficiency under fatigue. Teams operate with greater availability, reduced non-contact injuries, and consistent physical performance across the season."
      }
    ],
    "chooseTitle": "Choose Your Path",
    "chooseSubtitle": "Two distinct pathways. One shared commitment to transformation.",
    "onlineLabel": "Online",
    "onlineTitle": "RESET90 Online",
    "onlineDesc": "Six tailored bundles, from Standard to Post-Pregnancy and Reduced Mobility. Train from anywhere, with precision.",
    "onlineFeatures": ["6 specialized bundles", "Video consultations included", "Equipment kit provided", "24/7 email support"],
    "exploreOnline": "Explore Online Programs",
    "proLabel": "Professional",
    "proTitle": "RESET90 Professional",
    "proDesc": "In-person coaching for athletes, teams, and dedicated individuals with advanced testing.",
    "proFeatures": ["Premium Individuals", "Athletes & Fight Prep", "Team Sports Programs", "DEXA & metabolic testing"],
    "explorePro": "Explore Professional",
    "ctaTitle": "Ready to Start Your",
    "ctaTitleHighlight": "Transformation",
    "ctaDesc": "Request your free introduction meeting. No commitment, no pressure. Just a conversation about your goals and how RESET90 can help you achieve them.",
    "ctaButton": "Schedule Your Free Consultation"
  },
  "about": {
    "label": "Our Philosophy",
    "heroTitle": "The RESET90",
    "heroTitleHighlight": "Philosophy",
    "heroDesc": "A precision system that combines physical training, nutrition, and lifestyle optimization into measurable 90-day cycles.",
    "frameworkLabel": "The Framework",
    "why90Title": "Why",
    "why90Highlight": "90 Days",
    "why90P1": "Research shows that meaningful, lasting transformation — both physical and mental — requires sustained effort over time. The 90-day cycle is our proven framework for achieving real, measurable change.",
    "why90P2": "Every RESET90 program is structured around this cycle: assess, plan, execute, measure, and evolve. Whether you're training online or with our professional team, the 90-day structure ensures accountability, progression, and results.",
    "programsLabel": "Programs",
    "bundlesTitle": "Online",
    "bundlesTitleHighlight": "Bundles",
    "bundlesDesc": "Six specialized programs, each designed for specific needs and goals.",
    "bundles": [
      { "name": "Standard", "desc": "Foundation fitness and body recomposition" },
      { "name": "Advanced", "desc": "High-performance training protocols" },
      { "name": "Premium", "desc": "Full-spectrum coaching and testing" },
      { "name": "Post-Pregnancy", "desc": "Safe, progressive return to strength" },
      { "name": "Post-Operations", "desc": "Structured rehabilitation and rebuilding" },
      { "name": "Reduced Mobility", "desc": "Adaptive training for all abilities" }
    ],
    "ctaTitle": "Start Your",
    "ctaTitleHighlight": "Journey",
    "ctaDesc": "Request an introduction meeting to learn how RESET90 can work for you. No commitment — just a conversation about your goals.",
    "ctaButton": "Request Introduction Meeting"
  },
  "online": {
    "label": "Online Programs",
    "heroTitle": "RESET90",
    "heroTitleHighlight": "Online",
    "heroDesc": "Six specialized bundles, each built on our 90-day cycle methodology. Tailored training, nutrition, and lifestyle optimization — delivered remotely with precision.",
    "learnMore": "Learn More",
    "flagship": "Flagship",
    "ctaTitle": "Not Sure Which Bundle?",
    "ctaDesc": "Request a free introduction meeting and we'll help you find the perfect fit for your goals.",
    "ctaButton": "Request Introduction Meeting",
    "bundles": {
      "standard": {
        "title": "RESET90 Standard",
        "description": "Tailored 90-day training & nutrition with bi-weekly video consultations and 24/7 email support.",
        "highlights": ["30-min bi-weekly video consultations", "Lifestyle Optimization System", "24/7 email support", "RESET90 Resistance Band Kit"]
      },
      "advanced": {
        "title": "RESET90 Advanced",
        "description": "Personalized 90-day plan with weekly consultations, multi-channel support, and full equipment kit.",
        "highlights": ["20-min weekly consultations", "Lifestyle Optimization System", "WhatsApp, phone & 24/7 email", "Full Equipment Kit + walking pad"]
      },
      "premium": {
        "title": "RESET90 Premium",
        "description": "The flagship experience. Twice-weekly consultations, priority support, and our complete equipment kit.",
        "highlights": ["30-min twice-weekly consultations", "Lifestyle Optimization System", "Priority WhatsApp & phone", "Full Equipment Kit + walking pad"]
      },
      "postPregnancy": {
        "title": "RESET90 Post-Pregnancy",
        "description": "Gentle-to-progressive plan after childbirth, designed for safe recovery and rebuilding strength.",
        "highlights": ["20-min weekly consultations", "Lifestyle Optimization System", "WhatsApp & phone support", "Equipment Kit + walking pad (low-impact)"]
      },
      "postOperations": {
        "title": "RESET90 Post-Operations",
        "description": "Recovery-aware program post medical clearance. Controlled progression with professional monitoring.",
        "highlights": ["20-min weekly consultations", "Lifestyle Optimization System", "WhatsApp & phone support", "Equipment Kit + walking pad (controlled)"]
      },
      "reducedMobility": {
        "title": "RESET90 Reduced Mobility",
        "description": "Adaptive training system — seated, assisted, or standing. Fully tailored to your capabilities.",
        "highlights": ["20-min weekly consultations", "Lifestyle Optimization System", "WhatsApp & phone support", "RESET90 Fitness Equipment Kit"]
      }
    }
  },
  "onlineDetail": {
    "programLabel": "Online Program",
    "notFound": "Bundle Not Found",
    "backToOnline": "Back to Online Programs",
    "whatsIncluded": "What's Included",
    "consultations": "Consultations",
    "supportChannels": "Support Channels",
    "equipment": "Equipment",
    "readyTitle": "Ready to Get Started?",
    "readyDesc": "Request your free introduction meeting. We'll walk you through the program and answer any questions.",
    "readyButton": "Request Your Introduction Meeting",
    "bundles": {
      "standard": {
        "title": "RESET90 Standard",
        "tagline": "Your foundation for transformation",
        "description": "Tailored 90-day training and nutrition plan with the Lifestyle Optimization System. Perfect for those ready to commit to structured change with professional guidance at every step.",
        "details": ["Personalized 90-day training program", "Custom nutrition plan", "Lifestyle Optimization System (stress, sleep, habits, mindset)", "Progress tracking and program adjustments"],
        "consultations": "30-minute bi-weekly video consultations",
        "support": "24/7 email support",
        "equipment": "RESET90 Resistance Band Kit (no walking pad)"
      },
      "advanced": {
        "title": "RESET90 Advanced",
        "tagline": "Elevated coaching, deeper support",
        "description": "A personalized 90-day plan with weekly consultations and multi-channel support. For those who want closer guidance, faster feedback, and the full RESET90 equipment experience.",
        "details": ["Personalized 90-day training & nutrition plan", "Lifestyle Optimization System", "Weekly progress reviews and plan adjustments", "Multi-channel support for real-time guidance"],
        "consultations": "20-minute weekly video consultations",
        "support": "WhatsApp (working hours), phone (CET), and 24/7 email support",
        "equipment": "RESET90 Fitness Equipment Kit + walking pad"
      },
      "premium": {
        "title": "RESET90 Premium",
        "tagline": "The flagship RESET90 experience",
        "description": "Our most comprehensive online program. Twice-weekly consultations, priority support, and the complete equipment kit. For those who accept nothing less than the best.",
        "details": ["Flagship 90-day training & nutrition program", "Lifestyle Optimization System", "Twice-weekly in-depth progress consultations", "Priority access to your coaching team"],
        "consultations": "30-minute twice-weekly video consultations",
        "support": "Priority WhatsApp & phone support + 24/7 email",
        "equipment": "RESET90 Fitness Equipment Kit + walking pad"
      },
      "post-pregnancy": {
        "title": "RESET90 Post-Pregnancy",
        "tagline": "Rebuild with care and confidence",
        "description": "A gentle-to-progressive plan designed for after childbirth. We prioritize safe recovery, rebuilding core strength, and restoring energy — at your pace, with professional support.",
        "details": ["Gentle-to-progressive 90-day recovery plan", "Postnatal nutrition and energy optimization", "Lifestyle Optimization System", "Core rebuilding and functional movement focus"],
        "consultations": "20-minute weekly video consultations",
        "support": "WhatsApp & phone (CET) + 24/7 email",
        "equipment": "RESET90 Fitness Equipment Kit + walking pad (low-impact cardio)"
      },
      "post-operations": {
        "title": "RESET90 Post-Operations",
        "tagline": "Recovery meets performance",
        "description": "Recovery-aware programming that begins after medical clearance. Controlled progression, professional monitoring, and a structured path back to full strength.",
        "details": ["Recovery-aware 90-day training program", "Post-surgery nutrition strategy", "Lifestyle Optimization System", "Controlled cardio and strength progression"],
        "consultations": "20-minute weekly video consultations",
        "support": "WhatsApp & phone (CET) + 24/7 email",
        "equipment": "RESET90 Fitness Equipment Kit + walking pad (controlled cardio)"
      },
      "reduced-mobility": {
        "title": "RESET90 Reduced Mobility",
        "tagline": "Adaptive. Inclusive. Effective.",
        "description": "An adaptive training system — seated, assisted, or standing. Fully tailored to your capabilities, with the same precision and commitment as every RESET90 program.",
        "details": ["Adaptive 90-day training system", "Modified nutrition and energy strategy", "Lifestyle Optimization System", "Seated, assisted, or standing exercise protocols"],
        "consultations": "20-minute weekly video consultations",
        "support": "WhatsApp & phone (CET) + 24/7 email",
        "equipment": "RESET90 Fitness Equipment Kit (no walking pad)"
      }
    }
  },
  "professional": {
    "label": "Professional Coaching — Worldwide",
    "heroTitle": "RESET90",
    "heroTitleHighlight": "Professional",
    "heroDesc": "Designed for those who treat performance as more than a goal — it's their profession, their discipline, and their standard. Every case begins with a private video consultation.",
    "learnMore": "Learn More",
    "ctaTitle": "Begin Your Professional Journey",
    "ctaDesc": "Prices are tailored to each case. Request a private consultation to discuss your specific needs and goals.",
    "ctaButton": "Request Professional Consultation",
    "segments": {
      "athletes": {
        "title": "Athletes",
        "subtitle": "Compete at the highest level",
        "description": "A one-to-one performance pathway for professionals and aspiring professionals. Whether it's fight prep, seasonal peak, or a comeback — pushing limits while maintaining balance and recovery.",
        "features": ["DEXA scans & metabolic testing", "Personalized nutrition and supplementation", "Mental conditioning for competition pressure", "Performance plan aligned to competition calendars"]
      },
      "teams": {
        "title": "Team Sports",
        "subtitle": "Raise collective standards",
        "description": "A complete framework for clubs and teams. We assess each player individually, then develop a tailored 90-day training cycle that builds stronger, sharper, more cohesive squads.",
        "features": ["Sport-specific strength & conditioning", "Nutrition optimization for energy and recovery", "Mental resilience training under pressure", "Continuous monitoring and adaptation"]
      }
    }
  },
  "professionalDetail": {
    "programLabel": "Professional Program",
    "notFound": "Segment Not Found",
    "backToPro": "Back to Professional Programs",
    "cycleIncludes": "90-Day Cycle Includes",
    "idealFor": "Ideal For",
    "ctaTitle": "Start Your Professional Consultation",
    "ctaDesc": "Prices are tailored to each case. Every journey begins with a private video consultation where we assess your specific needs.",
    "ctaButton": "Request Professional Consultation",
    "segments": {
      "athletes": {
        "title": "RESET90 Athletes",
        "tagline": "Compete. Perform. Dominate.",
        "description": [
          "RESET90 Athletes is for professionals and aspiring professionals competing at the highest level. This is a one-to-one performance pathway, where the same level of testing and analysis applied to teams is focused on a single athlete.",
          "Whether it's fight prep, seasonal peak, or a comeback, RESET90 Athletes is about pushing limits while maintaining balance, recovery, and long-term progression."
        ],
        "methodology": [
          "DEXA scans & metabolic testing to track physiology and recovery capacity",
          "Personalized nutrition and supplementation strategy",
          "Mental conditioning to withstand competition pressure",
          "Performance plan that evolves with competition calendars"
        ],
        "examples": [
          "Fight preparation (boxing, MMA)",
          "Seasonal peak performance",
          "Comeback programs after injury",
          "Athletics and speed sports"
        ]
      },
      "teams": {
        "title": "RESET90 Teams",
        "tagline": "Build stronger, sharper squads",
        "description": [
          "For clubs and teams striving for peak performance, RESET90 Teams provides a complete framework to raise collective standards.",
          "We start by understanding the team's sport, objectives, and current challenges. Each player is assessed individually through detailed performance stats, body composition scans (DEXA), metabolism testing, and functional benchmarks."
        ],
        "methodology": [
          "Sport-specific strength & conditioning",
          "Nutrition optimization for sustained energy and recovery",
          "Mental resilience training to perform under pressure",
          "Continuous monitoring and adaptation"
        ],
        "examples": [
          "Football clubs — seasonal development",
          "Basketball teams — endurance and agility",
          "Rugby squads — strength and conditioning",
          "Any team sport with competitive ambition"
        ]
      }
    }
  },
  "contact": {
    "label": "Contact",
    "heroTitle": "Request Your",
    "heroTitleHighlight": "Introduction",
    "heroDesc": "Fill out the form below and we'll contact you to schedule your video introduction meeting.",
    "thankYou": "Thank You!",
    "thankYouDesc": "We'll contact you shortly to schedule your video introduction meeting. Check your email for confirmation.",
    "fullName": "Full Name *",
    "namePlaceholder": "Your name",
    "email": "Email *",
    "emailPlaceholder": "your@email.com",
    "phone": "Phone Number",
    "phonePlaceholder": "+32 xxx xxx xxx",
    "interestedIn": "I'm Interested In *",
    "selectProgram": "Select a program",
    "onlinePrograms": "Online Programs",
    "professionalPrograms": "Professional Programs",
    "notSure": "Not sure yet — I need guidance",
    "yourGoals": "Your Goals",
    "goalsPlaceholder": "Tell us briefly about your goals and what you're looking for...",
    "preferredTime": "Preferred Time for Meeting",
    "timePlaceholder": "e.g. Weekday evenings, Weekend mornings",
    "submitButton": "Request Introduction Meeting",
    "noCommitment": "No commitment required. We'll contact you to schedule a free video introduction."
  },
  "faq": {
    "label": "FAQ",
    "heroTitle": "Frequently Asked",
    "heroTitleHighlight": "Questions",
    "stillHaveQuestions": "Still Have Questions?",
    "stillDesc": "Request an introduction meeting and we'll answer everything in person.",
    "ctaButton": "Request Introduction Meeting",
    "items": [
      {
        "q": "What is RESET90?",
        "a": "RESET90 is a precision transformation system built on structured 90-day cycles. Each program combines physical training, nutrition, and our Lifestyle Optimization System (stress, sleep, habits, mindset) to deliver measurable, sustainable results."
      },
      {
        "q": "How does the 90-day cycle work?",
        "a": "Each cycle follows a structured framework: assess, plan, execute, measure, and evolve. You start with a consultation, receive a tailored plan, and work through it with regular check-ins and adjustments. After 90 days, you can renew or step up to the next level."
      },
      {
        "q": "What equipment do I need for online programs?",
        "a": "Most online bundles include a RESET90 Fitness Equipment Kit and walking pad. The Standard bundle includes a Resistance Band Kit. The Reduced Mobility bundle does not include a walking pad. All equipment is provided as part of your program."
      },
      {
        "q": "How do consultations work?",
        "a": "Consultations are held via video call. Frequency depends on your bundle: bi-weekly for Standard, weekly for Advanced/Post-Pregnancy/Post-Operations/Reduced Mobility, and twice-weekly for Premium. Each session reviews progress and adjusts your plan."
      },
      {
        "q": "What support is available between consultations?",
        "a": "All bundles include 24/7 email support. Advanced and above include WhatsApp and phone support during CET working hours. Premium members receive priority access across all channels."
      },
      {
        "q": "What is the introduction meeting?",
        "a": "Before committing to any program, you can request a free video introduction meeting with the RESET90 coaching team. It's a no-pressure conversation to understand your goals, explain the program, and ensure alignment."
      },
      {
        "q": "Are prices displayed on the website?",
        "a": "Prices are not emphasized upfront. We prioritize clarity and value first. Pricing is presented during the introduction meeting or at the purchase stage, once you have a clear understanding of the program."
      },
      {
        "q": "What is RESET90 Professional?",
        "a": "RESET90 Professional is our in-person coaching model. It serves athletes, team sports, and premium individuals through hands-on 90-day cycles with advanced testing (DEXA, metabolic) and face-to-face coaching."
      },
      {
        "q": "Is RESET90 suitable for people with medical conditions?",
        "a": "Our Post-Operations and Reduced Mobility programs are designed for recovery and adaptation. However, RESET90 is not a medical program. Post-Operations requires medical clearance before beginning. Always consult your doctor first."
      },
      {
        "q": "Can I switch bundles mid-program?",
        "a": "Yes, adjustments can be discussed during your consultations. We aim for flexibility within the 90-day structure to ensure the program remains aligned with your evolving needs."
      }
    ]
  },
  "policies": {
    "heroTitle": "Policies",
    "heroDesc": "Privacy Policy & Terms of Service",
    "privacyTitle": "Privacy Policy",
    "privacyIntro": "At RESET90, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.",
    "infoCollectTitle": "Information We Collect",
    "infoCollectDesc": "We collect information you provide directly: name, email, phone number, goals, and health-related information shared during consultations. We also collect usage data through cookies and analytics.",
    "howWeUseTitle": "How We Use Your Information",
    "howWeUseDesc": "Your information is used to deliver and personalize your program, communicate with you about your progress, and improve our services. We never sell your personal data to third parties.",
    "dataProtectionTitle": "Data Protection",
    "dataProtectionDesc": "We implement appropriate security measures to protect your personal information. Health-related data is handled with extra care in compliance with applicable regulations.",
    "yourRightsTitle": "Your Rights",
    "yourRightsDesc": "You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@reset90.be for any data-related requests.",
    "tosTitle": "Terms of Service",
    "tosIntro": "By using RESET90 services, you agree to the following terms and conditions.",
    "disclaimerTitle": "Program Disclaimer",
    "disclaimerDesc": "RESET90 provides fitness coaching and lifestyle optimization services. We are not a medical provider. Clients with medical conditions must obtain clearance from their healthcare provider before starting any program.",
    "paymentsTitle": "Commitment & Payments",
    "paymentsDesc": "Programs run on 90-day cycles. Payment terms and refund policies are discussed during your introduction meeting and detailed in your individual agreement.",
    "ipTitle": "Intellectual Property",
    "ipDesc": "All RESET90 training plans, materials, and content are proprietary. They may not be shared, reproduced, or distributed without written permission.",
    "liabilityTitle": "Liability",
    "liabilityDesc": "RESET90 is not liable for injuries or health issues that may arise during training. Clients participate at their own risk and are responsible for following safe exercise practices."
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/dictionaries/en.json
git commit -m "feat: add English translation dictionary"
```

---

### Task 3: Create Other Language Dictionaries

**Files:**
- Create: `src/i18n/dictionaries/ar.json`
- Create: `src/i18n/dictionaries/fr.json`
- Create: `src/i18n/dictionaries/es.json`
- Create: `src/i18n/dictionaries/it.json`

- [ ] **Step 1: Create placeholder dictionaries**

Copy `en.json` to `ar.json`, `fr.json`, `es.json`, and `it.json`. These will initially contain English text as placeholders. The user will provide professional translations later. For now they need the same structure so the site works in all locales.

```bash
cp src/i18n/dictionaries/en.json src/i18n/dictionaries/ar.json
cp src/i18n/dictionaries/en.json src/i18n/dictionaries/fr.json
cp src/i18n/dictionaries/en.json src/i18n/dictionaries/es.json
cp src/i18n/dictionaries/en.json src/i18n/dictionaries/it.json
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/dictionaries/
git commit -m "feat: add placeholder dictionaries for ar, fr, es, it"
```

---

### Task 4: Create Dictionary Loader & Context

**Files:**
- Create: `src/i18n/dictionaries.ts`
- Create: `src/i18n/DictionaryContext.tsx`

- [ ] **Step 1: Create server-side dictionary loader**

Create `src/i18n/dictionaries.ts`:

```ts
import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  ar: () => import("./dictionaries/ar.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
```

- [ ] **Step 2: Create client-side dictionary context**

Create `src/i18n/DictionaryContext.tsx`:

```tsx
"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";

type Dictionary = Record<string, unknown>;

interface DictionaryContextValue {
  dict: Dictionary;
  lang: Locale;
}

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  children,
  dictionary,
  lang,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  lang: Locale;
}) {
  return (
    <DictionaryContext.Provider value={{ dict: dictionary, lang }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): DictionaryContextValue {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("useDictionary must be used within DictionaryProvider");
  return ctx;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/i18n/dictionaries.ts src/i18n/DictionaryContext.tsx
git commit -m "feat: add dictionary loader and React context for i18n"
```

---

### Task 5: Create Middleware for Locale Detection

**Files:**
- Create: `src/middleware.ts`

- [ ] **Step 1: Create the middleware**

Create `src/middleware.ts`:

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { locales, defaultLocale } from "./i18n/config";

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const languages = new Negotiator({ headers }).languages();
  return match(languages, [...locales], defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal paths, static files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files like .png, .ico, etc.
  ) {
    return;
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/middleware.ts
git commit -m "feat: add locale detection middleware"
```

---

### Task 6: Create Language Switcher Component

**Files:**
- Create: `src/components/LanguageSwitcher.tsx`

- [ ] **Step 1: Create the language switcher**

Create `src/components/LanguageSwitcher.tsx`:

```tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useDictionary();

  const switchLocale = (newLocale: Locale) => {
    // Replace current locale prefix with new one
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <select
      value={lang}
      onChange={(e) => switchLocale(e.target.value as Locale)}
      className="bg-transparent border border-gold/30 text-gold text-xs tracking-wider uppercase px-2 py-1.5 rounded cursor-pointer focus:outline-none focus:border-gold/60"
      aria-label="Select language"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale} className="bg-dark text-white">
          {localeNames[locale]}
        </option>
      ))}
    </select>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LanguageSwitcher.tsx
git commit -m "feat: add language switcher component"
```

---

### Task 7: Move Layout Under [lang] and Wire Up i18n

**Files:**
- Create: `src/app/[lang]/layout.tsx`
- Delete: `src/app/layout.tsx`
- Keep: `src/app/globals.css`, `src/app/favicon.ico`, `src/app/icon.svg` in `src/app/`

- [ ] **Step 1: Create the locale-aware layout**

Create `src/app/[lang]/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { locales, rtlLocales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { DictionaryProvider } from "@/i18n/DictionaryContext";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "RESET90 — The Shift Begins",
  description:
    "A precision transformation system built on structured 90-day cycles. Physical conditioning, nutrition, and lifestyle optimization.",
  metadataBase: new URL("https://reset90.be"),
  openGraph: {
    title: "RESET90 — The Shift Begins",
    description:
      "Premium 90-day transformation system. Physical conditioning, nutrition, and lifestyle optimization.",
    siteName: "RESET90",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "RESET90 — The Shift Begins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESET90 — The Shift Begins",
    description:
      "Premium 90-day transformation system. Physical conditioning, nutrition, and lifestyle optimization.",
    images: ["/about.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) notFound();

  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <DictionaryProvider dictionary={dict} lang={locale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </DictionaryProvider>
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Delete the old layout**

```bash
rm src/app/layout.tsx
```

Note: Keep `src/app/globals.css`, `src/app/favicon.ico`, and `src/app/icon.svg` where they are — the new layout imports globals.css via `../globals.css`.

- [ ] **Step 3: Commit**

```bash
git add src/app/[lang]/layout.tsx
git rm src/app/layout.tsx
git commit -m "feat: move layout under [lang] with i18n context"
```

---

### Task 8: Update Navbar to Use Translations

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar with i18n**

Replace the entire `src/components/Navbar.tsx` with:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/i18n/DictionaryContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict, lang } = useDictionary();
  const t = dict.nav as Record<string, string>;

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/online`, label: t.online },
    { href: `/${lang}/professional`, label: t.professional },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/faq`, label: t.faq },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gold/20"
          : "bg-dark/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full px-6 lg:px-8 xl:px-16 2xl:px-24 flex items-center justify-between h-20 xl:h-24">
        <Link href={`/${lang}`} className="flex items-center group flex-shrink-0">
          <Image
            src="/logoreset90.png"
            alt="RESET90 Logo"
            width={320}
            height={120}
            className="xl:w-[380px] xl:h-[140px] object-contain"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden lg:flex flex-1 justify-center mx-4 xl:mx-8">
          <div className="flex items-center gap-4 xl:gap-8 2xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-[15px] 2xl:text-base font-medium tracking-wider uppercase text-white/80 hover:text-gold transition-colors duration-300 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={`/${lang}/contact`}
            className="btn-gold bg-gold text-dark font-bold text-xs xl:text-[15px] 2xl:text-base px-5 xl:px-8 2xl:px-10 py-3 xl:py-3.5 2xl:py-4 rounded-md tracking-wider uppercase hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all flex-shrink-0 whitespace-nowrap"
          >
            {t.bookConsultation}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-2 p-3"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            className="block w-7 h-[2px] bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-7 h-[2px] bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            className="block w-7 h-[2px] bg-gold"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-7 py-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium tracking-wider uppercase text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileOpen(false)}
                className="btn-gold bg-gold text-dark font-bold text-sm px-8 py-4 rounded-md tracking-wider uppercase mt-2 w-[80%] text-center"
              >
                {t.bookConsultation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: update Navbar with i18n translations and language switcher"
```

---

### Task 9: Update Footer to Use Translations

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Rewrite Footer with i18n**

Replace `src/components/Footer.tsx` with:

```tsx
"use client";

import Link from "next/link";
import { useDictionary } from "@/i18n/DictionaryContext";

export default function Footer() {
  const { dict, lang } = useDictionary();
  const t = dict.footer as Record<string, string>;

  const companyLinks = [
    { href: `/${lang}/about`, label: (dict.nav as Record<string, string>).about },
    { href: `/${lang}/faq`, label: (dict.nav as Record<string, string>).faq },
    { href: `/${lang}/contact`, label: (dict.nav as Record<string, string>).contact },
    { href: `/${lang}/policies`, label: "Policies" },
  ];

  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest text-gold mb-4">RESET90</h3>
            <p className="text-sm text-gray leading-relaxed">{t.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">{t.programs}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/online`} className="text-sm text-gray hover:text-gold transition-colors">
                  {t.onlineLink}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/professional`} className="text-sm text-gray hover:text-gold transition-colors">
                  {t.professionalLink}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">{t.company}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">{t.readyToBegin}</h4>
            <p className="text-sm text-gray mb-6">{t.readyDesc}</p>
            <Link
              href={`/${lang}/contact`}
              className="btn-gold inline-block bg-gold text-dark font-semibold text-sm px-6 py-2.5 rounded tracking-wider uppercase hover:bg-gold-light transition-all"
            >
              {t.getStarted}
            </Link>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex gap-6">
            <Link href={`/${lang}/policies`} className="text-xs text-gray hover:text-gold transition-colors">
              {t.privacyPolicy}
            </Link>
            <Link href={`/${lang}/policies`} className="text-xs text-gray hover:text-gold transition-colors">
              {t.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update Footer with i18n translations"
```

---

### Task 10: Update CTAButton for Locale-Aware Links

**Files:**
- Modify: `src/components/CTAButton.tsx`

- [ ] **Step 1: No changes needed to CTAButton**

CTAButton receives `href` as a prop from parent components. The parent pages will pass locale-prefixed hrefs (e.g., `/${lang}/contact`). CTAButton itself stays generic and unchanged.

No action required for this task.

---

### Task 11: Move All Pages Under [lang] with i18n

This is the largest task. Each page moves from `src/app/<route>/page.tsx` to `src/app/[lang]/<route>/page.tsx` and is updated to use dictionary translations.

**Key pattern for every page:**
1. The page file becomes a **server component** wrapper that loads the dictionary and passes it to a client component
2. OR the page stays as `"use client"` and uses the `useDictionary()` hook (simpler since the context is already provided by the layout)

Since the layout already wraps everything in `DictionaryProvider`, all client pages can just use `useDictionary()`. This is the simpler approach.

**Files to move and update (all use same pattern — add `useDictionary()` and replace hardcoded text):**

- [ ] **Step 1: Move homepage**

Move `src/app/page.tsx` to `src/app/[lang]/page.tsx`. Update all hardcoded text to use `useDictionary()`. Update all internal `href` values to include `/${lang}/` prefix.

Key changes:
- Add `import { useDictionary } from "@/i18n/DictionaryContext";`
- Add `const { dict, lang } = useDictionary();` at top of component
- Replace all hardcoded strings with dictionary lookups
- Replace all `href="/online"` with `href={\`/${lang}/online\`}` etc.

- [ ] **Step 2: Move about page**

Move `src/app/about/page.tsx` to `src/app/[lang]/about/page.tsx`. Same pattern.

- [ ] **Step 3: Move online page**

Move `src/app/online/page.tsx` to `src/app/[lang]/online/page.tsx`. Same pattern.

- [ ] **Step 4: Move online detail page**

Move `src/app/online/[slug]/page.tsx` to `src/app/[lang]/online/[slug]/page.tsx`. Same pattern.

- [ ] **Step 5: Move professional page**

Move `src/app/professional/page.tsx` to `src/app/[lang]/professional/page.tsx`. Same pattern.

- [ ] **Step 6: Move professional detail page**

Move `src/app/professional/[slug]/page.tsx` to `src/app/[lang]/professional/[slug]/page.tsx`. Same pattern.

- [ ] **Step 7: Move contact page**

Move `src/app/contact/page.tsx` to `src/app/[lang]/contact/page.tsx`. Same pattern.

- [ ] **Step 8: Move FAQ page**

Move `src/app/faq/page.tsx` to `src/app/[lang]/faq/page.tsx`. Same pattern.

- [ ] **Step 9: Move policies page**

Move `src/app/policies/page.tsx` to `src/app/[lang]/policies/page.tsx`. Same pattern.

- [ ] **Step 10: Delete old page files**

```bash
rm src/app/page.tsx
rm -rf src/app/about src/app/online src/app/professional src/app/contact src/app/faq src/app/policies
```

- [ ] **Step 11: Commit**

```bash
git add src/app/[lang]/ 
git rm -r src/app/page.tsx src/app/about src/app/online src/app/professional src/app/contact src/app/faq src/app/policies
git commit -m "feat: move all pages under [lang] with i18n translations"
```

---

### Task 12: Verify Build & Test

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Test locale routing**

Start dev server and verify:
- `/` redirects to `/en/`
- `/en/` shows English homepage
- `/ar/` shows Arabic homepage with `dir="rtl"` on `<html>`
- `/fr/online` shows online page
- Language switcher works to switch between locales
- All internal links are locale-prefixed

- [ ] **Step 3: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build issues from i18n migration"
```
