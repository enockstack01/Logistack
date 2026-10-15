/** @type {import('tailwindcss').Config} */
// Colours follow Logistack Ltd Brand Standards v1.1, section 4.
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
          navy: '#0A108A', // Primary
          amber: '#E8A33D', // Accent
          mist: '#EAEBF8', // Tint
          cloud: '#F4F5FB', // Panel
          lavender: '#BFC2E6', // Lines
          periwinkle: '#9CA0D6', // Text on navy
          ink: '#111111', // Body text
          slate: '#555555', // Captions
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
