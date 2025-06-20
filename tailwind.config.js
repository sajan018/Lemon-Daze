/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      'sm': '640px',  // Small screens like mobile
      'md': '768px',  // Medium screens like tablet
      'lg': '1024px', // Large screens like small laptop
      'xl': '1280px', // Extra-large screens like desktop
      '2xl': '1536px' // 2x extra-large
    },
  },
  plugins: [],
}

