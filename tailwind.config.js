/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            ...defaultTheme,
            colors: {
                ...defaultTheme.colors,
                mainText: "#4A4A4A",
                secondText: "#A78963",
                thirdText: "#FFFFFF",
                fourth: "#A1A1A1",

                mainTextHover: "#674F31",
                secondTextHover: "#A78963",

                mainBg: "#FFFFFF",
                secondBg: "#05090E",
                thirdBg: "#856842",
                bgInputForm: "#F9EF9F",
                red: "#be123c",
                aqua: "#23D5AE",
            },
            screens: {
                minSm: "520px",
            },
        },
    },
    plugins: [],
};
