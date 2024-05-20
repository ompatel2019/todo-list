// tailwind.config.js
module.exports = {
  content: ['./*.html', './scripts/*.js'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'blue-colour': '#2463EB',
        'orange-colour': '#FF5945'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
