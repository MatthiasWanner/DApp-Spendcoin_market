const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'blue-sapphire': '#21587d',
        isabelline: '#f8f5f1',
        'space-cadet': '#1d1a44',
        'indigo-dye': '#1a4461'
      },
      boxShadow: {
        'white-light': '5px 5px 10px 3px rgba(255, 255, 255, 0.3)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
};
