const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      emc: {
        black: "#212429",
        white: "#FFFFFF",
        brokenWhite: "#F6F6F6",
        green: "#23E09C",
        gray: "#7F7F7F"
       
      },
    },

    screens: {
      phone: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px", max: "1535px" },
      desktopxl: { min: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
