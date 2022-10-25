/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: colors.blueGray,
      },
      spacing: {
        128: '32rem',
        160: '40rem',
        192: '48rem',
        256: '64rem',
      },
    },
    colors: {
      primary: '#3399FF',
      background: '#1e2233',
      text: { default: '#111111' },
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
