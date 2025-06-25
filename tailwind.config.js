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
        muted: {
          // Dark mode backgrounds - deep, sophisticated tones
          'bg-primary': '#1a1a1a',     // Rich charcoal
          'bg-secondary': '#242424',   // Slightly lighter charcoal
          'bg-tertiary': '#2e2e2e',    // Medium charcoal
          'bg-accent': '#383838',      // Light charcoal
          'bg-hover': '#424242',       // Hover state

          // Light mode backgrounds - warm, soft tones
          'light-bg-primary': '#fafaf9',    // Warm white
          'light-bg-secondary': '#f5f5f4',  // Soft stone
          'light-bg-tertiary': '#e7e5e4',   // Light stone
          'light-bg-accent': '#d6d3d1',     // Medium stone
          'light-bg-hover': '#c7c2bd',      // Hover stone

          // Text colors
          'text-primary': '#e5e5e5',        // Light gray for dark mode
          'text-secondary': '#b3b3b3',      // Medium gray for dark mode
          'text-tertiary': '#808080',       // Subtle gray for dark mode
          'light-text-primary': '#1c1917',  // Dark brown for light mode
          'light-text-secondary': '#44403c', // Medium brown for light mode
          'light-text-tertiary': '#78716c',  // Light brown for light mode

          // Muted accent colors - sophisticated and subtle
          'sage': '#9ca3af',           // Muted sage green
          'sage-dark': '#6b7280',      // Darker sage
          'sage-light': '#d1d5db',     // Lighter sage

          'clay': '#a78bfa',           // Muted purple-clay
          'clay-dark': '#8b5cf6',      // Darker clay
          'clay-darker': '#6b46c1',    // Accessible darker clay (6.25:1 contrast with white)
          'clay-accessible': '#a78bfa', // Accessible clay for dark mode (7.78:1 contrast with dark bg)
          'clay-light': '#c4b5fd',     // Lighter clay

          'stone': '#94a3b8',          // Muted blue-stone
          'stone-dark': '#64748b',     // Darker stone
          'stone-darker': '#4a5568',   // Accessible darker stone (7.24:1 contrast with white)
          'stone-light': '#cbd5e1',    // Lighter stone

          'earth': '#a3a3a3',          // Muted earth tone
          'earth-dark': '#737373',     // Darker earth
          'earth-light': '#d4d4d4',    // Lighter earth

          'moss': '#84cc16',           // Muted moss green
          'moss-dark': '#65a30d',      // Darker moss
          'moss-light': '#a3e635',     // Lighter moss

          'rust': '#ea580c',           // Muted rust orange
          'rust-dark': '#c2410c',      // Darker rust
          'rust-light': '#fb923c',     // Lighter rust
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class
}


