import { useState } from 'react';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { Mail, CheckCircle, XCircle } from 'lucide-react';

export default function Contact({ globalData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset previous states
    setIsSuccess(false);
    setIsError(false);
    
    const formData = new FormData(e.target);
    
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setIsSuccess(true);
        // Reset form
        e.target.reset();
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error:', error);
        setIsError(true);
      });
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Moxie for SEO audits, Shopify setup, or questions about upcoming templates. Expert help for your ecommerce success." 
        canonical="/contact"
        keywords="contact Moxie Themes, SEO audit booking, Shopify consultation, ecommerce help, website optimization services"
      />

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
                
                {/* Success Message */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-green-100 font-body">
                      Thank you for your message! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                
                {/* Error Message */}
                {isError && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3">
                    <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <p className="text-red-100 font-body">
                      There was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
                
                <form name="contact" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium font-body text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/30 font-body text-white bg-white/10 focus:outline-none focus:border-white/50 transition-colors placeholder-white/70"
                      placeholder="What should I call you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium font-body text-white mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/30 font-body text-white bg-white/10 focus:outline-none focus:border-white/50 transition-colors placeholder-white/70"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium font-body text-white mb-2">
                      What can I help you with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-white/30 font-body text-white bg-white/10 focus:outline-none focus:border-white/50 transition-colors resize-none placeholder-white/70"
                      placeholder="Tell me about your project, questions, or just say hi!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow text-purple px-6 py-3 rounded-lg font-bold font-body hover:bg-yellow/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
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
