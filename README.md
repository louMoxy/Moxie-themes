![Netlify Next.js Blog Template designed by Bejamas](https://user-images.githubusercontent.com/43764894/223762618-62742b4e-9424-44a7-8e85-9f7e4e19db54.png)


[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/nextjs-blog-theme)


A customizable blog starter using:

- [Next.js](https://github.com/vercel/next.js) v15 (Pages Router)
- [Tailwind](https://tailwindcss.com/) v4.x
- [Netlify Visual Editor](https://docs.netlify.com/visual-editor/overview/)
- Built-in [MDX](https://mdxjs.com/) support
- Includes modern design with dark & light themes

![Preview of blog theme. Author named Jay Doe and blog's name is "Next.js Blog Theme" with one blog post](nextjs-blog-theme-preview.png)

[Take a gander at the demo.](https://bejamas-nextjs-blog.netlify.app)

[Click here to watch the template walkthrough!](https://www.youtube.com/watch?v=63QZHs259dY)

## Table of Contents:

- [Getting Started](#getting-started)
  - [Setting Up Locally](#setting-up-locally)
  - [Using the Wizard](#using-the-setup-wizard)
- [Configuring the Blog](#configuring-the-blog)
- [Adding New Posts](#adding-new-posts)
- [Netlify Visual Editor](#netlify-visual-editor)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Renovate](#removing-renovate)

## Getting Started

---

You can get started with this project in two ways: locally or using the [setup wizard](https://nextjs-wizard.netlify.app/).

### Setting Up Locally

If you're doing it locally, start with clicking the [use this template](https://github.com/netlify-templates/nextjs-blog-theme/generate) button on GitHub. This will create a new repository with this template's files on your GitHub account. Once that is done, clone your new repository and navigate to it in your terminal.

From there, you can install the project's dependencies by running:

```shell
yarn install
```

Finally, you can run your project locally with:

```shell
yarn run dev
```

Open your browser and visit <http://localhost:3000>, your project should be running!

### Using the Setup Wizard

![Preview of Setup Wizard showing the initial page of a setup form](nextjs-setup-wizard.png)

Through the [setup wizard](https://nextjs-wizard.netlify.app/), you can create your blog in a few clicks and deploy to Netlify.

## Configuring the blog

The config is based on environment variables to make it easy to integrate with any Jamstack platform, like Netlify.

Here are the variables you can edit:
| Variable | Description | Options
| --- | --- | --- |
| `BLOG_NAME` | the name of your blog, displayed below the avatar ||
| `BLOG_TITLE` | the main header (`h1`) on the home page ||
| `BLOG_FOOTER_TEXT`| the text in the footer ||
| `BLOG_THEME` | the theme to pass to Tailwind | default |
| `BLOG_FONT_HEADINGS` | the font-family for all HTML headings, from `h1` to `h6`| sans-serif (default), serif, monospace|
| `BLOG_FONT_PARAGRAPHS` | the font-family for all other HTML elements | sans-serif (default), serif, monospace|

All of the env variables can be configured through the [Wizard](https://nextjs-wizard.netlify.app/) or through setting the project's environment variables. You can do this in your Netlify dashaboard (Site settings/Build & deploy/Environment/Environment variables).

https://user-images.githubusercontent.com/3611928/153997545-6dcdeef0-e570-49e7-93d6-ce0d393d16c9.mp4

[alt: video walkthrough of editing env vars]

If setting an environment variable isn't your cup of tea, the defaults can be changed in [`utils/global-data.js`](/utils/global-data.js). You can also remove the variables and hard code blog information where these variables are used in the code base.

- `BLOG_THEME, BLOG_FONT_HEADINGS, & BLOG_FONT_PARAGRAPHS` are used in [`tailwind-preset.js`](tailwind-preset.js)
- `BLOG_NAME, BLOG_TITLE, BLOG_FOOTER_TEXT` are used in [`pages/index.js`](pages/index.js) & [`pages/posts/[slug].js`](pages/posts/[slug].js) through the `globalData` object.

## Adding new posts

All posts are stored in `/posts` directory. To make a new post, create a new file with the [`.mdx` extension](https://mdxjs.com/).

Since the posts are written in `MDX` format you can pass props and components. That means you can use [React components](https://reactjs.org/docs/components-and-props.html) inside your posts to make them more interactive. Learn more about how to do so in the [MDX docs on content](https://mdxjs.com/docs/using-mdx/#components).

### Post Front Matter

Each blog post requires front matter at the top of the file. Here's the structure:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
description: "A brief description of your post for SEO and previews"
tags: ["seo", "shopify", "design"]
---
```

**Required fields:**
- `title`: The post title (displayed on the blog index and post page)
- `date`: Publication date in `YYYY-MM-DD` format (used for sorting)
- `description`: SEO description and preview text

**Optional fields:**
- `tags`: Array of tags (see [Tags System](#tags-system) below)

### Tags System

Tags are used to automatically style and categorize your blog posts. The system automatically assigns:
- **Icons**: Visual icons based on tag content
- **Emojis**: Emoji indicators for quick visual scanning
- **Background Colors**: Gradient backgrounds for post cards
- **Theme Colors**: Color schemes for animated elements

#### Available Tags

The following tags are recognized and will trigger specific styling:

| Tag | Icon | Emoji | Color Theme |
|-----|------|-------|-------------|
| `seo` | Search | 🔍 | Green/Emerald/Teal |
| `performance` | Zap | ⚡ | Orange/Amber/Yellow |
| `design` | Palette | 🎨 | Pink/Rose/Purple |
| `shopify` | ShoppingCart | 🛒 | Blue/Indigo/Purple |
| `conversion` | TrendingUp | 📈 | Red/Pink/Rose |
| `code` | Code | 💻 | Gray/Slate/Zinc |
| `mobile` | Smartphone | 📱 | Cyan/Sky/Blue |
| `website` | Globe | 🌐 | Violet/Purple/Fuchsia |
| `marketing` | Target | 🎯 | Emerald/Green/Lime |
| `tips` | Lightbulb | 💡 | Yellow/Amber/Orange |
| `launch` | Rocket | 🚀 | Purple/Violet/Indigo |
| `love` | Heart | ❤️ | Red/Pink/Rose |
| `featured` | Star | ⭐ | Yellow/Amber/Orange |
| `guide` | BookOpen | 📖 | Blue/Indigo/Purple |
| `social` | MessageSquare | 💬 | Cyan/Teal/Emerald |

**How it works:**
1. The system checks tags first (case-insensitive)
2. If no matching tag is found, it checks the post title for keywords
3. If still no match, it defaults to a design theme (Pink/Purple/Yellow)

**Example:**
```mdx
---
title: "SEO Basics for Shopify Stores"
date: "2025-01-15"
description: "Learn the fundamentals of SEO for your Shopify store"
tags: ["seo", "shopify", "guide"]
---
```

This post will automatically get:
- Search icon (from `seo` tag)
- 🔍 emoji
- Green/Emerald/Teal gradient background
- Green-themed animated elements

**Multiple Tags:**
You can use multiple tags. The system uses the first matching tag it finds. Order your tags by priority (most relevant first).

**Custom Tags:**
If you use a tag that's not in the list above, the system will:
- Use a default BookOpen icon
- Use 📝 emoji
- Use Pink/Purple/Yellow gradient (design theme)

https://user-images.githubusercontent.com/3611928/152727802-102ec296-41c8-446d-93ed-922d11187073.mp4

[alt: video walkthrough of adding a new blog post]

## Portfolio System

The portfolio section displays your work projects in a filterable, card-based layout. Projects are managed through MDX files, similar to blog posts.

### Adding Portfolio Items

All portfolio items are stored in the `/portfolio` directory. Create a new file with the `.mdx` extension for each project.

### Portfolio Front Matter

Each portfolio item requires front matter at the top of the file:

```mdx
---
title: 'Project Name'
description: 'A brief description of the project'
category: 'Shopify'
order: 1
tags: ['Shopify', 'E-commerce', 'Beauty']
image: '/images/portfolio/project-name.jpg'
link: '/templates/y2k-theme'
color: 'purple'
---
```

**Required fields:**
- `title`: Project title (displayed on the portfolio card)
- `description`: Brief description of the project
- `category`: Project category (see [Categories](#portfolio-categories) below)
- `tags`: Array of tags for filtering (see [Portfolio Tags](#portfolio-tags) below)
- `image`: Path to the project image (stored in `/public/images/portfolio/`)
- `link`: URL to view the project (can be internal or external)
- `color`: Color theme for the card (see [Color Themes](#portfolio-color-themes) below)

**Optional fields:**
- `order`: Number to control display order (lower numbers appear first). If not provided, items are sorted alphabetically by title.

### Portfolio Categories

Categories determine which icon appears on the portfolio card:

| Category | Icon | Use Case |
|----------|------|----------|
| `Shopify` | ShoppingCart | Shopify themes, stores, or e-commerce projects |
| `Custom Build` | Code2 | Custom websites built with Next.js, React, etc. |
| `Squarespace` | Square | Squarespace websites and designs |

### Portfolio Color Themes

Each portfolio item can use one of three color themes that control the card's visual styling:

| Color | Theme | Best For |
|-------|-------|----------|
| `purple` | Purple/Pink/Yellow gradient | Bold, creative projects |
| `teal` | Teal/Purple/Pink gradient | Modern, tech-focused projects |
| `pink` | Pink/Yellow/Purple gradient | Elegant, service-based projects |

The color theme affects:
- Card border gradient
- Top accent bar
- Background color
- Category badge styling

### Portfolio Tags

Tags are used for filtering projects on the portfolio page. Users can filter by clicking tags in the filter section.

**How filtering works:**
- Tags are extracted from all portfolio items
- Filter buttons are automatically generated
- Clicking a tag updates the URL (e.g., `/portfolio?tag=beauty`)
- Only projects with matching tags are displayed
- Filter state persists in the URL for sharing

**Tag best practices:**
- Use descriptive, relevant tags
- Common tags: `Beauty`, `E-commerce`, `Shopify`, `Squarespace`, `Custom Build`, `SEO`, `Animation`
- Tags are case-insensitive for filtering
- Multiple tags per project are supported

### Portfolio Images

Project images should be placed in `/public/images/portfolio/` directory.

**Image requirements:**
- Recommended size: 800x600px or similar aspect ratio
- Format: JPG, PNG, or WebP
- File naming: Use descriptive names (e.g., `beauty-brand.jpg`, `custom-website.png`)

**Image path format:**
```mdx
image: '/images/portfolio/your-image-name.jpg'
```

If an image is not provided, the card will display a colored placeholder with the category icon.

### Portfolio Sorting

Portfolio items are sorted by:
1. `order` field (if provided) - lower numbers appear first
2. Alphabetically by `title` (if no order is specified)

**Example:**
```mdx
---
title: 'Featured Project'
order: 1
---
```
This will appear before items with `order: 2` or no order field.

### Example Portfolio Item

```mdx
---
title: 'Beauty Brand E-commerce'
description: 'A bold, nostalgic e-commerce theme with animated elements and modern performance.'
category: 'Shopify'
order: 1
tags: ['Shopify', 'E-commerce', 'Beauty']
image: '/images/portfolio/beauty-brand.jpg'
link: 'https://example.com'
color: 'purple'
---

Your project description can go here. This content appears in the MDX body and can include markdown formatting.
```

### Portfolio Page Features

- **Filter System**: Top filter bar (dropdown on mobile, horizontal on desktop)
- **URL-based Filtering**: Filter state in URL for easy sharing
- **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Color-coded Cards**: Each card uses its assigned color theme
- **Image Support**: Next.js Image optimization for fast loading
- **Project Links**: Each card links to the project URL (internal or external)

## Netlify Visual Editor

This template is configured to work with [visual editing](https://docs.netlify.com/visual-editor/overview/) and [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

### Develop with Netlify Visual Editor Locally

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd nextjs-blog-theme
npm run dev
```

Install the [Netlify Visual Editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register, or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Visual Editor Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

### Next Steps

Here are a few suggestions on what to do next if you're new to Netlify Visual Editor:

- Learn [Netlify visual editor overview](https://docs.netlify.com/visual-editor/visual-editing/)
- Check [Netlify visual editor reference documentation](https://visual-editor-reference.netlify.com/)

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - to regularly update our dependencies

If your team is not interested in this tooling, you can remove them with ease!

### Removing Renovate

In order to keep our project up-to-date with dependencies we use a tool called [Renovate](https://github.com/marketplace/renovate). If you’re not interested in this tooling, delete the `renovate.json` file and commit that onto your main branch.

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
