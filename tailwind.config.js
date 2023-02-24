/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rnny: '#6FAEF7',
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
