/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#51D1FF',
          DEFAULT: '#1507b2',
          dark: '#0e0580',
        },
        secondary: {
          light: '#dd4ca8',
          DEFAULT: '#cc2692',
          dark: '#a51e76',
        },
        success: {
          light: '#4cef96',
          DEFAULT: '#27b588',
          dark: '#1e8a66',
        },
      },
      animation: {
        'gradient': 'gradientShift 15s ease infinite',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};