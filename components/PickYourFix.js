import Link from 'next/link';
import { Search, Zap, Store } from 'lucide-react';
import { Border } from './Border';

function FixCard({
  icon,
  title,
  price = '',
  tagline,
  ctaHref,
  ctaText,
  ctaClass,
  detailsTitle,
  details,
  tilt = 'rotate-1',
  bgClass = '',
  iconBgClass = '',
  iconTextClass = ''
}) {
  return (
    <div className="group max-w-90 mx-auto">
      <div className={`relative h-full rounded-2xl shadow-lg border border-black/10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:${tilt} group-hover:shadow-xl ${bgClass} ` }>
        <div className="relative z-10 p-8 flex flex-col justify-between min-h-[280px] bg-white/60 backdrop-blur-sm rounded-2xl">
          <div style={{ minHeight: 180 }} className="text-center">
            <div className={`mb-4 mx-auto inline-flex items-center  justify-center w-12 h-12 rounded-full ${iconBgClass} ${iconTextClass}`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold font-heading text-charcoal">{title}</h3>
            {price && (
              <div className="text-charcoal/70 font-heading font-semibold mt-1 mb-3">{price}</div>
            )}
            <p className="font-body text-charcoal/70">{tagline}</p>
          </div>
          <Link href={ctaHref} className={`mt-8 inline-block px-6 py-3 rounded-lg font-body font-medium transition-colors ${ctaClass}`}>{ctaText}</Link>
        </div>
        <div className="absolute z-50 left-0 right-0 shadow-lg bottom-0 translate-y-30 lg:translate-y-10 group-hover:translate-y-30 transition-transform duration-300 bg-white backdrop-blur-md border-t border-black/10 rounded-b-2xl p-5">
          <h4 className="text-base font-heading font-bold text-charcoal mb-2">{detailsTitle}</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-charcoal/80">
            {details.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PickYourFix() {
  return (
    <section className="relative py-20 px-6 bg-white">
      {/* Top wavy border */}
      <Border className="translate-y-[-100%] rotate-180" />

      <div className="max-w-6xl mx-auto pt-12 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal text-center mb-12">Pick Your Fix</h2>

        <div className="grid lg:grid-cols-3 lg:gap-x-4 gap-y-42">
          <FixCard
            icon={<Search className="w-6 h-6" />}
            title="SEO Audit"
            price="£80"
            tagline="Find what’s broken and fix it before Google ghosts you."
            ctaHref="#contact-form"
            ctaText="Book Audit"
            ctaClass="bg-purple text-white hover:bg-purple/90"
            detailsTitle="What you get"
            details={[
              'Broken links, speed, metadata check',
              'Clear priority fixes',
              'Quick wins you can ship today'
            ]}
            tilt="rotate-1"
            bgClass="bg-gradient-to-br from-pink/20 via-yellow/20 to-teal/20"
            iconBgClass="bg-purple"
            iconTextClass="text-white"
          />

          <FixCard
            icon={<Zap className="w-6 h-6" />}
            title="Fix Package"
            price="~£600"
            tagline="I get my hands dirty so your site doesn’t have to."
            ctaHref="#contact-form"
            ctaText="Get a Quote"
            ctaClass="bg-yellow text-purple hover:bg-yellow/90"
            detailsTitle="What I fix"
            details={[
              'Redirects, sitemaps, indexing issues',
              'Core Web Vitals & speed',
              'Tags, titles, and content gaps'
            ]}
            tilt="-rotate-1"
            bgClass="bg-gradient-to-br from-purple/20 via-pink/20 to-yellow/20"
            iconBgClass="bg-yellow"
            iconTextClass="text-purple"
          />

          <FixCard
            icon={<Store className="w-6 h-6" />}
            title="Shopify Setup"
            price="~£300"
            tagline="Launch without the midnight tears"
            ctaHref="#contact-form"
            ctaText="Set Me Up"
            ctaClass="bg-pink text-white hover:bg-pink/90"
            detailsTitle="What’s included"
            details={[
              'Theme install + essential apps',
              'Collections, products, and payments',
              'Launch checklist and support'
            ]}
            tilt="rotate-1"
            bgClass="bg-gradient-to-br from-teal/20 via-yellow/20 to-pink/20"
            iconBgClass="bg-pink"
            iconTextClass="text-white"
          />
        </div>
      </div>

      {/* Bottom wavy border */}
      <Border className="top-[100%]" fill="white" />
    </section>
  );
}
