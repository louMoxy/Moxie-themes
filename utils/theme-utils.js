import { COLOR_THEMES, FONT_THEMES } from '../themes.js';

const THEME = process.env.BLOG_THEME || 'moxie';
const FONT_HEADINGS =  'bricolage-grotesque';
const FONT_BODY = 'dm-sans';

export function generateCssVariables() {
  const cssVars = {};
  const themeColors = COLOR_THEMES[THEME]?.colors || {};
  for (const [key, value] of Object.entries(themeColors)) {
    cssVars[`--theme-${key}`] = value;
  }
  cssVars['--theme-headings'] = FONT_THEMES[FONT_HEADINGS] || 'sans-serif';
  cssVars['--theme-body'] = FONT_THEMES[FONT_BODY] || 'sans-serif';

  const cssVarsString = Object.entries(cssVars)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');

  return cssVarsString;
}
