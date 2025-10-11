import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { Mail } from 'lucide-react';

export default function Contact({ globalData }) {
  return (
    <Layout>
      <SEO title="Contact - Moxie Themes" description="Get in touch with Moxie for SEO audits, Shopify setup, or questions about upcoming templates" />

      {/* Contact Section */}
      <section className="min-h-screen bg-purple flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Email Option */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-purple" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-4">Just Email Me</h3>
              <p className="text-lg font-body text-off-white mb-6">
                Old school but it works! Drop me a line anytime.
              </p>
              <a 
                href="mailto:hello@moxiethemes.com" 
                className="text-yellow hover:text-yellow/80 transition-colors font-body font-medium text-lg"
              >
                hello@moxiethemes.com
              </a>
            </div>

            {/* Contact Form */}
            <div className="w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold font-heading text-white mb-6 text-center">
                  Or just fill this out! 📝
                </h2>
                <ContactForm />
              </div>
            </div>
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
