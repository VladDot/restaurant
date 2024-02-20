/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        mainText: '#4A4A4A',
        secondText: '#A78963',
        thirdText: '#FFFFFF',
        fourth: '#A1A1A1',
        bannerContent: 'rgb(161, 161, 161)',
        disabled: '#aaabad',

        mainTextHover: '#674F31',
        secondTextHover: '#A78963',

        mainBg: '#FFFFFF',
        secondBg: '#05090E',
        thirdBg: '#856842',
        bgFormRequestCallback: '#323439',
        bgA78963: '#A78963',
        bgInputForm: '#F9EF9F',
        red: '#be123c',
        aqua: '#23D5AE',
      },
      screens: {
        mobile: '430px',
        minSm: '520px',
        desktopLg: '1480px',
        desktop: '1504px',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg) translate(-50%,-50%)' },
          to: { transform: 'rotate(360deg) translate(-50%,-50%)' },
        },
        '-rotate': {
          from: { transform: 'rotate(360deg) translate(-50%,-50%)' },
          to: { transform: 'rotate(0deg) translate(-50%,-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        blurBlack: {
          from: { opacity: '0' },
          to: { opacity: '0.55' },
        },
        blurBlackFoodMenu: {
          from: { opacity: '0' },
          to: { opacity: '0.4' },
        },
        scalePluse: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        rotateBigSpinner: 'rotate 2500ms linear infinite',
        rotateSmallSpinner: '-rotate 2300ms linear infinite',
        fadeIn: 'fadeIn 600ms ease-in-out forwards',
        fadeOut: 'fadeIn 300ms ease-in-out forwards',
        fadeInDropMenu: 'fadeIn 1s ease-out forwards',
        blurBlack: 'blurBlack 330ms ease-in-out forwards',
        scalePluse: 'scalePluse 330ms linear forwards',
        blurBlackFoodMenu: 'blurBlackFoodMenu 500ms ease-in forwards',
      },
    },
  },
  plugins: [],
};
