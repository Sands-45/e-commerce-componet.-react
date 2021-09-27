const _ = require("lodash");
const plugin = require("tailwindcss/plugin", "tailwind-scrollbar");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{jsx,html,css,js}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
