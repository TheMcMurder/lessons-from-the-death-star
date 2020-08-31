module.exports = {
  theme: {
    colors: {
      green: 'var(--green)',
      red: 'var(--red)',
      blue: 'var(--blue)',
      black: 'var(--black)',
      white: 'var(--white)',
      gray: 'var(--gray)',
      yellow: 'var(--yellow)'
    },
    fontFamily: {
      body: ["Saira", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    extend: {},
  },
  purge: ["./index.html", "./index.js", "./components/**/*.js"],
  variants: {},
  plugins: [],
};
