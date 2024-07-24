/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#9d9ab4",
        tertiary: "#0f0549",
        "black-100": "#090523",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // Define light mode colors
        "light-primary": "#f3f3f3",
        "light-secondary": "#9d9ab4",
        "light-tertiary": "#e0e0e0",
        "light-black-100": "#ffffff",
        "light-black-200": "#f5f5f5",
        "light-white-100": "#0a0a0a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};