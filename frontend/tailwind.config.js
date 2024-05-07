/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        soumia: {
          '500': '#5570F1'
        }
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

