export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Log the form submission
    console.log('Contact form submission:', { name, email, message });
    
    // For now, we'll just return success
    // You can integrate with email services like:
    // - SendGrid
    // - Resend
    // - Nodemailer with SMTP
    // - Or use a service like Formspree
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
