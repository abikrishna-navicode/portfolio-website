/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // include all React files
  ],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 12s ease infinite',
      },
    },
  },
  plugins: [],
};
