/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'gradient-1': 'var(--color-gradient-1)',
        'gradient-2': 'var(--color-gradient-2)',
        'gradient-3': 'var(--color-gradient-3)',
        'gradient-4': 'var(--color-gradient-4)',
        purple: 'var(--color-purple)',
        yellow: 'var(--color-yellow)',
        pink: 'var(--color-pink)',
        teal: 'var(--color-teal)',
        charcoal: 'var(--color-charcoal)',
        'off-white': 'var(--color-off-white)',
      },
      fontFamily: {
        'heading': ['var(--font-primary)'],
        'body': ['var(--font-secondary)'],
      },
    },
  },
  plugins: [],
}

