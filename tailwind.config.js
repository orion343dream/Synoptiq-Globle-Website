/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E5AF2',
        'primary-light': '#3C7FF4',
        'primary-dark': '#0A42B3',
        dark: '#1A1A1A',
        text: '#55595d'
      },
      fontFamily: {
        title: ['Exo', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
        ui: ['Red Hat Display', 'sans-serif']
      }
    }
  },
  plugins: [],
}

