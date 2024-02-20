/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['var(--font-space)'],
        montserrat: ['var(--font-montserrat)'],
        playfair_display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
