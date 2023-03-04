/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rnny: '#6FAEF7',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        serif: ['var(--font-inter)'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
