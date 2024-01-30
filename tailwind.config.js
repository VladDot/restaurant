/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 600ms ease-in-out forwards',
      },
      screens: {
        mobile: '430px',
        desktop: '1440px',
        desktopLg: '1480px',
      },
      colors: {
        bannerContent: 'rgb(161, 161, 161)',
      },
    },
  },
  plugins: [],
};
