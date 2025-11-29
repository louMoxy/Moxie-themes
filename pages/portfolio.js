import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CTAButton from '../components/CTAButton';
import { getPortfolioItems } from '../utils/portfolio-utils';
import { ExternalLink, Code2, ShoppingCart, Square, Sparkles, X, ChevronDown } from 'lucide-react';

// Map category to icon
const categoryIcons = {
  'Shopify': ShoppingCart,
  'Custom Build': Code2,
  'Squarespace': Square,
};

// Map color to classes
const colorClasses = {
  purple: {
    bg: 'bg-purple/20',
    border: 'border-purple/40',
    text: 'text-purple',
    gradient: 'from-purple/30 via-pink/20 to-yellow/20',
    accent: 'bg-purple/10',
  },
  teal: {
    bg: 'bg-teal/20',
    border: 'border-teal/40',
    text: 'text-teal',
    gradient: 'from-teal/30 via-purple/20 to-pink/20',
    accent: 'bg-teal/10',
  },
  pink: {
    bg: 'bg-pink/20',
    border: 'border-pink/40',
    text: 'text-pink',
    gradient: 'from-pink/30 via-yellow/20 to-purple/20',
    accent: 'bg-pink/10',
  },
};

export default function Portfolio({ portfolioItems }) {
  const router = useRouter();
  const { tag } = router.query;
  const [activeTag, setActiveTag] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setActiveTag(tag || null);
  }, [tag]);

  // Get all unique tags from portfolio items
  const allTags = [...new Set(portfolioItems.flatMap(item => item.data.tags || []))];

  // Filter items based on active tag
  const filteredItems = activeTag
    ? portfolioItems.filter(item => 
        (item.data.tags || []).some(t => t.toLowerCase() === activeTag.toLowerCase())
      )
    : portfolioItems;

  const clearFilter = () => {
    router.push('/portfolio', undefined, { shallow: false });
    setActiveTag(null);
  };

  return (
    <Layout>
      <SEO
        title="Portfolio – Moxie Themes"
        description="See examples of websites, Shopify themes, and custom builds designed and developed by Moxie Themes."
        canonical="/portfolio"
        keywords="portfolio, website examples, Shopify themes, custom websites, web design portfolio"
      />

      <section className="bg-purple text-white py-24 px-6 border-b-8 border-yellow">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-sm font-heading text-yellow mb-4">
              <Sparkles className="w-4 h-4" />
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow text-white">
              Websites That Look Good and Actually Work
            </h1>
            <p className="text-xl font-body text-off-white/95">
              Real projects for real businesses. Every site is built with SEO, speed, and conversions in mind — not just pretty pixels.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section - Top */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-purple/20 overflow-hidden">
              {/* Mobile Dropdown Header */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple" />
                  <h3 className="text-lg font-heading font-bold text-charcoal">
                    Filter by Tag
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {activeTag && (
                    <span className="text-xs font-body text-charcoal/60">
                      {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                    </span>
                  )}
                  <ChevronDown className={`w-5 h-5 text-charcoal/60 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Desktop Header */}
              <div className="hidden lg:flex items-center justify-between px-6 py-4 border-b border-charcoal/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple" />
                  <h3 className="text-lg font-heading font-bold text-charcoal">
                    Filter by Tag
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm font-body text-charcoal/60">
                    {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''} {activeTag ? `with "${activeTag}" tag` : 'total'}
                  </p>
                  {activeTag && (
                    <button
                      onClick={clearFilter}
                      className="px-4 py-2 rounded-lg text-sm font-body font-medium bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 border border-charcoal/10 transition-all duration-300 flex items-center gap-2"
                    >
                      Clear Filter
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Filter Content */}
              <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block px-6 py-4`}>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/portfolio"
                    onClick={() => setIsFilterOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-300 ${
                      !activeTag
                        ? 'bg-purple text-white shadow-md'
                        : 'bg-charcoal/5 text-charcoal/70 hover:bg-purple/10 hover:text-purple'
                    }`}
                  >
                    All Projects
                  </Link>
                  
                  {allTags.map(tagName => (
                    <Link
                      key={tagName}
                      href={`/portfolio?tag=${encodeURIComponent(tagName.toLowerCase())}`}
                      onClick={() => setIsFilterOpen(false)}
                      className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-all duration-300 ${
                        activeTag?.toLowerCase() === tagName.toLowerCase()
                          ? 'bg-purple text-white shadow-md'
                          : 'bg-charcoal/5 text-charcoal/70 hover:bg-purple/10 hover:text-purple'
                      }`}
                    >
                      {tagName}
                    </Link>
                  ))}
                  
                  {activeTag && (
                    <button
                      onClick={() => {
                        clearFilter();
                        setIsFilterOpen(false);
                      }}
                      className="lg:hidden px-4 py-2 rounded-lg text-sm font-body font-medium bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 border border-charcoal/10 transition-all duration-300 flex items-center gap-2"
                    >
                      Clear Filter
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div>
              {/* Portfolio Grid - Slide Style with Color */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {filteredItems.map((item, index) => {
                  const color = item.data.color || 'purple';
                  const colorClass = colorClasses[color] || colorClasses.purple;
                  const Icon = categoryIcons[item.data.category] || ShoppingCart;
                  
                  return (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative"
                    >
                      <div className={`h-full bg-gradient-to-br ${colorClass.gradient} rounded-2xl p-[2px] shadow-lg hover:shadow-2xl transition-all duration-300`}>
                        <div className={`h-full ${colorClass.accent} rounded-[calc(1rem-2px)] p-6 flex flex-col relative overflow-hidden`}>
                          {/* Colored accent bar at top */}
                          <div className={`absolute top-0 left-0 right-0 h-2 ${colorClass.bg}`} />
                          
                          {/* Slide Number */}
                          <div className="absolute top-4 right-4 text-4xl font-heading font-bold text-charcoal/10 group-hover:text-charcoal/20 transition-opacity">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          
                          {/* Image */}
                          <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden -mx-2 -mt-2">
                            {item.data.image ? (
                              <>
                                <Image
                                  src={item.data.image}
                                  alt={item.data.title}
                                  fill
                                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${colorClass.bg} opacity-20`} />
                              </>
                            ) : (
                              <div className={`w-full h-full ${colorClass.bg} flex items-center justify-center`}>
                                <Icon className="w-12 h-12 text-charcoal/20" />
                              </div>
                            )}
                          </div>
                          
                          {/* Category Badge */}
                          <div className={`inline-flex items-center gap-2 mb-4 p-2 rounded-lg bg-white/50 border ${colorClass.border} w-fit backdrop-blur-sm`}>
                            <Icon className="w-4 h-4 text-charcoal" />
                            <span className="text-xs uppercase tracking-[0.2em] font-heading text-charcoal">
                              {item.data.category}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-xl font-heading font-bold text-charcoal mb-2 group-hover:opacity-80 transition-opacity pr-12">
                            {item.data.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-sm font-body text-charcoal/70 mb-4 flex-grow leading-relaxed">
                            {item.data.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {(item.data.tags || []).map(tag => (
                              <span
                                key={tag}
                                className="text-xs font-body px-2 py-0.5 rounded-full bg-white/50 text-charcoal border border-charcoal/20 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          {/* Project Info */}
                          <div className="text-xs font-body text-charcoal/60 mb-4 space-y-1">
                            <div>Project Name: {item.data.title}</div>
                            <div>Category: {item.data.category}</div>
                          </div>
                          
                          {/* CTA */}
                          {item.data.link?.startsWith('http') ? (
                            <a
                              href={item.data.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto text-sm py-2 px-4 rounded-lg font-body font-medium bg-white text-charcoal border-2 border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                            >
                              View Project
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <Link
                              href={item.data.link}
                              className="mt-auto text-sm py-2 px-4 rounded-lg font-body font-medium bg-white text-charcoal border-2 border-charcoal/20 hover:bg-charcoal hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                            >
                              View Project
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg font-body text-charcoal/70 mb-4">
                    No projects found with this tag.
                  </p>
                  <button
                    onClick={clearFilter}
                    className="px-6 py-3 rounded-lg bg-purple text-white font-body font-medium hover:bg-purple/90 transition-colors"
                  >
                    View All Projects
                  </button>
                </div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-purple/10 via-pink/10 to-yellow/10 border-4 border-purple/30 rounded-3xl p-8 md:p-12 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                  Want Something Similar?
                </h2>
                <p className="text-lg font-body text-charcoal/80 mb-8 max-w-2xl mx-auto">
                  Every project starts with understanding your goals. Let&apos;s chat about what you need and how we can make it happen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/contact">Get in Touch</CTAButton>
                  <CTAButton href="/services/website" variant="secondary">
                    See Services
                  </CTAButton>
                </div>
              </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolioItems = getPortfolioItems();
  
  return {
    props: {
      portfolioItems,
    },
  };
}
