/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        onaccent: "rgb(var(--onaccent) / <alpha-value>)",
        tangerine: "rgb(var(--tangerine) / <alpha-value>)",
        mustard: "rgb(var(--mustard) / <alpha-value>)",
        olive: "rgb(var(--olive) / <alpha-value>)",
        brick: "rgb(var(--brick) / <alpha-value>)",
      },
      boxShadow: {
        retro: "6px 6px 0 rgb(var(--shadow))",
        "retro-lg": "8px 8px 0 rgb(var(--shadow))",
        "retro-sm": "3px 3px 0 rgb(var(--shadow))",
        "retro-sm-hover": "1px 1px 0 rgb(var(--shadow))",
      },
      fontFamily: {
        overpass: ['var(--font-overpass-mono)', 'monospace'],
        display: ['var(--font-fraunces)', 'serif'],
      },
    },
  },
  plugins: [],
}
