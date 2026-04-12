/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        logistack: {
          blue: '#003399', // Primary brand blue
          light: '#F8FAFC',
          dark: '#001A4D',
        },
      },
    },
  },
  plugins: [],
}