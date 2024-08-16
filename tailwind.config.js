/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C73B0F',
        },
        rose: {
          900: '#3F0F0B',
          800: '#7F423A',
          400: '#AC8A85',
          300: '#CFAFA7',
          100: '#F5E9E5',
          50: '#FDF5F3',
        },
        green: {
          DEFAULT: '#16A275',
        },
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
