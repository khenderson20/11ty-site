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
          'bg0': '#0b0b2b', // Dark background (deep blue)
          'bg1': '#1a1a4a',
          'bg2': '#2a2a6a',
          'bg3': '#3a3a8a',
          'bg4': '#4a4aaa',
          
          // Light mode colors
          'light-bg0': '#f8f5ff', // Light background
          'light-bg1': '#eee6ff',
          'light-bg2': '#e0d6ff',
          'light-bg3': '#d0c6ff',
          'light-bg4': '#c0b6ff',
          
          // Common colors
          'fg': '#f0f0ff', // Foreground text for dark mode
          'light-fg': '#2a2a6a', // Foreground text for light mode
          
          // Accent colors (using your specific hex values)
          'red': '#ff71ce', // Hot Pink
          'green': '#05ffa1', // Mint Green
          'yellow': '#fffb96', // Pastel Yellow
          'blue': '#01cdfe', // Cyan
          'purple': '#b967ff', // Purple
          'aqua': '#01cdfe', // Cyan (duplicate of blue for compatibility)
          'orange': '#ff71ce', // Hot Pink (duplicate of red for compatibility)
          
          // Muted accent colors (darker variants)
          'dark-red': '#cc5aa5', // Darker Hot Pink
          'dark-green': '#04cc81', // Darker Mint Green
          'dark-yellow': '#e6e287', // Darker Pastel Yellow
          'dark-blue': '#01a4cb', // Darker Cyan
          'dark-purple': '#9452cc', // Darker Purple
          'dark-aqua': '#01a4cb', // Darker Cyan (duplicate of dark-blue)
          'dark-orange': '#cc5aa5', // Darker Hot Pink (duplicate of dark-red)
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class
}


