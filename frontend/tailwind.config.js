/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // postcss.config.js

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
