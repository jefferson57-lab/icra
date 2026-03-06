/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          dark: '#2D6A4F',
          DEFAULT: '#52B788',
          light: '#95D5B2',
        },
      },
    },
  },
  plugins: [],
}
