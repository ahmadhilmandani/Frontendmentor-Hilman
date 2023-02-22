/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-red': '#f25f3a',
        'dark-blue': '#242d52',
        'dark-grayish-blue': '#9095a7',
        'very-dark-blue': '#1d1e25',
        'very-pale-red': '#ffefeb',
        'very-light-gray': '#fafafa',
      }
    },
  },
  plugins: [],
}
