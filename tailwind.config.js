/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebasNeue: '"Bebas Neue", sans-serif',
        montserrat: '"Montserrat", sans-serif'
      }
    },
  },
  plugins: [require('daisyui'),],
}

