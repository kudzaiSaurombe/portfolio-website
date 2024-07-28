/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#9d9ab4",
        tertiary: "#0f0549",
        "black-100": "#090523",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light-primary": "#f3f3f3",
        "light-secondary": "#f8f8fa",
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
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};