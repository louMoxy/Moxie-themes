const puppeteer = require('puppeteer');

exports.handler = async (event, context) => {
  const { title, description, author, date } = event.queryStringParameters || {};
  
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
          }
          .content {
            position: relative;
            z-index: 1;
            text-align: center;
            padding: 60px;
            max-width: 900px;
          }
          .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
          }
          .logo-icon {
            width: 80px;
            height: 80px;
            background: #ffd700;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 24px;
            font-size: 36px;
            font-weight: bold;
            color: #1a1a2e;
          }
          .logo-text {
            font-size: 48px;
            font-weight: bold;
            color: #ffffff;
          }
          .title {
            font-size: 48px;
            font-weight: bold;
            color: #ffffff;
            line-height: 1.2;
            margin-bottom: 24px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          .description {
            font-size: 24px;
            color: #e0e0e0;
            line-height: 1.4;
            margin-bottom: 32px;
          }
          .meta {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            font-size: 18px;
            color: #b0b0b0;
          }
          .accent {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 8px;
            background: linear-gradient(90deg, #ffd700 0%, #ff6b6b 50%, #4ecdc4 100%);
          }
        </style>
      </head>
      <body>
        <div class="content">
          <div class="logo">
            <div class="logo-icon">M</div>
            <div class="logo-text">Moxie Themes</div>
          </div>
          <div class="title">${title || 'Moxie Themes Blog'}</div>
          <div class="description">${description || 'Premium Shopify themes and SEO services'}</div>
          <div class="meta">
            <span>By ${author || 'Moxie Themes'}</span>
            ${date ? `<span>•</span><span>${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>` : ''}
          </div>
        </div>
        <div class="accent"></div>
      </body>
      </html>
    `;
    
    await page.setContent(html);
    const screenshot = await page.screenshot({ type: 'png' });
    await browser.close();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000'
      },
      body: screenshot.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
