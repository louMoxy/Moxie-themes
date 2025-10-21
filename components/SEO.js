import Head from 'next/head';

export default function SEO({ 
  title, 
  description, 
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
  author = 'Moxie Themes',
  noindex = false,
  publishedTime,
  modifiedTime,
  section,
  tags
}) {
  const siteName = 'Moxie Themes';
  const siteUrl = 'https://moxiethemes.com';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';
  
  // Generate dynamic OG image URL for blog posts
  const dynamicOgImage = ogImage || (canonical && canonical.includes('/blog/') 
    ? `${siteUrl}/api/og-image?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&author=${encodeURIComponent(author)}${publishedTime ? `&date=${publishedTime}` : ''}`
    : `${siteUrl}/api/og-default`);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={dynamicOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={dynamicOgImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@moxie_themes" />
      <meta name="twitter:creator" content="@moxie_themes" />
      
      {/* Additional SEO */}
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Additional Social Media Meta */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ogType === 'article' ? "Article" : "WebSite",
            "name": fullTitle,
            "description": description,
            "url": fullCanonical,
            "image": dynamicOgImage,
            ...(ogType === 'article' && {
              "author": {
                "@type": "Person",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": siteName,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteUrl}/images/logo.png`
                }
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime || publishedTime,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": fullCanonical
              }
            })
          })
        }}
      />
    </Head>
  );
}
