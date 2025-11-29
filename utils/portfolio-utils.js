import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// PORTFOLIO_PATH is useful when you want to get the path to a specific file
export const PORTFOLIO_PATH = path.join(process.cwd(), 'portfolio');

// getPortfolioFilePaths is the list of all mdx files inside the PORTFOLIO_PATH directory
export const getPortfolioFilePaths = () => {
  if (!fs.existsSync(PORTFOLIO_PATH)) {
    return [];
  }
  return (
    fs
      .readdirSync(PORTFOLIO_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
};

export const getPortfolioItems = () => {
  if (!fs.existsSync(PORTFOLIO_PATH)) {
    return [];
  }
  
  let items = getPortfolioFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(PORTFOLIO_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  // Sort by order if available, otherwise by title
  items = items.sort((a, b) => {
    if (a.data.order && b.data.order) {
      return a.data.order - b.data.order;
    }
    return (a.data.title || '').localeCompare(b.data.title || '');
  });

  return items;
};

export const getPortfolioItemBySlug = (slug) => {
  const itemFilePath = path.join(PORTFOLIO_PATH, `${slug}.mdx`);
  if (!fs.existsSync(itemFilePath)) {
    return null;
  }
  
  const source = fs.readFileSync(itemFilePath);
  const { content, data } = matter(source);

  return {
    content,
    data,
    filePath: itemFilePath,
    slug,
  };
};

