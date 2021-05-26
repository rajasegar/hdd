module.exports = {
  purge: {
    content: ['./views/**/*.pug'],
    options: {
      keyframes: true,
      safelist: ['dark'],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  separator: '_',
};
