import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form 
        name="contact" 
        method="post" 
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium font-body text-white mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border-2 border-white/30 font-body text-white bg-white/10 focus:outline-none focus:border-white/50 transition-colors resize-none placeholder-white/70"
            placeholder="Tell me about your project, questions, or just say hi!"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow text-purple px-6 py-3 rounded-lg font-bold font-body hover:bg-yellow/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 border border-green-400/50 text-green-200 rounded-lg text-center font-body">
            Thanks! I&apos;ll get back to you soon. 🎉
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-400/50 text-red-200 rounded-lg text-center font-body">
            Oops! Something went wrong. Please try again or email me directly.
          </div>
        )}
      </form>
    </div>
  );
}
