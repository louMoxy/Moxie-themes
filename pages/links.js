import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { LogoSvg } from '../components/LogoSvg';
import { 
  Rocket, 
  Mail, 
  ArrowRight, 
  X, 
  Instagram as InstagramIcon,
  ShoppingCart,
  FileText
} from 'lucide-react';

const linkItems = [
  {
    href: '/services/website',
    label: '7-Day Website Launch',
    description: 'Get a beautiful, SEO-friendly website in just one week',
    icon: Rocket,
    color: 'from-purple via-pink to-yellow',
    bgColor: 'bg-purple/10',
    borderColor: 'border-purple/30'
  },
  {
    href: '/contact',
    label: 'Get in Touch',
    description: 'Book a call or send a message',
    icon: Mail,
    color: 'from-pink via-yellow to-teal',
    bgColor: 'bg-pink/10',
    borderColor: 'border-pink/30'
  },
  {
    href: '/services',
    label: 'All Services',
    description: 'SEO audits, fixes, and website design',
    icon: ShoppingCart,
    color: 'from-teal via-purple to-pink',
    bgColor: 'bg-teal/10',
    borderColor: 'border-teal/30'
  },
  {
    href: '/blog',
    label: 'Blog',
    description: 'SEO tips, design insights, and Shopify guides',
    icon: FileText,
    color: 'from-yellow via-pink to-purple',
    bgColor: 'bg-yellow/10',
    borderColor: 'border-yellow/30'
  }
];

export default function Links() {
  return (
    <Layout>
      <SEO
        title="Links – Moxie Themes"
        description="Quick links to key services, contact, and resources"
        canonical="/links"
        keywords="Moxie Themes links, website services, contact"
      />

      <div className="min-h-screen bg-purple relative overflow-hidden py-12 px-6">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-16 w-96 h-96 bg-pink/30 blur-[120px]" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-yellow/20 blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/20 blur-[160px]" />
          
          {/* Wave SVG overlay */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-30"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: '40%' }}
          >
            <path
              d="M0,192 C320,96 490,288 720,192 C950,96 1110,32 1440,160 L1440,320 L0,320Z"
              fill="url(#links-wave)"
            />
            <defs>
              <linearGradient id="links-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd8ef" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#fee440" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#d2f4ff" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Top wave */}
          <svg
            className="absolute top-0 left-0 w-full opacity-20"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            style={{ height: '30%' }}
          >
            <path
              d="M0,80 C320,160 490,0 720,80 C950,160 1110,240 1440,120 L1440,0 L0,0Z"
              fill="url(#links-wave-top)"
            />
            <defs>
              <linearGradient id="links-wave-top" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9b5de5" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#ffd8ef" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#fee440" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Link Cards */}
          <div className="space-y-4 mb-12">
            {linkItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-purple via-pink to-yellow"
                >
                  <div className="bg-white rounded-[calc(1rem-1px)] p-6 flex items-center gap-4 transition-all duration-300 group-hover:shadow-xl">
                    <div className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-charcoal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-charcoal mb-1 group-hover:text-purple transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-sm font-body text-charcoal/70">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-charcoal/40 group-hover:text-purple group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-body text-white/80 mb-4">Follow along</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://x.com/moxie_themes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-purple hover:border-white transition-all duration-300"
                aria-label="Twitter"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/moxiethemes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-pink hover:text-white hover:border-pink transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@moxiethemes.com"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-teal hover:text-white hover:border-teal transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

