const options = require("./config"); //options from config.js

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '100-auto': '100% auto',
    },
    fontFamily: {
      'body': ['Poppins'],
    },
    fontSize: {
      sm: ['8px', '11px'], 
      'h11': '0.75rem',
      'h10': '0.875rem',
      base: '1rem',
      'h8': '1.125rem',
      md: '1.25rem',
      'h6': '1.5rem',
      'h5': '2rem',
      'h3': '2.75rem',
      'h1': '3.625rem',
      

    },
    screens: {
      '2xl': { max: '1319px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },

      minsm: { min: '640px' },
      minmd: { min: '768px' },
      minlg: { min: '1024px' },
      minxl: { min: '1280px' },
      min2xl: { min: '1318px' },
    },
    container: {
      center: true,
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(193, 148, 118, 0.15)',
      },
      colors: {
        transparent: 'transparent',
        'primary': '#C19476',
        'secondary': '#F9F4F1',
        'white': '#ffffff',
        'black-1': '#333333',
        'dark-green': '#1E3B41',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'danger': '#F25F5F',
        'bermuda': '#78dcca',
        'border-color-1': 'rgba(193, 148, 118, 0.30)',
        'border-color-2': 'rgba(193, 148, 118, 0.80)',
        'border-color-3': 'rgba(193, 148, 118, 0.50)',
        'white-2': 'rgba(255, 255, 255, 0.50)',
      },
    },
  },
  plugins: plugins,
};
