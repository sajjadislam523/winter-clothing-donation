/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

// https://vitejs.dev/config/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    daisyui
  ],
}

