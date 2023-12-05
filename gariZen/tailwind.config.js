/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE7C4B',
        secondary: '#C45D3E',
        tertiary: '#C6C5B3',
        basic: '#F5F0C4'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

