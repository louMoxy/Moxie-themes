const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// This script generates OG images for all blog posts at build time
async function generateOGImages() {
  console.log('🎨 Generating Open Graph images...');
  
  const postsDir = path.join(__dirname, '../posts');
  const imagesDir = path.join(__dirname, '../public/images');
  
  // Ensure images directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Get all MDX files
  const postFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));
  
  for (const file of postFiles) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) continue;
    
    const frontmatter = frontmatterMatch[1];
    const title = extractValue(frontmatter, 'title');
    const description = extractValue(frontmatter, 'description');
    const date = extractValue(frontmatter, 'date');
    const author = extractValue(frontmatter, 'author') || 'Moxie Themes';
    
    if (!title || !description) continue;
    
    const slug = file.replace('.mdx', '');
    const imagePath = path.join(imagesDir, `og-${slug}.jpg`);
    
    // Generate image using the HTML generator approach
    await generateImage({
      title,
      description,
      author,
      date,
      outputPath: imagePath
    });
    
    console.log(`✅ Generated OG image for: ${title}`);
  }
  
  // Generate default images
  await generateImage({
    title: 'Moxie Themes',
    description: 'Premium Shopify themes and SEO services',
    author: 'Moxie Themes',
    outputPath: path.join(imagesDir, 'og-default.jpg')
  });
  
  await generateImage({
    title: 'Moxie Themes Blog',
    description: 'Insights on Shopify themes, SEO, and ecommerce',
    author: 'Moxie Themes',
    outputPath: path.join(imagesDir, 'og-blog.jpg')
  });
  
  console.log('🎉 All OG images generated successfully!');
}

function extractValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match ? match[1].replace(/^["']|["']$/g, '') : null;
}

async function generateImage({ title, description, author, date, outputPath }) {
  // Create HTML content
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
        <div class="title">${title}</div>
        <div class="description">${description}</div>
        <div class="meta">
          <span>By ${author}</span>
          ${date ? `<span>•</span><span>${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>` : ''}
        </div>
      </div>
      <div class="accent"></div>
    </body>
    </html>
  `;
  
  // Write HTML to temporary file
  const tempHtmlPath = path.join(__dirname, 'temp-og.html');
  fs.writeFileSync(tempHtmlPath, html);
  
  try {
    // Use Puppeteer to generate image (requires puppeteer to be installed)
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.goto(`file://${tempHtmlPath}`);
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
    await browser.close();
  } catch (error) {
    console.warn('Puppeteer not available, skipping image generation');
    console.log('To enable image generation, run: npm install puppeteer');
  } finally {
    // Clean up temp file
    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }
  }
}

// Run if called directly
if (require.main === module) {
  generateOGImages().catch(console.error);
}

module.exports = { generateOGImages };
