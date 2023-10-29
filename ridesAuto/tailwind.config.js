/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CE5A67',
        secondary: '#F4BF96',
        tertiary: '#FCF5ED',
        basic: '#1F1717'
      }
    },
  },
  plugins: [],
}

