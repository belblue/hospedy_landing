/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Variable"', "Nunito", "sans-serif"],
      },
      colors: {
        primary: "#0D9488",
        secondary: "#0F766E",
        tertiary: "#CCFBF1",
        gold: "#F59E0B",
      },
    },
  },
  plugins: [require("postcss-import")],
};
