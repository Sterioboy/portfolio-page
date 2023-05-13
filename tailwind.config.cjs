const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    fontSize: {
      base: ["16px", "19px"],
      md: ["18px", "21px"],
      lg: ["24px", "27px"],

      "desktop-base": ["18px", "21px"],
      "desktop-md": ["24px", "28px"],
      "desktop-lg": ["28px", "34px"],
      "desktop-xl": ["42px", "48px"],
    },

    spacing:
      /**
       * @example
       * m-1  -> margin: 10px
       * m-20 -> margin: 200px
       */
      Object.fromEntries(
        Array.from({ length: 20 }).map((_, i) => [i, i * 10 + "px"])
      ),

    extend: {
      fontFamily: {
        sans: ["Source Code Pro", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: () => ({
        "hero-image": "url('/src/assets/hero-bg@1x.jpg')",
      }),
    },
  },

  plugins: [],
};
