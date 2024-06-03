/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',
        secondary: '#3498db',
        tertiary: '#95a5a6',
        quaternary: '#f1c40f',
        quinary: '#e74c3c',
        stone: '#34495e',
      }
    },
  },
  plugins: [],
}

