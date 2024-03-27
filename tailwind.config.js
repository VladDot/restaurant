/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            ...defaultTheme,
            fontFamily: {
                mainFont: ['"Raleway"', "sans-serif"],
                secondFont: ['"Libre Baskerville"', "serif"],
                thirdFont: ['"Source Serif 4"', "serif"],
            },
            colors: {
                ...defaultTheme.colors,
                fourth: "#A1A1A1",
                mainText: "#4A4A4A",
                thirdText: "#FFFFFF",
                secondText: "#A78963",
                bannerContent: "rgba(255, 255, 255, 0.9)",

                mainTextHover: "#674F31",
                secondTextHover: "#A78963",

                mainBg: "#FFFFFF",
                thirdBg: "#856842",
                fourthBg: "#A78963",
                secondBg: "#05090E",
                opacityBg: "#382201",
                bgInputForm: "#F9EF9F",
                bgFormRequestCallback: "#323439",

                red: "#be123c",
                aqua: "#23D5AE",
                disabled: "#aaabad",
            },
            screens: {
                mobile: "430px",
                minSm: "520px",
                desktopLg: "1480px",
                desktop: "1504px",
            },
            keyframes: {
                rotate: {
                    from: { transform: "rotate(0deg) translate(-50%,-50%)" },
                    to: { transform: "rotate(360deg) translate(-50%,-50%)" },
                },
                "-rotate": {
                    from: { transform: "rotate(360deg) translate(-50%,-50%)" },
                    to: { transform: "rotate(0deg) translate(-50%,-50%)" },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                fadeOut: {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                blurBlack: {
                    from: { opacity: "0.2" },
                    to: { opacity: "0.55" },
                },
                blurBlackReverse: {
                    from: { opacity: "0.55" },
                    to: { opacity: "0.2" },
                },
                blurBlackFoodMenu: {
                    from: { opacity: "0" },
                    to: { opacity: "0.4" },
                },
                scalePlus: {
                    from: { transform: "scale(0)" },
                    to: { transform: "scale(1)" },
                },
                scalePlusReverse: {
                    from: { transform: "scale(1)" },
                    to: { transform: "scale(0)" },
                },
                rotateY: {
                    from: { transform: "rotateY(0deg)" },
                    to: { transform: "rotateY(180deg)" },
                },
                reversRotateY: {
                    from: { transform: "rotateY(180deg)" },
                    to: { transform: "rotateY(360deg)" },
                },
                bgSlideX: {
                    from: { transform: "width(50%)" },
                    to: { transform: "width(0)" },
                },
            },
            animation: {
                bgSlideX: "bgSlideX 900ms ease-in-out forwards",
                blurBlack: "blurBlack 330ms ease-in-out forwards",
                blurBlackFoodMenu: "blurBlackFoodMenu 500ms ease-in forwards",
                blurBlackReverse: "blurBlackReverse 330ms ease-in-out forwards",
                fadeIn: "fadeIn 600ms ease-in-out forwards",
                fadeInDropMenu: "fadeIn 1s ease-out forwards",
                fadeOut: "fadeOut 300ms ease-in-out forwards",
                reversRotateY: "reversRotateY 900ms ease-in-out forwards",
                rotateBigSpinner: "rotate 2500ms linear infinite",
                rotateSmallSpinner: "-rotate 2300ms linear infinite",
                rotateY: "rotateY 900ms ease-in-out forwards ",
                scalePlus: "scalePlus 330ms linear forwards",
                scalePlusReverse: "scalePlusReverse 100ms linear forwards",
            },
            backgroundImage: {
                bottomShadow:
                    "linear-gradient(180deg, rgba(255,255,255,0.22452731092436973) 0%, rgba(255,255,255,0.7847514005602241) 29%, rgba(255,255,255,1) 60%)",
            },

            backgroundSize: {
                "100/200": "100% 20%",
            },
            fontSize: {
                subTitleClamp: ["clamp(24px, 4vw, 42px)"],
            },
            rotateY180deg: { rotate: "rotateY(180deg)" },
        },
    },
    plugins: [],
};
