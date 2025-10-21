# Automated OG Image Generation for Netlify

This guide provides multiple automation options for generating Open Graph images for your blog posts.

## 🚀 **Option 1: Netlify Functions (Recommended)**

### Setup
1. **Install Puppeteer**:
   ```bash
   npm install puppeteer
   ```

2. **Deploy to Netlify**:
   - The `netlify/functions/og-image.js` function will automatically generate images
   - Images are generated on-demand and cached
   - No build-time processing needed

### Benefits
- ✅ **Dynamic**: Each blog post gets a unique image
- ✅ **Fast**: Images cached after first generation
- ✅ **Scalable**: Works with any number of blog posts
- ✅ **No maintenance**: Fully automated

### Usage
Your SEO component automatically uses:
```
/.netlify/functions/og-image?title=Your%20Title&description=Your%20Description&author=Author&date=2025-01-27
```

---

## 🏗️ **Option 2: Build-Time Generation**

### Setup
1. **Install Puppeteer**:
   ```bash
   npm install puppeteer
   ```

2. **Run the generator**:
   ```bash
   npm run generate:og
   ```

3. **Use in build process**:
   ```bash
   npm run build:og
   ```

### Benefits
- ✅ **Static**: All images generated at build time
- ✅ **Fast loading**: No server processing needed
- ✅ **Reliable**: No function dependencies

### How it works
- Scans all `.mdx` files in `posts/` directory
- Extracts frontmatter (title, description, author, date)
- Generates unique OG image for each post
- Saves as `public/images/og-{slug}.jpg`

---

## 🤖 **Option 3: GitHub Actions Automation**

### Setup
1. **Enable GitHub Actions** in your repository
2. **The workflow runs automatically** when you:
   - Push new blog posts
   - Update existing posts
   - Manually trigger via GitHub UI

### Benefits
- ✅ **Fully automated**: No manual intervention needed
- ✅ **Version controlled**: Images committed to repository
- ✅ **Consistent**: Same process for all team members

### Workflow triggers
- Push to `posts/**` directory
- Push to `scripts/**` directory
- Manual trigger via GitHub Actions UI

---

## 📦 **Option 4: Package.json Scripts**

### Available Commands
```bash
# Generate OG images only
npm run generate:og

# Build with OG image generation
npm run build:og

# Regular build (no OG generation)
npm run build
```

### Integration with Netlify
Update your `netlify.toml` build command:
```toml
[build]
  command = "npm run build:og"
```

---

## 🔧 **Configuration Options**

### Customizing Images
Edit the HTML template in:
- `netlify/functions/og-image.js` (for dynamic)
- `scripts/generate-og-images.js` (for build-time)

### Brand Customization
- **Colors**: Update gradient backgrounds
- **Logo**: Modify the "M" logo styling
- **Typography**: Change fonts and sizes
- **Layout**: Adjust spacing and positioning

### Performance Optimization
- **Caching**: Images cached for 1 year
- **Compression**: JPEG quality set to 90%
- **Size**: Optimized 1200x630px dimensions

---

## 🧪 **Testing Your Setup**

### Local Testing
```bash
# Test Netlify Functions locally
netlify dev

# Test build-time generation
npm run generate:og
```

### Social Media Testing
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

---

## 📊 **Performance Comparison**

| Method | Speed | Maintenance | Scalability | Cost |
|--------|-------|-------------|-------------|------|
| Netlify Functions | ⚡ Fast (cached) | 🔧 Low | 📈 High | 💰 Low |
| Build-time | ⚡⚡ Fastest | 🔧 Medium | 📈 Medium | 💰 Low |
| GitHub Actions | ⚡ Fast | 🔧 Low | 📈 High | 💰 Free |
| Manual | 🐌 Slow | 🔧 High | 📈 Low | 💰 High |

---

## 🎯 **Recommended Approach**

### For Most Users: Netlify Functions
- Easiest to set up
- Fully automated
- Scales automatically
- No maintenance required

### For High Traffic: Build-time Generation
- Fastest loading
- No server processing
- Predictable performance
- Requires build process

### For Teams: GitHub Actions
- Fully automated
- Version controlled
- Consistent across team
- No server dependencies

---

## 🚨 **Troubleshooting**

### Common Issues
1. **Puppeteer not found**: Run `npm install puppeteer`
2. **Function timeout**: Increase timeout in Netlify settings
3. **Image not loading**: Check function logs in Netlify dashboard
4. **Build fails**: Ensure all dependencies are installed

### Debug Commands
```bash
# Test function locally
netlify functions:serve

# Check generated images
ls -la public/images/og-*.jpg

# Validate HTML template
node -e "console.log(require('./scripts/generate-og-images.js'))"
```

---

## 🔄 **Migration Guide**

### From Static to Dynamic
1. Deploy Netlify Functions
2. Update SEO component
3. Test with social media debuggers
4. Remove static images

### From Dynamic to Build-time
1. Set up build script
2. Update package.json
3. Configure Netlify build command
4. Test build process

Choose the automation method that best fits your workflow and requirements! 🎉
