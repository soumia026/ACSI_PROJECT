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
      },
      keyframes: {
        'growandshrink': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.5)' }
        }
      },
    },
    animation: {
      'dina': 'dina 2000ms ease-in-out infinite alternate',
    }
  },
  plugins: [],
}

