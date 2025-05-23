/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{njk,md,html}",
    "./views/**/*.{njk,md,html}",
    "./_includes/**/*.{njk,md,html}",
    "./_layouts/**/*.{njk,md,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  plugins: [],
}
