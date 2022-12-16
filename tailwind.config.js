/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'clrAzul': '#182c4c',
        'clrCeleste': '#3a648c',
        'clrGrisClaro': '#EAEAEA',
        'clrGrisOscuro': '#c4c4bc',
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
