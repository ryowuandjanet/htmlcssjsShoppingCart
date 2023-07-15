/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,hbs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

