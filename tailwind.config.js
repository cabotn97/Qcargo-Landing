/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'clrAzul': '#0d2c3f',
        'clrCeleste': '#668781',
        'clrGrisClaro': '#dde0d5',
        'clrGrisOscuro': '#dde0d5',
      },
      maxWidth: {
        'navPasos': '850px',
      },
      fontSize:{
        'xxs': '.50rem',
        'filters':'9pt',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
