/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rnny-primary': '#6FAEF7',
        'rnny-primary-link': '#a2c4f2',
        'rnny-primary-tint': '#243C66',
        'rnny-primary-tint-hover': '#304e82',
        'rnny-secondary': '#C6D76D',
        'rnny-secondary-tint': '#E5EDAA',
        'rnny-purple': '#aa6ff7',
        'rnny-dark-text': '#98a0b3',
        'rnny-dark': '#0f1114',
        'rnny-dark-tint': '#16181D',
        'rnny-light': '#d8dee8',
        'rnny-light-tint': '#F9F9F9',
        'rnny-gray': '#787878',
        'rnny-gray-tint': '#8F8D88',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        sathosi: ['var(--font-satoshi)'],
      },
      screens: {
        '3xl': '1600px',
      },
      animation: {
        orbit: 'spin 4s linear forwards infinite',
        orbit2: 'spin 7s linear reverse infinite',
        orbit3: 'spin 9s linear forwards infinite',
        orbit4: 'spin 10s linear reverse infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
