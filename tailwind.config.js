module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gray: {
          900: "#15151C"
        },
        poisoned: {
          start: "#7C67FF",
          finish: "#7000FF",
        },
        bleed: {
          start: "#FF3C3C",
          finish: "#FF6A3C",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
