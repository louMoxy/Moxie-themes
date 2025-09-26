import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { LogoSvg } from '../components/LogoSvg';
import MailerLiteForm from '../components/MailerLiteForm';
import ContactForm from '../components/ContactForm';
import { Search, Wrench, Store, ClipboardCheck, Star, Zap, Sprout, Mail, Smartphone, X, Linkedin, Instagram as InstagramIcon } from 'lucide-react';

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title="Moxie Themes – Coming Soon" description="Fun, fast, SEO-friendly Shopify templates for ambitious small businesses" />
      
      {/* Hero Section */}
      <section className="bg-purple min-h-screen flex flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-12">
          <LogoSvg />
        </div>
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-yellow text-center mb-8 leading-tight">
          Fun, fast, SEO-friendly Shopify templates (coming soon!)
        </h2>
        
        {/* Sub-headline */}
        <p className="text-xl md:text-2xl font-body text-off-white text-center mb-12 max-w-3xl leading-relaxed">
          Hi, I'm Moxie. I help ambitious small businesses launch websites that look brilliant and get found.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
           href="#newsletter" 
            className="bg-yellow text-purple px-8 py-4 rounded-lg font-bold font-body text-lg transition-colors border-2 border-yellow hover:text-yellow hover:bg-purple"
          >
            Join the Waitlist
          </a>
          <a 
            href="#contact-form" 
            className="border-2 border-pink text-white px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-pink hover:text-white transition-colors"
          >
            Get an SEO Audit
          </a>
        </div>
      </section>

      {/* Services Strip */}
      <section className="bg-off-white py-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple/5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink/5 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-4">
              How I Can Help You
            </h2>
            <p className="text-lg font-body text-charcoal/70 max-w-2xl mx-auto">
              From finding what's broken to launching your dream store, I've got you covered every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="#contact-form" 
              className="group flex flex-col items-center p-8 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-24 h-24 bg-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-3">SEO Audit</h3>
              <p className="font-body text-charcoal/70 text-center mb-4 leading-relaxed">
                Find what's broken, what's costing you traffic, and what to fix first.
              </p>
              <div className="text-sm font-body text-purple font-semibold">
                Get a clear roadmap →
              </div>
            </a>
            
            <a 
              href="#contact-form" 
              className="group flex flex-col items-center p-8 rounded-2xl bg-purple hover:bg-purple/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-24 h-24 bg-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Wrench className="w-10 h-10 text-charcoal" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-3">Fix Packages</h3>
              <p className="font-body text-white text-center mb-4 leading-relaxed">
                I'll roll up my sleeves and fix everything for you. No technical headaches.
              </p>
              <div className="text-sm font-body text-yellow font-semibold">
                Usually 10-12 hours →
              </div>
            </a>
            
            <a 
              href="#contact-form" 
              className="group flex flex-col items-center p-8 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-24 h-24 bg-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-3">Shopify Setup</h3>
              <p className="font-body text-charcoal/70 text-center mb-4 leading-relaxed">
                From products to payments, I'll set you up properly so you can launch with confidence.
              </p>
              <div className="text-sm font-body text-pink font-semibold">
                Launch without stress →
              </div>
            </a>
          </div>
        </div>
      </section>

    <div className="flex flex-col lg:flex-row w-full">
            {/* SEO Audit Highlight Section */}
      <section className="py-16 px-6 flex-1" style={{background: 'linear-gradient(135deg, #9B5DE5 0%, #F5F5F2 100%)'}}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-end lg:flex-row">
            <div className="text-center md:text-left flex-1">
              <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                <ClipboardCheck className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            
            <div className="flex-2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-6">
                What's an SEO Audit?
              </h2>
              <p className="text-lg font-body text-charcoal mb-8 leading-relaxed">
                It's a health check for your site. I'll tell you what's broken, what's costing you traffic, and what to fix first. You'll get a clear, no-fluff report — and I can fix it for you if you'd rather not wrestle with it yourself.
              </p>
              <a 
                href="#contact-form" 
                className="inline-block bg-yellow text-purple px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-charcoal/90 transition-colors"
              >
                Book Your Audit – £80
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-yellow px-6 flex-1 relative overflow-hidden flex items-center justify-center h-auto py-18">
        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none sm:opacity-100 opacity-70">
          <div className="absolute top-8 left-8 w-12 h-12 bg-pink/20 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <Star className="w-6 h-6 text-pink/60" />
          </div>
          <div className="absolute top-20 right-16 w-16 h-16 bg-purple/20 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <Zap className="w-8 h-8 text-purple/60" />
          </div>
          <div className="absolute bottom-12 left-20 w-14 h-14 bg-teal/20 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
            <Sprout className="w-7 h-7 text-teal/60" />
          </div>
          <div className="absolute top-19 left-1/3 w-10 h-10 bg-pink/15 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}>
            <Star className="w-5 h-5 text-pink/50" />
          </div>
          <div className="absolute bottom-10 right-1/4 w-18 h-18 bg-purple/15 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}>
            <Zap className="w-9 h-9 text-purple/50" />
          </div>
          <div className="absolute top-1/2 right-8 w-13 h-13 bg-teal/15 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '2.5s', animationDuration: '3s'}}>
            <Sprout className="w-6 h-6 text-teal/50" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-6">
            Shopify Templates with Personality
          </h2>
          <p className="text-xl font-body text-charcoal mb-12">
            Unique designs, SEO built in, made for small UK businesses.
          </p>
        </div>
      </section>
    </div>

      {/* Email Signup */}
      <section id="newsletter" className="bg-off-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-6">
            Want first dibs?
          </h2>
          <p className="text-lg font-body text-charcoal mb-8">
            Be the first to know when my templates drop — and get the odd SEO tip while you're at it.
          </p>
          
          <div className="max-w-md mx-auto">
            <MailerLiteForm />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-purple py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-off-white mb-6">
            Let's Chat
          </h2>
          <p className="text-lg font-body text-off-white mb-8">
            Got a project in mind? Questions about SEO? Or just want to say hi? I'd love to hear from you.
          </p>
          
           <ContactForm />
         </div>
      </section>

      {/* Contact / Footer */}
      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-heading text-off-white mb-8">
            Let's Chat
                </h2>
          <p className="text-lg font-body text-off-white mb-8">
            Got a project or just want to chat shop?
          </p>
          
          <div className="mb-8">
            <a 
              href="mailto:hello@moxiethemes.com" 
              className="text-pink hover:text-teal transition-colors text-lg font-body flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              hello@moxiethemes.com
            </a>
          </div>
          
          {/* Social Icons Placeholder */}
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
