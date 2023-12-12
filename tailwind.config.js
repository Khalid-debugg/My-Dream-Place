/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        Blue: "#2F80ED",
        Gray: "#F2F2F2",
        Yellow: "#FCEFCA",
      },
      fontFamily: {
        sfNormal: ["SF Pro Display", "sans-serif"],
        sfBold: ["SF Pro Display Bold", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        lg: "925px",
      },
    },
  },
  plugins: [],
};
