import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { Mail,  X, Instagram as InstagramIcon, Search, Wrench, Layout as LayoutIcon, ChevronDown, ShoppingCart, Square, Code2 } from 'lucide-react';

export default function Services() {
  const [activeSection, setActiveSection] = useState('audit');
  const [openPlatform, setOpenPlatform] = useState('shopify');

  const togglePlatform = (platform) => {
    setOpenPlatform(prev => (prev === platform ? '' : platform));
  };

  return (
    <Layout>
      <SEO 
        title="Services – Get a Website That Actually Works"
        description="SEO audits, fix packages, and website design/setup that actually perform. Get found, loved, and clicked."
        canonical="/services"
        keywords="SEO audit, SEO fixes, website design, Shopify, Squarespace, custom builds, site speed, accessibility"
      />

      <section className="bg-purple text-white py-24 px-6 border-b-8 border-yellow">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow text-white">
              Services – Get a Website That Actually Works
            </h1>
            <p className="text-xl font-body text-off-white/95 mb-10">
              Because pretty sites are nice, but profitable ones are better. I help small businesses build, fix, and optimise their websites so they can actually be found, loved, and clicked on.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Selector */}
          <div className="w-full">
            <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
              {[
                { id: 'audit', label: 'SEO Audit', icon: Search },
                { id: 'fix', label: 'SEO Fix Packages', icon: Wrench },
                { id: 'design', label: 'Website Design & Setup', icon: LayoutIcon }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSection(item.id)}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm md:text-base font-body font-semibold transition-colors border-4 ${
                    activeSection === item.id
                      ? 'bg-purple text-white border-purple'
                      : 'bg-white text-charcoal border-charcoal/20 hover:bg-charcoal/5'
                  }`}
                  aria-pressed={activeSection === item.id}
                >
                  <span className="inline-flex items-center gap-2 justify-center">
                    {item.icon ? <item.icon className="w-4 h-4" /> : null}
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* SEO Audit */}
          {activeSection === 'audit' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="bg-white border-4 border-purple/40 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">SEO Audit</h2>
              <span className="inline-flex items-center rounded-full bg-purple/10 text-purple border border-purple/20 px-4 py-1.5 text-sm font-body font-semibold">£80</span>
            </div>
            <p className="font-body text-charcoal/90 mb-6">Find out what’s really going on behind the scenes. Your site might look fine, but Google might be quietly giving it the ick.</p>
            <p className="font-body text-charcoal/90 mb-6">An SEO audit is a full health check of your website — from broken links and missing metadata to page speed and content structure. You’ll get:</p>
            <ul className="list-disc pl-6 space-y-2 font-body text-charcoal/90 mb-6">
              <li>A no-jargon report showing what’s broken and why it matters</li>
              <li>Clear, actionable steps to fix everything that’s hurting your traffic</li>
              <li>Quick wins to start ranking higher straight away</li>
            </ul>
            <p className="font-body text-charcoal/90 mb-6">No fluff, no “keyword density” nonsense — just the fixes that actually move the needle.</p>
            <p className="font-body text-charcoal/90 mb-6"><span className="font-semibold">Perfect for:</span> Businesses with existing sites that want more traffic, better rankings, and less guesswork.</p>
            <CTAButton href="/contact" className="mt-2">Book an SEO Audit</CTAButton>
          </motion.div>
          )}

          {/* SEO Fix Packages */}
          {activeSection === 'fix' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="bg-white border-4 border-pink/40 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">SEO Fix Packages</h2>
              <span className="inline-flex items-center rounded-full bg-pink/10 text-pink border border-pink/20 px-4 py-1.5 text-sm font-body font-semibold">from £600</span>
            </div>
            <p className="font-body text-charcoal/90 mb-6">When you don’t just want a list of problems — you want them gone. After the audit, I can handle the fixes for you.</p>
            <p className="font-body text-charcoal/90 mb-4">This includes:</p>
            <ul className="list-disc pl-6 space-y-2 font-body text-charcoal/90 mb-6">
              <li>Repairing broken referral links and redirects</li>
              <li>Cleaning up site structure and duplicate content</li>
              <li>Improving metadata, titles, and tags</li>
              <li>Speed optimisation + accessibility clean-up</li>
              <li>Performance monitoring to make sure it sticks</li>
            </ul>
            <p className="font-body text-charcoal/90 mb-6">Everything’s implemented carefully so your site stays live, stable, and (importantly) fast.</p>
            <p className="font-body text-charcoal/90 mb-6"><span className="font-semibold">Result:</span> A site that loads instantly, ranks better, and doesn’t make Google cry.</p>
            <CTAButton href="/contact" className="mt-2">👉 Get a Quote</CTAButton>
          </motion.div>
          )}

          {/* Website Design & Setup */}
          {activeSection === 'design' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="bg-white border-4 border-teal/40 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Website Design &amp; Setup</h2>
              <span className="inline-flex items-center rounded-full bg-teal/10 text-charcoal border border-teal/20 px-4 py-1.5 text-sm font-body font-semibold">from £900</span>
            </div>
            <p className="font-body text-charcoal/90 mb-6">Shopify, Squarespace, or fully custom builds — all with brains behind the beauty.</p>
            <p className="font-body text-charcoal/90 mb-6">Whether you’re starting fresh or your old site’s seen better days, I’ll design and build something that looks gorgeous and performs.</p>

            {/* Platform Accordions */}
            <div className="space-y-4 mb-6">
              {/* Shopify */}
              <div className="border-4 border-purple/30 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => togglePlatform('shopify')}
                  className={`w-full text-left px-6 py-4 font-heading font-bold transition-colors flex items-center justify-between ${openPlatform === 'shopify' ? 'bg-purple/10 text-purple' : 'bg-white text-charcoal hover:bg-charcoal/5'}`}
                  aria-expanded={openPlatform === 'shopify'}
                  aria-controls="platform-shopify"
                >
                  <span className="inline-flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Shopify</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openPlatform === 'shopify' ? 'rotate-180' : ''}`} />
                </button>
                {openPlatform === 'shopify' && (
                  <div id="platform-shopify" className="px-6 py-5 bg-white">
                    <ul className="list-disc pl-6 space-y-2 font-body text-charcoal/90">
                      <li>Full theme setup or custom build</li>
                      <li>SEO-friendly from the ground up</li>
                      <li>Product pages that actually convert</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Squarespace */}
              <div className="border-4 border-pink/30 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => togglePlatform('squarespace')}
                  className={`w-full text-left px-6 py-4 font-heading font-bold transition-colors flex items-center justify-between ${openPlatform === 'squarespace' ? 'bg-purple/10 text-purple' : 'bg-white text-charcoal hover:bg-charcoal/5'}`}
                  aria-expanded={openPlatform === 'squarespace'}
                  aria-controls="platform-squarespace"
                >
                  <span className="inline-flex items-center gap-2"><Square className="w-4 h-4" /> Squarespace</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openPlatform === 'squarespace' ? 'rotate-180' : ''}`} />
                </button>
                {openPlatform === 'squarespace' && (
                  <div id="platform-squarespace" className="px-6 py-5 bg-white">
                    <ul className="list-disc pl-6 space-y-2 font-body text-charcoal/90">
                      <li>Ideal for service-based businesses</li>
                      <li>Elegant layouts, easy to maintain</li>
                      <li>SEO structure baked in</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Custom Builds */}
              <div className="border-4 border-teal/30 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => togglePlatform('custom')}
                  className={`w-full text-left px-6 py-4 font-heading font-bold transition-colors flex items-center justify-between ${openPlatform === 'custom' ? 'bg-purple/10 text-purple' : 'bg-white text-charcoal hover:bg-charcoal/5'}`}
                  aria-expanded={openPlatform === 'custom'}
                  aria-controls="platform-custom"
                >
                  <span className="inline-flex items-center gap-2"><Code2 className="w-4 h-4" /> Custom Builds</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openPlatform === 'custom' ? 'rotate-180' : ''}`} />
                </button>
                {openPlatform === 'custom' && (
                  <div id="platform-custom" className="px-6 py-5 bg-white">
                    <ul className="list-disc pl-6 space-y-2 font-body text-charcoal/90">
                      <li>Bespoke designs, built for brand personality</li>
                      <li>Perfect for businesses ready to level up</li>
                      <li>Optimised for speed and performance from day one</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <p className="font-body text-charcoal/90 mb-6">All sites include basic on-page SEO setup, responsive layouts, and performance testing — because if it’s not fast, it’s not finished.</p>
            <CTAButton href="/contact" className="mt-2">👉 Enquire About a Website Build</CTAButton>
          </motion.div>
          )}

          {/* Hidden Case Study */}
          {/* <div className="bg-white border border-charcoal/10 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">(Hidden) Case Study: From Invisible to Irresistible</h2>
            <p className="font-body text-charcoal/90 mb-4">Coming soon — how one client went from page 6 to page 1 in two weeks.</p>
            <p className="font-body text-charcoal/90">I’ll share a behind-the-scenes look at a real SEO audit and fix project: what was broken, how we fixed it, and the exact results.</p>
          </div> */}

          {/* Not Sure */}
          <div className="bg-white border border-charcoal/10 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Not Sure What You Need?</h2>
            <p className="font-body text-charcoal/90 mb-6">Sometimes you just know your website’s not pulling its weight — and that’s enough to start. Drop me a message, tell me what’s going wrong, and I’ll point you in the right direction (no hard sell, promise).</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="mailto:hello@moxiethemes.com" className="">hello@moxiethemes.com</CTAButton>
              <CTAButton href="/contact" variant="secondary" className="">Contact Me</CTAButton>
            </div>
          </div>

          {/* Closing Line */}
          <div className="bg-charcoal text-white rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">SEO + Design That Feels Good and Works Hard</h2>
            <p className="font-body text-off-white">Whether you need a new site, an audit, or someone to sort out the mess your last developer left — I’ve got you. Let’s make your website something you’re actually proud to send people to.</p>
          </div>
        </div>
      </section>

      {/* Closing CTA / Footer (mirrors index) */}
      <section className="bg-charcoal py-20 px-6 border-t-8 border-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-off-white mb-8">
            Ready to stop babysitting a useless website?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/contact" 
              className="bg-yellow text-purple px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-yellow/90 transition-colors border-4 border-yellow"
            >
              Get in touch
            </a>
            <a 
              href="mailto:hello@moxiethemes.com" 
              className="border-4 border-pink text-white px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-pink hover:text-white transition-colors"
            >
              Email Me
            </a>
          </div>
          <div className="mb-8">
            <a 
              href="mailto:hello@moxiethemes.com" 
              className="text-pink hover:text-teal transition-colors text-lg font-body flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              hello@moxiethemes.com
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://x.com/moxie_themes" target="_blank" rel="noopener noreferrer">
              <X className="w-5 h-5 text-white" />
            </a>
            <a href="https://instagram.com/moxiethemes" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
          </div>
          <p className="text-sm font-body text-off-white opacity-80">
            Moxie Themes © 2025 · Built with too much coffee and a love of clean code.
          </p>
        </div>
      </section>
    </Layout>
  );
}


