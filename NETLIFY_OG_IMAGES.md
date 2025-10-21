# Netlify-Compatible Open Graph Images

## Current Setup

The SEO component has been updated to use static images:
- **Blog posts**: `/images/og-blog.jpg`
- **Other pages**: `/images/og-default.jpg`

## Creating Your OG Images

### Option 1: Use the HTML Generator
1. Open `og-image-generator.html` in your browser
2. Fill in the details for your blog post
3. Right-click on the preview and "Save image as..."
4. Save as `og-blog.jpg` in your `public/images/` folder

### Option 2: Create Images Manually
Create 1200x630px images with your branding:
- **og-default.jpg**: For homepage and general pages
- **og-blog.jpg**: For blog posts

## Recommended Approach

### For Blog Posts
Create a template image that works for all blog posts:
1. Use your brand colors and logo
2. Leave space for the title (it will be in the meta description)
3. Include "Moxie Themes Blog" branding
4. Save as `public/images/og-blog.jpg`

### For Other Pages
Create a general branded image:
1. Include your logo and brand colors
2. Add "Premium Shopify themes and SEO services"
3. Save as `public/images/og-default.jpg`

## Testing Your Images

### Facebook Sharing Debugger
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter your blog post URL
3. Click "Debug" to see how it appears

### Twitter Card Validator
1. Visit: https://cards-dev.twitter.com/validator
2. Enter your blog post URL
3. See how it appears on Twitter

## Image Specifications

- **Size**: 1200x630px (optimal for all platforms)
- **Format**: JPG or PNG
- **File size**: Under 5MB
- **Aspect ratio**: 1.91:1

## Benefits of Static Images

✅ **Netlify Compatible**: Works with any hosting platform
✅ **Fast Loading**: No server-side generation needed
✅ **Reliable**: No API dependencies
✅ **Cost Effective**: No additional processing costs

## Future Enhancements

If you want dynamic images later, you could:
1. Use Netlify Functions with Puppeteer
2. Use a service like Cloudinary
3. Pre-generate images during build time
4. Use a third-party OG image service

## Current Implementation

The SEO component now uses:
```javascript
const dynamicOgImage = ogImage || (canonical && canonical.includes('/blog/') 
  ? `${siteUrl}/images/og-blog.jpg`
  : `${siteUrl}/images/og-default.jpg`);
```

This ensures all your social media shares will have professional, branded images that work perfectly with Netlify!
