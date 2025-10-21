import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { Home, ArrowLeft, Mail, X, Instagram as InstagramIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Custom404({ globalData }) {
  const router = useRouter();


  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <SEO 
        title="404 - Page Not Found" 
        description="Oops! The page you're looking for doesn't exist. Let's get you back on track with our premium Shopify templates and SEO services." 
        canonical="/404"
        keywords="404 error, page not found, Moxie Themes, Shopify templates, SEO services"
      />

      {/* 404 Hero Section */}
      <section className="min-h-screen bg-purple flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold font-heading text-yellow mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-pink mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-off-white mb-6">
              Oops! This page went missing
            </h2>
            <p className="text-lg font-body text-off-white mb-8 max-w-2xl mx-auto">
              Looks like this page decided to take a coffee break. Don't worry though - 
              we'll get you back to the good stuff in just a moment!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleGoHome}
              className="bg-yellow text-purple px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-yellow/90 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </button>
            <button 
              onClick={handleGoBack}
              className="border-2 border-pink text-white px-8 py-4 rounded-lg font-bold font-body text-lg hover:bg-pink hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Contact Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold font-heading text-off-white mb-4">
              Still lost? Let's chat!
            </h3>
            <p className="text-lg font-body text-off-white mb-6">
              Can't find what you're looking for? Drop me a line and I'll help you out.
            </p>
            
            <ContactForm />
          </div>

          {/* Footer Links */}
          <div className="mt-12">
            <div className="mb-6">
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
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
