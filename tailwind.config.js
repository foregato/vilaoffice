/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B0F17',
          950: '#05070C',
          900: '#0B0F17',
          800: '#121826',
          700: '#1B2333',
        },
        gold: {
          DEFAULT: '#C7A756',
          light: '#E4CE94',
          dark: '#9C7F3C',
        },
        offwhite: '#F6F3EC',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
