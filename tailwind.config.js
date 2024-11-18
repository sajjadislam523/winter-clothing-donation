/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

// https://vitejs.dev/config/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    daisyui
  ],
}

