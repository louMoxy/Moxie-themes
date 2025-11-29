import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';
import {
  Calendar,
  CheckCircle,
  Rocket,
  ShoppingCart,
  Square,
  Code2,
  Sparkles,
  MonitorSmartphone,
  Search,
  Share2,
  Wand2,
  FileDown,
  LayoutTemplate
} from 'lucide-react';

const processSteps = [
  {
    day: 'Day 1',
    title: 'Kickoff + Clarity Call',
    details: [
      'Confirm platform, goals, required pages, and add-ons',
      'Review brand assets, copy, and imagery',
      'Lock in deliverables so we can move fast'
    ]
  },
  {
    day: 'Day 2',
    title: 'Design Direction',
    details: [
      'Create layout options and visual direction',
      'You approve the vibe',
      'Build begins immediately'
    ]
  },
  {
    day: 'Days 3–5',
    title: 'Build + SEO Setup',
    details: [
      'Build every page and section',
      'Implement navigation, forms, and integrations',
      'Optimise for SEO, speed, and accessibility'
    ]
  },
  {
    day: 'Day 6',
    title: 'Feedback + Tweaks',
    details: [
      'You review the full site',
      'We refine copy, visuals, and flow',
      'Final polish on every detail'
    ]
  },
  {
    day: 'Day 7',
    title: 'Launch Day',
    details: [
      'Publish the site and run through QA',
      'Handover pack + walkthrough video',
      'You keep the “launched in 7 days” bragging rights'
    ]
  }
];

const platformOptions = [
  {
    id: 'shopify',
    title: 'Shopify',
    icon: ShoppingCart,
    description: 'Clean, sales-ready storefronts for product-based brands.'
  },
  {
    id: 'squarespace',
    title: 'Squarespace',
    icon: Square,
    description: 'Elegantly simple sites for service providers and creatives.'
  },
  {
    id: 'custom',
    title: 'Custom Build',
    icon: Code2,
    description:
      'Next.js + Sanity builds with serious speed, SEO, and scalability.'
  }
];

const addOns = [
  {
    title: 'SEO Boost Package',
    price: '£250',
    description:
      'Deep keyword research, metadata, Google Search Console setup, and a 30-day improvement plan.'
  },
  {
    title: 'Monthly Website Support',
    price: '£45/mo',
    description:
      'Light updates, fixes, and SEO touch-ups so your site always feels fresh.'
  },
  {
    title: 'Full Copywriting',
    price: '£100–£200 per page',
    description:
      'Done-for-you words that sound like you and sell your services without cringe.'
  },
  {
    title: 'Brand Refresh',
    price: '£300',
    description:
      'Updated logos, colour palette, and typography for a mini visual glow-up.'
  }
];

const audienceHighlights = [
  'Businesses who want pro-level design without the faff.',
  'Service providers who needed a legit online home yesterday.',
  'Small shops ready to move sales online without chaos.',
  'Founders who have outgrown DIY templates and want polish.',
  'People who love a good deadline (hi, me too).',
  'Anyone who wants a strategic partner, not just a “web person.”'
];

const deliverableHighlights = [
  {
    title: '7-Day Custom Build',
    icon: Rocket,
    tagline: 'Platform agnostic, launch ready.',
    bullets: [
      'Pick Shopify, Squarespace, or fully custom — or I’ll recommend what fits best.',
      'Core pages built end-to-end: Home, About, Services/Products, Contact, plus add-ons.',
      'Project plan + calendar invite so you always know what’s happening.'
    ]
  },
  {
    title: 'Design Systems that Scale',
    icon: MonitorSmartphone,
    tagline: 'Looks gorgeous on every screen.',
    bullets: [
      'On-brand visual direction, custom layouts, and purposeful typography.',
      'Reusable sections so you can add pages later without breaking the vibe.',
      'Accessibility-first build with responsive states, contrast checks, and UX patterns.'
    ]
  },
  {
    title: 'SEO + Launch Engineering',
    icon: Search,
    tagline: 'Found faster. Ranked higher.',
    bullets: [
      'On-page SEO: titles, meta descriptions, headers, and schema essentials.',
      'Keyword implementation and copy prompts for future content.',
      'Image compression, performance tuning, and analytics tracking connected.'
    ]
  },
  {
    title: 'Integrations + Handover',
    icon: Share2,
    tagline: 'Plugged in and easy to run.',
    bullets: [
      'Email marketing, booking tools, CRM, and product catalogs configured.',
      'Launch-day QA checklist, walkthrough video, and editable Notion guide.',
      'Two rounds of revisions during build week + 7 days of post-launch support.'
    ]
  },
  {
    title: 'Optional Glow-Ups',
    icon: Wand2,
    tagline: 'Add extras when you need them.',
    bullets: [
      'Copywriting, SEO deep dives, or monthly support retainers.',
      'Brand refreshes for colour, type, and mini-identity facelifts.',
      'Template + checklist lead magnets to start warming up dream clients.'
    ]
  }
];

