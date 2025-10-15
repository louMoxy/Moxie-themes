import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Mail, Phone, X, InstagramIcon, ExternalLink } from 'lucide-react';
import MailerLiteForm from '../components/MailerLiteForm';
import Image from 'next/image';

export default function BusinessCard() {
  return (
    <Layout>
      <SEO 
        title="Louise Moxhay - Business Card" 
        description="Louise Moxhay - Web Designer & SEO Specialist. Pretty websites are nice. I make them profitable."
        canonical="/business-card"
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple via-pink to-yellow flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-2xl w-full overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-purple to-pink p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              {/* Placeholder for photo - will be added later */}
              <div className="w-32 h-32 mx-auto bg-white/20 rounded-full border-4 border-white/30 flex items-center justify-center mb-4 overflow-hidden">
                        <Image src="/images/profile.jpg" alt="Louise Moxhay" 
                            className="object-cover scale-330 object-[45%_43%]"
 width={500} height={500} />
                  </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                Louise Moxhay
              </h1>
              <p className="text-white/90 text-lg font-body">
                Web Designer & SEO Specialist
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="p-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center mb-8"
            >
              <p className="text-2xl font-heading font-bold text-charcoal mb-2">
                Pretty websites are nice.
              </p>
              <p className="text-2xl font-heading font-bold text-purple">
                I make them profitable.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <a 
                href="mailto:howdy@moxiethemes.com"
                className="flex items-center gap-3 p-4 bg-charcoal/5 rounded-xl hover:bg-charcoal/10 transition-colors group"
              >
                <Mail className="w-5 h-5 text-purple group-hover:text-pink transition-colors" />
                <span className="font-body text-charcoal">howdy@moxiethemes.com</span>
              </a>
              
              <a 
                href="tel:07803419135"
                className="flex items-center gap-3 p-4 bg-charcoal/5 rounded-xl hover:bg-charcoal/10 transition-colors group"
              >
                <Phone className="w-5 h-5 text-purple group-hover:text-pink transition-colors" />
                <span className="font-body text-charcoal">07803419135</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">Connect with me</h3>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://x.com/moxie_themes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-charcoal/5 rounded-xl hover:bg-charcoal/10 transition-colors group"
                >
                  <X className="w-6 h-6 text-charcoal group-hover:text-purple transition-colors" />
                </a>
                <a 
                  href="https://instagram.com/moxiethemes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-charcoal/5 rounded-xl hover:bg-charcoal/10 transition-colors group"
                >
                  <InstagramIcon className="w-6 h-6 text-charcoal group-hover:text-pink transition-colors" />
                </a>
              </div>
            </motion.div>

            {/* Services & Templates Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">What I do</h3>
              
              <Link 
                href="/services"
                className="block p-4 bg-gradient-to-r from-purple/10 to-pink/10 rounded-xl hover:from-purple/20 hover:to-pink/20 transition-all group border border-purple/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal group-hover:text-purple transition-colors">
                      Services
                    </h4>
                    <p className="text-sm text-charcoal/70 font-body">
                      SEO audits, website design & setup
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-charcoal/50 group-hover:text-purple transition-colors" />
                </div>
              </Link>

              <Link 
                href="/templates/y2k-theme"
                className="block p-4 bg-gradient-to-r from-yellow/10 to-teal/10 rounded-xl hover:from-yellow/20 hover:to-teal/20 transition-all group border border-yellow/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-charcoal group-hover:text-yellow transition-colors">
                      Templates
                    </h4>
                    <p className="text-sm text-charcoal/70 font-body">
                      Unique Shopify themes that convert
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-charcoal/50 group-hover:text-yellow transition-colors" />
                </div>
              </Link>
            </motion.div>

            {/* Newsletter Signup (bare form) */}
            <div className="mt-12 max-w-md mx-auto">
              <h3 className="text-lg font-heading font-semibold text-charcoal text-center mb-2">Join the Moxie List</h3>
              <p className="text-sm font-body text-charcoal/80 text-center mb-4">Get new templates, SEO tips, and behind-the-scenes bits. No spam, ever.</p>
              <MailerLiteForm />
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-8 pt-6 border-t border-charcoal/10 text-center"
            >
              <p className="text-sm text-charcoal/60 font-body">
                Moxie Themes © 2025
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
