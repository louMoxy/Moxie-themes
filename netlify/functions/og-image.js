exports.handler = async (event, context) => {
  const { title, description, author, date } = event.queryStringParameters || {};
  
  try {
    // Create SVG content
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
          <radialGradient id="overlay1" cx="20%" cy="80%" r="50%">
            <stop offset="0%" style="stop-color:rgba(120,119,198,0.3);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(120,119,198,0);stop-opacity:0" />
          </radialGradient>
          <radialGradient id="overlay2" cx="80%" cy="20%" r="50%">
            <stop offset="0%" style="stop-color:rgba(255,119,198,0.3);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(255,119,198,0);stop-opacity:0" />
          </radialGradient>
          <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#ff6b6b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4ecdc4;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bg)"/>
        
        <!-- Overlay patterns -->
        <rect width="1200" height="630" fill="url(#overlay1)"/>
        <rect width="1200" height="630" fill="url(#overlay2)"/>
        
        <!-- Logo -->
        <g transform="translate(600, 120)">
          <rect x="-40" y="-40" width="80" height="80" rx="16" fill="#ffd700"/>
          <text x="0" y="10" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="bold" fill="#1a1a2e">M</text>
          <text x="60" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">Moxie Themes</text>
        </g>
        
        <!-- Title -->
        <text x="600" y="280" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">
          <tspan x="600" dy="0">${(title || 'Moxie Themes Blog').substring(0, 50)}${(title || '').length > 50 ? '...' : ''}</tspan>
        </text>
        
        <!-- Description -->
        <text x="600" y="340" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#e0e0e0">
          <tspan x="600" dy="0">${(description || 'Premium Shopify themes and SEO services').substring(0, 80)}${(description || '').length > 80 ? '...' : ''}</tspan>
        </text>
        
        <!-- Meta info -->
        <text x="600" y="400" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#b0b0b0">
          <tspan x="600" dy="0">By ${author || 'Moxie Themes'}${date ? ` • ${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}` : ''}</tspan>
        </text>
        
        <!-- Bottom accent -->
        <rect x="0" y="622" width="1200" height="8" fill="url(#accent)"/>
      </svg>
    `;
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000'
      },
      body: svg
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