const heroPhrases = [
  'Looks good. Gets found. Converts.',
  'Design + build + SEO in one week.',
  'Small biz friendly. Big brand energy.',
  'Done-for-you, fast, stress-free.'
];

const FREE_TEMPLATE_URL = '/templates/y2k-theme';
const WEBSITE_CHECKLIST_URL = 'https://moxiethemes.com/freebies/website-checklist.pdf';
const WEBSITE_SERVICE_URL = 'https://moxiethemes.com/services/website';

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design & Development",
  "name": "7-Day Website Launch",
  "description": "Done-for-you Shopify, Squarespace, or custom websites designed, built, and optimised for SEO in just one week.",
  "url": WEBSITE_SERVICE_URL,
  "provider": {
    "@type": "Organization",
    "name": "Moxie Themes",
    "url": "https://moxiethemes.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "600",
    "highPrice": "1500",
    "availability": "https://schema.org/InStock",
    "url": WEBSITE_SERVICE_URL
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "7-Day Website Launch Platforms",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Shopify Build",
        "itemOffered": {
          "@type": "Service",
          "name": "Shopify Website Setup",
          "description": "Conversion-focused Shopify storefront built in one week."
        }
      },
      {
        "@type": "Offer",
        "name": "Squarespace Build",
        "itemOffered": {
          "@type": "Service",
          "name": "Squarespace Website Setup",
          "description": "Elegant, easy-to-manage Squarespace site with SEO baked in."
        }
      },
      {
        "@type": "Offer",
        "name": "Custom Build",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Next.js + CMS Build",
          "description": "Fully custom build leveraging Next.js and headless CMS for performance and scalability."
        }
      }
    ]
  }
};

