import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/HeroSection';
import PickYourFix from '../components/PickYourFix';
import { Mail,  X, Instagram as InstagramIcon } from 'lucide-react';
import { Newseletter } from '../components/Newseletter';

export default function Index({ globalData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moxie Themes",
    "url": "https://moxiethemes.com",
    "logo": "https://moxiethemes.com/images/logo.png",
    "description": "Premium Shopify templates and SEO services for ambitious small businesses",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "hello@moxiethemes.com"
    },
    "sameAs": [
      "https://x.com/moxie_themes",
      "https://instagram.com/moxiethemes"
    ],
    "offers": [
      {
        "@type": "Service",
        "name": "Shopify Templates",
        "description": "Unique, fast-loading Shopify templates with modern design"
      },
      {
        "@type": "Service", 
        "name": "SEO Audits",
        "description": "Comprehensive SEO audits to improve your website's search rankings"
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Premium Shopify Templates & SEO Services" 
        description="Transform your Shopify store with our unique, fast-loading templates and expert SEO audits. Built for ambitious small businesses who want to stand out and rank higher." 
        canonical="/"
        keywords="Shopify templates, SEO services, ecommerce design, Shopify themes, website optimization, small business SEO, custom Shopify stores"
      />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <HeroSection />

      <PickYourFix />

      <Newseletter />


      {/* Contact Form */}
      <section id="contact-form" className="bg-purple py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-off-white mb-6">
            Let&apos;s Chat
          </h2>
          <p className="text-lg font-body text-off-white mb-8">
            Got a project in mind? Questions about SEO? Or just want to say hi? I&apos;d love to hear from you.
          </p>
          
           <ContactForm />
         </div>
      </section>

      {/* Closing CTA / Footer */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-off-white mb-8">
            Ready to stop babysitting a useless website?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#contact-form" 
              className="bg-yellow text-purple px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-yellow/90 transition-colors"
            >
              Book an SEO Audit
            </a>
            <a 
              href="#newsletter" 
              className="border-2 border-pink text-white px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-pink hover:text-white transition-colors"
            >
              Join the Template Waitlist
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
          
          {/* Social Icons */}
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

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
