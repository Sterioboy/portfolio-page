/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    colors: {
      primary: "#222222",
      black: "#000000",
      white: "#FFFFFF",
    },

    fontSize: {
      base: ["16px", "19px"],
      md: ["18px", "21px"],
      lg: ["24px", "27px"],

      "desktop-base": ["18px", "21px"],
      "desktop-md": ["24px", "28px"],
      "desktop-lg": ["48px", "56px"],
      "desktop-xl": ["72px", "88px"],
    },

    borderRadius: {
      DEFAULT: "10px",
    },

    /* container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
        lg: '80px',
        xl: '170px',
      },
    }, */

    spacing:
      /**
       * @example
       * m-1  -> margin: 10px
       * m-20 -> margin: 200px
       */
      Object.fromEntries(
        Array.from({ length: 20 }).map((_, i) => [i, i * 10 + "px"])
      ),

    /* extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        'sans-critical': ['InterCritical', ...defaultTheme.fontFamily.sans],
      },
    }, */
  },

  plugins: [],
};
