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
        'Cust-Bright-blue': '#3a7bfd',
        'Cust-Purple': '#c058f3',
        'Cust-Sky-Blue': '#57ddff',
        'Cust-Bg-Color': 'hsl(235, 24%, 19%)',
        'Cust-Very-Dark-Blue': 'hsl(235, 21%, 11%)',
        'Cust-Light-Grayish-Blue': 'hsl(234, 39%, 85%)',
        'Cust-Light Grayish Blue-Hover': 'hsl(236, 33%, 92%)',
        'Cust-Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
        'Cust-Very-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
        'Cust-Very-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)',
        'Cust-Very-Pastel-Blue': 'hsl(228, 100%, 84%)',
        'Cust-Very-Light-Blue': 'hsl(206, 94%, 87%)',
      }
    },
  },
  plugins: [],
}

