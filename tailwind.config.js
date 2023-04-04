/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        bottom: "0 2px 0 0  rgba(0, 0, 0, 0.25)",
      },
    },

    colors: {
      ...colors,
      yellow: {
        DEFAULT: "#f7de7a",
        dark: { 10: "#dec86e", 20: "#c6b262", 30: "#ad9b55" },
        light: { 10: "#f8e187", 20: "#f9e595", 30: "#f9e595" },
      },
      brown: {
        DEFAULT: "#B84728",
        dark: { 10: "#7E301A", 20: "#4E1606" },
        light: { 10: "#CC5839", 20: "#d1694d", 30: "#F9B382" },
      },
      navy: {
        DEFAULT: "#1a2f39",
        dark: { 10: "#15262e", 20: "#0d181d" },
        light: { 10: "#31444d", 20: "#485961" },
      },
    },
  },
  plugins: [],
};
