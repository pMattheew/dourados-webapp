/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      title: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    transitionDuration: {
      DEFAULT: "250ms",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        golden: {
          50: "#fdfaef",
          100: "#fbf2d9",
          200: "#f6e2b2",
          300: "#f0ce81",
          400: "#e8ae4a",
          500: "#e3982c",
          600: "#d58021",
          700: "#b0631e",
          800: "#8d4f1f",
          900: "#72421c",
          950: "#3d200d",
        },
        "blue-chill": {
          50: "#ecfdff",
          100: "#d0f6fd",
          200: "#a7ecfa",
          300: "#6adef6",
          400: "#26c4ea",
          500: "#0ba7cf",
          600: "#0c88b2",
          700: "#116b8d",
          800: "#175873",
          900: "#184961",
          950: "#092f43",
        },

        "d-green": "#0ca7a5",
        "d-dark-green": "#076967",
      },
    },
  },
  plugins: [],
}
