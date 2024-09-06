/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
 
}
module.exports = {
  purge: ['./index.html', "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
}

