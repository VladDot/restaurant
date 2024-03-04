/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      ...defaultTheme,
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        baskerville: ['"Libre Baskerville"', 'serif'],
        sourceSerif: ['"Source Serif 4"', 'serif'],
      },
      colors: {
        ...defaultTheme.colors,
        fourth: '#A1A1A1',
        mainText: '#4A4A4A',
        thirdText: '#FFFFFF',
        secondText: '#A78963',
        bannerContent: 'rgb(161, 161, 161)',

        mainTextHover: '#674F31',
        secondTextHover: '#A78963',

        mainBg: '#FFFFFF',
        thirdBg: '#856842',
        bgA78963: '#A78963',
        secondBg: '#05090E',
        opacityBg: '#382201',
        bgInputForm: '#F9EF9F',
        bgFormRequestCallback: '#323439',

        red: '#be123c',
        aqua: '#23D5AE',
        disabled: '#aaabad',
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
        fadeIn: 'fadeIn 600ms ease-in-out forwards',
        fadeOut: 'fadeIn 300ms ease-in-out forwards',
        fadeInDropMenu: 'fadeIn 1s ease-out forwards',
        scalePluse: 'scalePluse 330ms linear forwards',
        blurBlack: 'blurBlack 330ms ease-in-out forwards',
        rotateBigSpinner: 'rotate 2500ms linear infinite',
        rotateSmallSpinner: '-rotate 2300ms linear infinite',
        blurBlackFoodMenu: 'blurBlackFoodMenu 500ms ease-in forwards',
      },
      backgroundImage: {
        bottomShadow:
          'linear-gradient(180deg, rgba(255,255,255,0.22452731092436973) 0%, rgba(255,255,255,0.7847514005602241) 29%, rgba(255,255,255,1) 60%)',
      },
      backgroundSize: {
        '100/200': '100% 20%',
      },
      fontSize: {
        subTitleClamp: ['clamp(24px, 4vw, 42px)'],
      },
    },
  },
  plugins: [],
};
