import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Y2KBuyLink } from './y2k-buy-link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 px-6">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue/30 rounded-full animate-pulse" />
        <div className="absolute top-60 left-40 w-20 h-20 bg-blue/30 rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink/40 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-32 w-24 h-24 bg-teal/30 rounded-full animate-pulse" />
    </div>

    <div className="relative max-w-7xl mx-auto text-center grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="col-span-2">
          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-pink via-purple to-teal bg-clip-text text-transparent drop-shadow-lg">
                      Y2K
                    </span>
                    <span className="text-white drop-shadow-md"> Shopify Theme</span>
                  </h1>
                  <p className="text-2xl md:text-3xl font-body mb-8">
                    <span className="text-pink font-bold drop-shadow-sm">Retro energy.</span>
                    <span className="text-purple font-bold drop-shadow-sm"> Modern speed.</span>
                    <span className="text-teal font-bold drop-shadow-sm"> Proper results.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20"
                >
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                    <span className="text-white drop-shadow-md">Meet the Shopify theme that</span>
                    <span className="bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent drop-shadow-lg"> brings MySpace vibes</span>
                  </h2>
                  <p className="text-xl leading-relaxed text-white">
                    <span >Stop settling for</span>
                    <span> lifeless, cookie-cutter themes.</span>
                    <br />
                    <span >The</span>
                    <span className="bg-gradient-to-r from-purple to-teal bg-clip-text text-transparent font-bold drop-shadow-md"> Y2K Theme</span>
                    <span> brings your store to life with</span>
                    <span className="text-pink font-bold drop-shadow-sm"> retro-futuristic sparkle</span>
                    <span > —</span>
                    <span className="text-purple font-bold drop-shadow-sm"> 3D text</span>
                    <span>,</span>
                    <span className="text-teal font-bold drop-shadow-sm"> interactive effects</span>
                    <span >, and a touch of</span>
                    <span className="text-pink font-bold drop-shadow-sm"> early-2000s chaos.</span>
                    <br />
                    <span>It&apos;s</span>
                    <span className="text-purple font-bold drop-shadow-sm"> bold</span>
                    <span>,</span>
                    <span className="text-teal font-bold drop-shadow-sm"> fast</span>
                    <span>, and</span>
                    <span className="text-pink font-bold drop-shadow-sm"> built to rank.</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                >
                  <div className="flex flex-col items-center gap-2">
                    <a href="https://y2k-girly-theme.myshopify.com" target="_blank" rel="noopener noreferrer">
                    <button className="bg-purple text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-purple/90 transition-colors flex items-center justify-center gap-3 cursor-pointer">
                      <Play className="w-6 h-6" />
                        Live Demo
                    </button>
                    </a>
                      <p className="text-white text-sm">Use password: demo</p>
                  </div>
                  <Y2KBuyLink>
                    <span className="text-white">Buy Now – £120</span>
                    <span className="text-sm bg-white/70 px-2 py-1 rounded">Launch Offer</span>
                  </Y2KBuyLink>
                </motion.div>
      </div>

      {/* Theme Showcase Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative max-w-5xl col-span-2 h-full"
      >
            {/* Theme GIF */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md h-[400px] md:h-[500px] lg:h-[900px] max-w-[300px] md:max-w-none mx-auto md:mx-0 border border-white/20 shadow-2xl overflow-hidden">
              <Image 
                src="/y2k/Promo.gif" 
                alt="Y2K Theme in Action" 
                width={600}
                height={900}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
      </motion.div>
    </div>
  </section>
  );
};
