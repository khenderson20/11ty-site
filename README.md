# 11ty-site

## [Eleventy Site](https://www.11ty.dev/) with Tailwind CSS and Nunjucks
A modern static site built with [Eleventy (11ty)](https://www.11ty.dev/), styled with Tailwind CSS, and using Nunjucks as the templating language. Features a responsive design with Gruvbox color scheme and dark/light mode toggle.
## Prerequisites
- [Node.js](https://nodejs.org/en/download) (v18 or newer recommended)- pnpm package manager
## Installation
```bash
# Clone the repositorygit clone https://github.com/yourusername/eleventy-site.git
cd eleventy-site
# Install dependencies
pnpm install
```
## Available Scripts
- `pnpm run dev` - Starts development server with live reload (cleans output directory first)

- `pnpm run build` - Builds the site for production (minified CSS)
- `pnpm run clean` - Removes the output directory
- `pnpm run serve` - Starts Eleventy's built-in server without rebuilding CSS
## Project Structure
```bash
eleventy-site/
├── _includes/           # Reusable Nunjucks components (partials, macros)
├── _layouts/            # Nunjucks layout templates defining page structure
├── views/               # Primary content directories and template files
│   ├── css/             # Stylesheets, including compiled Tailwind CSS
│   ├── assets/          # Static assets like images, fonts, and documents
│   └── *.njk            # Nunjucks content files (e.g., pages, collections)
├── .eleventy.config.js  # Main Eleventy configuration file
├── tailwind.config.js   # Tailwind CSS configuration for styling
└── _site/               # Generated output (typically git-ignored)
```
## Project Diagram Structure
```bash
                                      eleventy-site/
                                      ├── .eleventy.config.js
                                      └── tailwind.config.js
                                                   │
                ┌──────────────────────────────────┴───────────────────────────────────┐
                │                                                                    │
          _includes/                                                             views/
          (Reusable Partials)                                                      ├── css/
                                                                                   │   (Tailwind CSS Output)
                │                                                                    │
          _layouts/                                                                ├── assets/
          (Page Structure Templates)                                               │   (Images, Fonts, etc.)
                                                                                   │
                                                                                   └── *.njk
                                                                                       (Content Files)
```
## Features
- **Eleventy v3.0.0** - Fast static site generator- **Tailwind CSS** - Utility-first CSS framework
- **Nunjucks** - Powerful templating language- **Gruvbox Theme** - Beautiful color scheme with dark/light mode
- **Responsive Design** - Mobile-friendly layouts- **Fast Development** - Live reload and watch mode
- **Optimized Build** - Minified CSS for production
## Usage
### Development
Start the development server:
```bash 
pnpm run dev
```
This will:- Clean the output directory
- Start Eleventy with live reload- Watch and compile Tailwind CSS changes
Visit `http://localhost:8080` to see your site.
### Production Build
Build the site for production:
```bash
pnpm run build
```
The compiled site will be in the `_site` directory.
## Customization
- Modify `tailwind.config.js` to customize the theme
- Edit layouts in `_layouts` directory- Add components to `_includes` directory
- Create new pages in the `views` directory
## License

None.