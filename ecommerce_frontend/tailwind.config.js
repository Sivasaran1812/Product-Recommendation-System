/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary:'#0096FF',
        secondary:'#7DF9FF',
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem",

      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}

