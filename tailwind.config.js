/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          700: '#731A28',
          800: '#5E1924',
          900: '#441118',
        },
        olive: {
          600: '#4c6348',
          700: '#3B4E38',
          800: '#2A3828',
        },
        gold: {
          300: '#E6CA65',
          400: '#D4AF37',
          500: '#B89343',
          600: '#94722C',
        },
        parchment: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F2ECE1',
        },
        charcoal: {
          800: '#302B27',
          900: '#23201D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
