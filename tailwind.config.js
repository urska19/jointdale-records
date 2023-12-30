module.exports = {
  content: ["./dist/**/*.{html,njk}"],
  theme: {
      colors: {
        black: '#000000',
        azure: '#858585',
        blue: '#545454',
        blue_shade: '#e2e1e1'
      },
    extend: {
      fontFamily: {
        'sans': ['Crackhouse', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: []
}