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
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        gruvbox: {
          // Dark mode colors
          'bg0': '#282828', // Dark background
          'bg1': '#3c3836',
          'bg2': '#504945',
          'bg3': '#665c54',
          'bg4': '#7c6f64',
          
          // Light mode colors
          'light-bg0': '#fbf1c7', // Light background
          'light-bg1': '#ebdbb2',
          'light-bg2': '#d5c4a1',
          'light-bg3': '#bdae93',
          'light-bg4': '#a89984',
          
          // Common colors
          'fg': '#ebdbb2', // Foreground text for dark mode
          'light-fg': '#3c3836', // Foreground text for light mode
          
          // Accent colors
          'red': '#fb4934',
          'green': '#b8bb26',
          'yellow': '#fabd2f',
          'blue': '#83a598',
          'purple': '#d3869b',
          'aqua': '#8ec07c',
          'orange': '#fe8019',
          
          // Muted accent colors
          'dark-red': '#cc241d',
          'dark-green': '#98971a',
          'dark-yellow': '#d79921',
          'dark-blue': '#458588',
          'dark-purple': '#b16286',
          'dark-aqua': '#689d6a',
          'dark-orange': '#d65d0e',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class
}


