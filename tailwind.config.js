/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        Blue: "#2F80ED",
      },
      fontFamily: {
        SFPro: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