export default function WebsiteService() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % heroPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <SEO
        title="7-Day Website Launch – Shopify, Squarespace & Custom Sites"
        description="Get a conversion-ready Shopify, Squarespace, or custom website designed, built, and optimised for SEO in just 7 days — complete with integrations, launch support, and training."
        canonical="/services/website"
        keywords="7 day website launch, fast website build, Shopify expert UK, Squarespace designer UK, custom website sprint, moxie themes"
        ogType="product"
        structuredData={[serviceStructuredData]}
      />

      <section className="bg-purple text-white py-24 px-6 border-b-8 border-yellow overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[32px] p-[1px] bg-gradient-to-r from-yellow via-pink to-teal shadow-[0_30px_80px_rgba(30,14,55,0.45)]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-6 bg-purple/95 rounded-[32px] px-6 py-10 md:px-12 md:py-14"
            >
              <p className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs sm:text-sm font-heading text-yellow bg-white/5 px-4 py-2 rounded-full w-fit">
                <Sparkles className="w-4 h-4" />
                7-Day Website Launch
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-white">
                A beautiful, high-converting, SEO-friendly website{' '}
                <span className="text-yellow drop-shadow">in one week.</span>
              </h1>
              <p className="text-xl font-body text-off-white/90">
                Shopify, Squarespace, or fully custom builds — ready to launch in 7 days,
                not 7 months. Perfect for ambitious small businesses ready for a website
                that actually books clients and sells products.
              </p>
              <div className="inline-flex flex-col gap-2 justify-center items-center min-w-[100%]">
                <span className="text-sm uppercase tracking-[0.35em] text-off-white/70 font-heading">
                  What to expect
                </span>
                <div className="relative overflow-hidden h-14 w-full flex justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={heroPhrases[phraseIndex]}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full text-center text-xl md:text-3xl font-heading bg-gradient-to-r from-yellow via-pink to-teal bg-clip-text text-transparent drop-shadow px-4"
                    >
                      {heroPhrases[phraseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                <CTAButton href="/contact">Arrange a chat</CTAButton>
                {/* <CTAButton
                  href="#free-stuff"
                  variant="secondary"
                  className="border-4 border-white text-white hover:bg-white/10"
                >
                  Get the Free Template
                </CTAButton> */}
              </div>
            </motion.div>
            <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl opacity-60" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-white border-4 border-purple/30 rounded-3xl p-0 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple/10 via-pink/10 to-yellow/10 border-b border-purple/20 px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple font-heading mb-2">
                  What You Get
                </p>
                <h2 className="text-3xl font-heading font-bold text-charcoal max-w-3xl">
                  Simple, powerful, done-for-you websites built to convert (and delivered in a week).
                </h2>
              </div>
              <div className="inline-flex items-center gap-3 bg-white border-2 border-purple/30 rounded-full px-5 py-2 text-purple font-heading text-sm">
                <CheckCircle className="w-5 h-5" />
                Fully managed launch
              </div>
            </div>
            <div className="grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-2">
              {deliverableHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`group relative rounded-3xl p-[1px] bg-gradient-to-br from-purple/30 via-pink/20 to-yellow/20 ${
                    index === deliverableHighlights.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="h-full bg-off-white group-hover:bg-white transition-colors duration-300 border border-white/60 rounded-[1.4rem] p-6 flex flex-col gap-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-white border border-purple/20 text-purple group-hover:bg-purple/10 group-hover:text-charcoal transition">
                        <highlight.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60 font-heading">
                          {highlight.tagline}
                        </p>
                        <h3 className="text-xl font-heading font-bold text-charcoal">
                          {highlight.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-3 text-charcoal/90 font-body list-none">
                      {highlight.bullets.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple via-pink to-yellow inline-block flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

                    <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden bg-charcoal text-white rounded-3xl py-8 md:py-10 shadow-[0_30px_80px_rgba(16,7,26,0.45)]"
          >
            <div className="absolute -top-12 -right-16 w-48 h-48 bg-pink/30 blur-[90px]" />
            <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-yellow/20 blur-[120px]" />
            <div className="relative space-y-6">
                <div className="relative space-y-6 px-8">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2">
                <Sparkles className="w-4 h-4 text-yellow" />
                <p className="text-sm uppercase tracking-[0.2em] text-yellow font-heading">
                  Who This Is For
                </p>
              </div>
              <h2 className="text-3xl font-heading font-bold max-w-4xl text-white">
                The fast-action answer to “we need a better website{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-gradient-to-r from-yellow via-pink to-teal bg-clip-text">
                    now.
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-gradient-to-r from-yellow/60 via-pink/50 to-teal/60 blur-sm opacity-70" />
                </span>
                ”
              </h2>
                </div>
              <div className="relative overflow-hidden py-4">
                <div className="flex gap-4 marquee-track">
                  {[...audienceHighlights, ...audienceHighlights].map((item, idx) => (
                    <div
                      key={`${item}-${idx}`}
                      className="min-w-[260px] max-w-[260px] bg-white/10 border border-white/10 rounded-2xl px-5 py-4 flex items-start gap-3 backdrop-blur-sm"
                    >
                      <CheckCircle className="mt-1 w-5 h-5 text-teal shrink-0" />
                      <p className="text-base font-body text-off-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-pink/10 border border-pink/30 rounded-full px-4 py-2 text-pink font-heading text-xs uppercase tracking-[0.3em]">
                <Calendar className="w-4 h-4" />
                7-Day Timeline
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
                Fast, structured, and honestly pretty fun.
              </h2>
            </div>
            <div className="relative mt-6">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-pink via-yellow to-teal -translate-x-1/2" />
              <div className="space-y-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.day}
                    className={`relative md:flex md:items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:-translate-y-4 text-left' : 'md:pl-12 md:translate-y-4 md:text-left'}`}
                    >
                      <div className="bg-white border-2 border-pink/30 rounded-2xl p-5 shadow-md">
                        <div className="text-xs uppercase tracking-[0.3em] font-heading text-charcoal/70 mb-2">
                          {step.day}
                        </div>
                        <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                          {step.title}
                        </h3>
                        <ul className="space-y-2 font-body text-sm text-charcoal/90 list-disc pl-5">
                          {step.details.map(detail => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <span className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-charcoal border-4 border-white -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,92,178,0.5)]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="bg-off-white border-4 border-yellow/50 rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <Rocket className="w-10 h-10 text-purple" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-purple font-heading mb-2">
                  Pick Your Platform
                </p>
                <h2 className="text-3xl font-heading font-bold text-charcoal">
                  Same 7-day delivery, just tailored to your tech.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {platformOptions.map(option => (
                <div
                  key={option.id}
                  className="bg-white border-4 border-charcoal/10 rounded-2xl p-6 space-y-3"
                >
                  <option.icon className="w-8 h-8 text-purple" />
                  <h3 className="text-xl font-heading font-bold text-charcoal">
                    {option.title}
                  </h3>
                  <p className="font-body text-charcoal/80">{option.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border-4 border-teal/40 rounded-3xl p-8 shadow-lg space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-purple font-heading">
                Pricing
              </p>
              <h2 className="text-3xl font-heading font-bold text-charcoal">
                From £400–£1,200
              </h2>
              <p className="text-sm text-charcoal/80 block mb-4 small">
                Payment plans available
              </p>
              <p className="font-body text-charcoal/80">
                Final pricing depends on platform, features, and page count. Every build
                includes design, development, SEO, integrations, launch support, and
                training. Add-ons are available if you want to go bigger.
              </p>
              <ul className="space-y-2 font-body text-charcoal/90 list-disc pl-5">
                <li>Design + build for core pages</li>
                <li>On-page SEO and performance passes</li>
                <li>Integrations (email, booking, analytics, CRM, etc.)</li>
                <li>Launch day support + handover video</li>
              </ul>
            </div>
            <div className="bg-off-white border-4 border-pink/40 rounded-3xl p-8 space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-pink font-heading">
                Optional Add-Ons
              </p>
              <div className="space-y-5">
                {addOns.map(addOn => (
                  <div key={addOn.title} className="border-b border-charcoal/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="text-xl font-heading font-bold text-charcoal">
                        {addOn.title}
                      </h3>
                      <span className="text-sm font-body font-semibold text-charcoal/80">
                        {addOn.price}
                      </span>
                    </div>
                    <p className="font-body text-charcoal/80">{addOn.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
{/* 
          <motion.div
            id="free-stuff"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-purple via-pink to-teal shadow-[0_20px_60px_rgba(59,27,98,0.35)]"
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-32 -left-16 w-72 h-72 bg-yellow/30 blur-[120px]" />
              <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-teal/30 blur-[140px]" />
              <svg
                className="absolute opacity-40 top-0 left-0 w-full"
                viewBox="0 0 1440 240"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,160 C320,80 490,240 720,160 C950,80 1110,-10 1440,120 L1440,0 L0,0Z"
                  fill="url(#free-wave)"
                />
                <defs>
                  <linearGradient id="free-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f9dbff" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#ffd8ef" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d2f4ff" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative bg-white/95 rounded-[calc(1.5rem-2px)] p-8 md:p-10 space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-purple font-heading">
                    Free Stuff (That Actually Helps)
                  </p>
                  <h2 className="text-3xl font-heading font-bold text-charcoal">
                    Lead magnets that warm up dream clients before they enquire.
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple/10 via-white to-off-white border border-purple/20 rounded-2xl p-6 flex flex-col gap-4 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-purple/20 text-purple">
                      <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-purple font-heading">
                        Instant Download
                      </p>
                      <h3 className="text-xl font-heading font-bold text-charcoal">
                        1. Editable One-Page Template
                      </h3>
                    </div>
                  </div>
                  <p className="font-body text-charcoal/80">
                    A simple, stylish site for coaches, consultants, creatives, and local businesses.
                    Duplicate, tweak the colors, drop in your copy, and you have a legit mini site in under an hour.
                  </p>
                  <ul className="space-y-2 font-body text-charcoal/80 list-disc pl-5">
                    <li>Built for lead gen + services</li>
                    <li>Drag-and-drop friendly tools</li>
                    <li>Includes brand + copy prompts</li>
                  </ul>
                  <CTAButton href={FREE_TEMPLATE_URL} className="bg-purple text-white border-none">
                    Grab the template
                  </CTAButton>
                </div>
                <div className="bg-gradient-to-br from-pink/10 via-white to-off-white border border-pink/20 rounded-2xl p-6 flex flex-col gap-4 shadow-inner">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white border border-pink/20 text-pink">
                      <FileDown className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-pink font-heading">
                        PDF Checklist
                      </p>
                      <h3 className="text-xl font-heading font-bold text-charcoal">
                        2. “What Your Website Needs &amp; How to Launch” Checklist
                      </h3>
                    </div>
                  </div>
                  <p className="font-body text-charcoal/80">
                    The exact checklist I use for client builds: brand essentials, SEO basics, launch tasks, and mistakes to avoid.
                  </p>
                  <ul className="space-y-2 font-body text-charcoal/80 list-disc pl-5">
                    <li>Brand + copy prep prompts</li>
                    <li>Image + asset guidelines</li>
                    <li>Launch QA + SEO basics</li>
                  </ul>
                  <CTAButton
                    href={WEBSITE_CHECKLIST_URL}
                    className="border-none bg-pink/90 text-white hover:bg-pink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download the checklist
                  </CTAButton>
                </div>
              </div>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-charcoal text-white rounded-3xl p-8 text-center space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-yellow font-heading">
              Ready to Launch?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ready to launch your website in 7 days?
            </h2>
            <p className="font-body text-off-white/90 max-w-3xl mx-auto">
              Grab a free planning call and claim your build week, or download the
              template + checklist and jumpstart things today. Either way, let’s ditch
              the “still waiting on the developer” vibes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton
                href="contact"
                variant="secondary"
                className="border-4 border-white text-white hover:bg-white/10"
              >
                Get in touch
              </CTAButton>
            </div>
            <p className="text-sm text-off-white/70">
              Prefer email?{' '}
              <Link href="mailto:hello@moxiethemes.com" className="text-pink underline">
                hello@moxiethemes.com
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}


