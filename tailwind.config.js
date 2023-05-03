/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        bottom: "0 2px 0 0  rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        appearFromBottom: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        appearFromBottom: "appearFromBottom 0.5s ease-out",
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
      },
    },
    fontFamily: {
      body: "work sans",
    },
    colors: {
      ...colors,
      yellow: {
        DEFAULT: "#f7de7a",
        dark: { 10: "#dec86e", 20: "#c6b262", 30: "#ad9b55" },
        light: { 10: "#f8e187", 20: "#FCF0C3", 30: "#fdf5d5" },
      },
      brown: {
        DEFAULT: "#B84728",
        dark: { 10: "#7E301A", 20: "#4E1606", 30: "#461405" },
        light: { 10: "#CC5839", 20: "#d1694d", 30: "#F9B382" },
      },
      navy: {
        DEFAULT: "#1a2f39",
        dark: { 10: "#15262e", 20: "#0d181d" },
        light: { 10: "#31444d", 20: "#485961" },
      },
      transparent: "transparent",
    },
  },
  plugins: [],
};
