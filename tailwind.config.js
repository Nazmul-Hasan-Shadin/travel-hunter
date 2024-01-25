/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'header-image':"url('/src/assets/images/Banner/carBanner.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

