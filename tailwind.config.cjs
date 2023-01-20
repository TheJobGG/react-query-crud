/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg-max": {"max": "1024px"},
        "sm-max": {"max": "640px"},
      }
    },
  },
  plugins: [],
}