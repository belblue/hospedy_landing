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
      fontFamily:{
        'quick':['Quicksand', 'sans-serif'],
      },
      colors: {
        'primary': '#2667F7',
        'secondary':'#13a18d',/*1cb569  13a18d*/
        'tertiary':'#e5eefc'
      },
    },
  },
  plugins: [
    require('postcss-import'),
  ],
}
