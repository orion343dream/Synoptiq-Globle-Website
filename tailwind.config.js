/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        /* Core site palette from user */
        background: '#05071e',
        surface: '#131428',
        'header-container': '#1b1933',
        header: 'rgba(255,255,255,0)',

        /* Presets */
        'light-bg': '#0c114a',
        'light-surface': '#131b76',
        'dark-bg': '#01020e',
        'dark-surface': '#252525',

        /* existing defaults kept for compatibility */
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

