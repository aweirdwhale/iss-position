const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {

      addVariant('firefox', ({ container, separator }) => {
  
      const isFirefoxRule = postcss.atRule({
  
        name: '-moz-document',
  
        params: 'url-prefix()',
  
      });
  
      isFirefoxRule.append(container.nodes);
  
      container.append(isFirefoxRule);
  
      isFirefoxRule.walkRules((rule) => {
  
        rule.selector = `.${e(
  
        `firefox${separator}${rule.selector.slice(1)}`
  
        )}`;
  
      });
  
      });
  
    }),
  ],
};