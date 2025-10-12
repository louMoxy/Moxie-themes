import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Y2KBuyLink } from '../../components/Themes/y2k-buy-link';
import { 
  CheckCircle,
  Play,
  Sparkles,
  Gamepad2,
  Palette,
  Zap
} from 'lucide-react';
import { Hero } from '../../components/Themes/Hero';
import Image from 'next/image';

export default function Y2KTheme() {
  return (
    <Layout>
      <SEO 
        title="Y2K Shopify Theme - Retro Energy, Modern Speed" 
        description="The Y2K Theme brings your store to life with retro-futuristic sparkle — 3D text, interactive effects, and a touch of early-2000s chaos. Fast, bold, and built to rank." 
        canonical="/templates/y2k-theme"
        keywords="Y2K Shopify theme, retro ecommerce design, 2000s style templates, unique Shopify themes, interactive store design, retro-futuristic themes"
        ogType="product"
      />
      
      <Hero />

      {/* Interactive Cursor Effects */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple/5 to-pink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
              Interactive Cursor Effects (Industry First!)
            </h2>
            <p className="text-xl text-charcoal/80 mb-8">
              Because shopping should be fun.
            </p>
            <p className="text-lg text-charcoal/70">
              Four original cursor effects that make your site feel alive:
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ul className="space-y-6">
              {[
                { title: "Glitch Cursor", desc: "Cyberpunk vibes, pure chaos." },
                { title: "Sparkle Trail", desc: "Gold dust follows every click." },
                { title: "Rainbow Trail", desc: "Colour dots for the dopamine rush." },
                { title: "Emoji Icon", desc: "Custom emoji which you set." },
              ].map((effect, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-white/20 hover:bg-white/70 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink to-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading text-charcoal mb-1">{effect.title}</h3>
                    <p className="text-charcoal/70">{effect.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Screenshot placeholder */}
            <div className="mt-16 rounded-2xl flex items-center justify-center">
            <Image 
                  src="/y2k/y2k-cursor.gif" 
                  alt="Y2K Theme Interactive Cursor Effects" 
                  width={600}
                  height={400}
                  unoptimized
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
              Interactive Sections That Actually Stop the Scroll
            </h2>
          </div>

          <div className="space-y-20">
            {/* 3D Spinning Text */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold font-heading text-charcoal mb-4">3D Spinning Text</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  WebGL-powered headline that rotates in real time — buttery smooth, mobile-friendly, and smart enough to only load when needed.
                </p>
                <p className="text-charcoal/70">
                  Perfect for product drops, sales, or cheeky announcements.
                </p>
              </div>
              <Image src="/y2k/3d-spinning-text.gif" alt="Y2K Theme 3D Spinning Text" width={600} height={400} unoptimized className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>

            {/* Dancing Cards */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold font-heading text-charcoal mb-4">Dancing Cards</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Hover, lift, glow, bounce.
                </p>
                <p className="text-charcoal/70">
                  Every product grid becomes a mini party — animated borders, subtle 3D tilts, and smooth transitions that make browsing addictive.
                </p>
              </div>
              <Image src="/y2k/dancing-cards.gif" alt="Y2K Theme Dancing Cards" width={600} height={400} unoptimized className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>

            {/* Countup Sections */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div >
                <h3 className="text-3xl font-bold font-heading text-charcoal mb-4">Countup Sections</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Stats that actually move the needle.
                </p>
                <p className="text-charcoal/70">
                  Animated number counters that glide from 0 → N as you scroll — perfect for showing off sales figures, happy customers, or cups of coffee consumed.
                </p>
                <p className="text-charcoal/70 mt-4">
                  They&apos;re lightweight, eye-catching, and auto-trigger only when visible, so no performance hit.
                </p>
              </div>
              <Image src="/y2k/countup-timer.gif" alt="Y2K Theme Countup Timer" width={600} height={400} unoptimized className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>

            {/* Optimised Product Layouts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold font-heading text-charcoal mb-4">Optimised Product Layouts</h3>
                <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                  Everything your customer needs, exactly where they expect it.
                </p>
                <p className="text-charcoal/70">
                  From variant pickers and stock badges to sticky &quot;Add to Cart&quot; buttons — every product page is crafted for conversions.
                </p>
                <p className="text-charcoal/70 mt-4">
                  Clean, fast-loading, and responsive down to the pixel. Because a theme that looks good is great… but one that sells? Even better.
                </p>
              </div>
              <Image src="/y2k/product.gif" alt="Y2K Product Layout" width={600} height={400} unoptimized className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Y2K Aesthetic Pack */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink/5 to-teal/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-6">
              Full Y2K Aesthetic Pack
            </h2>
            <p className="text-xl text-charcoal/80 mb-8">
              Neon gradients, chrome shine, pixel hearts, and animated text shadows in pink, cyan, and lemon yellow.
            </p>
            <p className="text-lg text-charcoal/70">
              You can almost hear the dial-up.
            </p>
          </div>

          {/* Font Pairings */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold font-heading text-charcoal text-center mb-8">
              Curated Font Pairings
            </h3>
            <p className="text-center text-charcoal/70 mb-12">
              Choose from 4 combos hand-picked for the Y2K vibe:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Rubik Mono One + Inter", 
                  style: "Bold & modern",
                  headingFont: "font-['Rubik_Mono_One']",
                  bodyFont: "font-['Inter']",
                  sampleText: "Y2K THEME"
                },
                { 
                  name: "Monoton + Roboto", 
                  style: "Playful & nostalgic",
                  headingFont: "font-['Monoton']",
                  bodyFont: "font-['Roboto']",
                  sampleText: "Y2K THEME"
                },
                { 
                  name: "Baloo 2 + Nunito", 
                  style: "Friendly & approachable",
                  headingFont: "font-['Baloo_2']",
                  bodyFont: "font-['Nunito']",
                  sampleText: "Y2K THEME"
                },
                { 
                  name: "Orbitron + Source Sans Pro", 
                  style: "Futuristic & clean",
                  headingFont: "font-['Orbitron']",
                  bodyFont: "font-['Source_Sans_Pro']",
                  sampleText: "Y2K THEME"
                }
              ].map((font, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-black/10 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h4 className={`text-2xl text-charcoal mb-2 ${font.headingFont}`}>
                      {font.sampleText}
                    </h4>
                    <p className={`text-charcoal/80 ${font.bodyFont}`}>
                      This is how your body text will look with this pairing. Perfect for product descriptions and longer content.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h5 className="text-lg font-semibold text-charcoal mb-1">{font.name}</h5>
                    <p className="text-charcoal/70 text-sm">{font.style}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Call-to-Action */}
          <div className="bg-gradient-to-br from-purple/10 to-pink/10 rounded-2xl p-8 border border-purple/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-heading text-charcoal mb-4">
                See It In Action
              </h3>
              <p className="text-lg text-charcoal/80">
                Don&apos;t just take our word for it — experience the Y2K magic yourself.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Left side - Instructions */}
              <div className="bg-white/50 rounded-xl p-6 col-span-3">
                <h4 className="text-xl font-bold text-charcoal mb-3">🎮 Try the Interactive Demo</h4>
                <p className="text-charcoal/70 mb-4">
                  Click the floating button in the bottom-right corner to customize:
                </p>
                <ul className="text-charcoal/70 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple rounded-full"></span>
                    <span>Switch between 4 curated font pairings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink rounded-full"></span>
                    <span>Change color schemes and gradients</span>
                  </li>
                  <li className="flex items-center gap-2"> 
                    <span className="w-2 h-2 bg-teal rounded-full"></span>
                    <span>Test all 4 interactive cursor effects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow rounded-full"></span>
                    <span>See animations and 3D effects live</span>
                  </li>
                </ul>
              </div>
              
              {/* Right side - Demo Button */}
              <div className="flex flex-col items-center col-span-3 md:col-span-2 justify-center">
                <a href="https://y2k-girly-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" target="_blank" rel="noopener noreferrer">
                  <button className="bg-purple text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-purple/90 transition-colors flex items-center justify-center gap-3 cursor-pointer mb-4">
                    <Play className="w-6 h-6" />
                    View Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Accessibility */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8">
            Fast, Accessible, and Built for Humans (and Google)
          </h2>
          <p className="text-2xl text-charcoal/80 mb-12">
            All the flair. None of the lag.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              "Progressive enhancement = works everywhere",
              "Smart loading = effects only run when visible",
              "60fps animations = smooth as butter",
              "Mobile-first = touch-safe, motion-aware",
              "Accessibility-ready = reduced-motion support baked in",
              "Developer-friendly too: Tailwind CSS, clean Liquid templates, schema-based settings, and full documentation."
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-teal mt-1 flex-shrink-0" />
                <p className="text-charcoal/80 text-left">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow/10 to-pink/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8">
          Why It Works (and Why It Sells)
          </h2>
          <p className="text-xl text-charcoal/80 mb-8">
            Because it&apos;s not just a vibe — it&apos;s strategy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-2">Motion keeps people looking</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-2">Nostalgia builds emotion</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal mb-2">Speed keeps them buying</h3>
            </div>
          </div>

            <p className="text-lg text-charcoal/70">
              The Y2K Theme isn&apos;t a gimmick — it&apos;s good UX disguised as fun.
            </p>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-8">
            Perfect For:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: Sparkles, 
                title: "Fashion & Beauty Brands", 
                desc: "Make your products pop with Y2K energy that screams 'buy me now'" 
              },
              { 
                icon: Gamepad2, 
                title: "Gamers & Tech Stores", 
                desc: "Perfect for RGB-loving customers who want that cyberpunk aesthetic" 
              },
              { 
                icon: Palette, 
                title: "Creators & Designers", 
                desc: "Show off your creative side with animations that actually convert" 
              },
              { 
                icon: Zap, 
                title: "Anyone who refuses to blend in", 
                desc: "Stand out from the boring beige crowd with pure Y2K chaos" 
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    borderColor: "rgba(147, 51, 234, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-purple/5 to-pink/5 rounded-xl p-6 border border-purple/20 cursor-pointer"
                >
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      className="p-3 rounded-full bg-gradient-to-br from-purple/10 to-pink/10 border border-purple/20"
                      animate={{
                        rotate: [0, 2, -2, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-purple" />
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <p className="text-lg text-charcoal/70">
            If your brand has personality, this theme gets it — and amplifies it.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 bg-gradient-to-br from-teal/5 to-purple/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal text-center mb-12">
            🛍️ What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "✅ 5 unique cursor effects",
              "✅ 3D spinning text",
              "✅ Countdown timer",
              "✅ Animated multi-column cards",
              "✅ 4 curated font pairings",
              "✅ Full theme editor controls",
              "✅ Mobile-optimised performance",
              "✅ 6 months of updates & support",
              "✅ Setup guide + documentation"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <span className="text-charcoal/80">{item}</span>
              </div>
            ))}
          </div>

           <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-black/10">
             <div className="mb-6">
               <span className="text-2xl text-charcoal/60 line-through">Regular Price: £160</span>
               <div className="text-4xl font-bold text-charcoal">Launch Special: £120</div>
               <div className="text-lg text-pink font-semibold">Save £40 — limited time!</div>
             </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col items-center gap-2">
                <a href="https://y2k-girly-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow text-purple px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow/90 transition-colors flex items-center justify-center gap-3 cursor-pointer">
                  <Play className="w-6 h-6" />
                  View Demo
                </button>
                </a>
              </div>
              <Y2KBuyLink>
                <span className="text-white">Buy Now – £120</span>
              </Y2KBuyLink>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-charcoal text-center mb-12">
            💬 FAQs
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Will this slow down my store?",
                a: "Nope. It's performance-optimised and capped at 60fps."
              },
              {
                q: "Can I customise the effects?",
                a: "Every colour, intensity, and motion toggle is right inside the Shopify editor."
              },
              {
                q: "Does it work on mobile?",
                a: "Yes! Cursor effects are disabled on touch devices, but everything else looks ace."
              },
              {
                q: "What if I need help?",
                a: "You get 6 months of support, documentation, and setup guides — from me, not a bot."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">{faq.q}</h3>
                <p className="text-charcoal/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-purple to-pink text-white">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
            <p className="text-xl leading-relaxed mb-6">
              I built the Y2K Theme because I was bored of lifeless, beige Shopify stores.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This one&apos;s fun, fast, and unapologetically extra — without breaking Core Web Vitals.
            </p>
            <p className="text-lg leading-relaxed">
              If you want a store that vibes and converts, you&apos;ve found your theme.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Don&apos;t Be Basic. Be Y2K.</h3>
            <p className="text-xl">
              The aesthetic&apos;s trending right now — get in while everyone else&apos;s site still looks like a spreadsheet.
            </p>
          </div>

           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Y2KBuyLink>
               <span className="text-white">Buy Now – £120</span>
               </Y2KBuyLink>
              <div className="flex flex-col items-center gap-2">
                <a href="https://y2k-girly-theme.myshopify.com/?_ab=0&_fd=0&_sc=1" target="_blank" rel="noopener noreferrer">
              <button className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-white/30 transition-colors flex items-center justify-center gap-3 border border-white/30 cursor-pointer">
                VIEW DEMO
              </button>
              </a>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
