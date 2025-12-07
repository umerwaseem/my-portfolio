/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#F472B6",
        accent: "#38BDF8",
        aqua: "#22D3EE",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
