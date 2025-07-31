const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        primary: '#174286',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        expandFade: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(3)', opacity: 0 },
        },
      },
      animation: {
        bounce: 'bounce 0.6s ease-in-out 2',
        expand: 'expandFade 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}