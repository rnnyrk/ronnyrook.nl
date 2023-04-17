/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rnny-primary': '#6FAEF7',
        'rnny-primary-tint': '#243C66',
        'rnny-secondary': '#C6D76D',
        'rnny-secondary-tint': '#E5EDAA',
        'rnny-dark': '#111111',
        'rnny-light': '#F1F1F0',
        'rnny-light-tint': '#E7E7E7',
        'rnny-gray': '#787878',
        'rnny-gray-tint': '#8F8D88',
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
