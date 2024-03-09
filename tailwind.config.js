/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorWhite: "#F6EFEE",
        colorLightBlue: "#8d99ae",
        colorBlue: "#457b9d",
        colorDarkBlue: "#2b2d42",
        colorAccentBlue: "#48cae4",
      },
      fontFamily: {
        secondary: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
