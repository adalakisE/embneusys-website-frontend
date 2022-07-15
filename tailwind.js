/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily:{
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {
      colors:{
        primary: '#f0a700',
        blue: '#005eb2',
        grey_bg: '#F0F0F0',
        title: '#2B2A29',
        paragraph: '#000',
        header: '#D4D4D4',
        white: '#FFFFFF'
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT: '1rem'
      }
    }
  },
  plugins: [],
}
