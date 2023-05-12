/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // general
        'Cust-Bright-blue': '#3a7bfd',
        'Cust-Sky-Blue': '#57ddff',
        'Cust-Purple': '#c058f3',

        // dark theme
        'Cust-Bg-Color': 'hsl(235, 24%, 19%)',
        'Cust-Very-Dark-Blue': 'hsl(235, 21%, 11%)',

        // light theme
        'Cust-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',

        // colors that included on the style-guide but i don't use it
        'Cust-Very-Pastel-Blue': 'hsl(228, 100%, 84%)',
        'Cust-Very-Light-Blue': 'hsl(206, 94%, 87%)',
        'Cust-Very-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)',
        'Cust-Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
      }
    },
  },
  plugins: [],
}

