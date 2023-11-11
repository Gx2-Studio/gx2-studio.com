/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        secondary: "#000000",
        primary: "#fafafa",
        pal1: "#264653",
        pal2: "#2a9d8f",
        pal3: "#e9c46a",
        pal4: "#f4a261",
        pal5: "#e76f51",

      },
      fontFamily: {
        sans: ["Neue Haas Grotesk Text Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },

}
