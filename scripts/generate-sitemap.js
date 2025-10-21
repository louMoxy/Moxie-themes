const fs = require('fs');
const path = require('path');

// Generate sitemap for Next.js blog
function generateSitemap() {
  console.log('🗺️ Generating sitemap...');
  
  const siteUrl = 'https://moxiethemes.com';
  const postsDir = path.join(__dirname, '../posts');
  const outDir = path.join(__dirname, '../out');
  
  // Ensure out directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Get all blog posts
  const postFiles = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));
  const blogPosts = postFiles.map(file => {
    const slug = file.replace('.mdx', '');
    return {
      url: `${siteUrl}/blog/${slug}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7
    };
  });
  
  // Define all pages
  const pages = [
    {
      url: `${siteUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${siteUrl}/blog/`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${siteUrl}/contact/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${siteUrl}/services/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${siteUrl}/business-card/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.5
    },
    {
      url: `${siteUrl}/templates/y2k-theme/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7
    }
  ];
  
  // Combine all URLs
  const allUrls = [...pages, ...blogPosts];
  
  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  // Write sitemap
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
  
  console.log(`✅ Sitemap generated with ${allUrls.length} URLs`);
  console.log('📄 Pages included:');
  allUrls.forEach(url => console.log(`  - ${url.url}`));
  
  return allUrls.length;
}

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };
