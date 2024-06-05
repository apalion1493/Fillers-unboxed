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
    fontSize: {
      sm: ['8px', '11px'],
    },
    colors: {
      'primary': '#C19476',
      'white': '#ffffff',
      'black-1': '#333333',
      'dark-green': '#1E3B41',
    },
    extend: {},
  },
  plugins: plugins,
};
