/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#eac3ce',    // Medium pink - main background
      },
      fontFamily: {
        title: ['Playfair Display', 'serif'], // Titles
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
} 