# Kevin Henderson - Personal Website

A modern, responsive personal website built with Eleventy, Tailwind CSS, and Nunjucks. This site showcases Kevin's journey as a front-end developer, his technical skills, and his passion for continuous learning.

## 🚀 Features

- **Modern Stack**: Built with Eleventy (11ty), Tailwind CSS, and Nunjucks templates
- **Responsive Design**: Mobile-first approach with clean, accessible layouts
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Static site generation for optimal performance

## 🛠️ Tech Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Template Engine**: [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Build Tools**: PostCSS, Autoprefixer

## 📁 Project Structure

```
eleventy-site/
├── _data/              # Global data files
├── _includes/          # Reusable template components
├── _layouts/           # Page layouts
│   └── base.njk       # Main layout template
├── _site/             # Generated static site (build output)
├── views/             # Source content and templates
│   ├── about/         # About page
│   ├── assets/        # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── index.njk      # Homepage
├── .eleventy.config.js # Eleventy configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khenderson20/11ty-site.git
   cd 11ty-site
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and visit `http://localhost:8080`

### Build Commands

- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build for production
- `pnpm run clean` - Clean the build directory

## 📝 Content Structure

### Homepage (`views/index.njk`)
- Personal introduction highlighting curiosity and learning mindset
- Current focus areas (React, TypeScript, Python, LLMs)
- Call-to-action buttons for navigation
- Personal interests section

### About Page (`views/about/index.njk`)
- Comprehensive personal and professional background
- Technical skills organized by category
- Notable projects and learning experiences
- Development philosophy and approach
- Personal interests (music, Star Wars)
- Contact information and social links

## 🎨 Design Philosophy

The site follows a clean, minimal design approach with:

- **Typography**: Inter font family for readability
- **Color Scheme**: Muted color palette with dark mode support
- **Layout**: Card-based components with consistent spacing
- **Accessibility**: Semantic HTML and WCAG compliance
- **Performance**: Optimized for fast loading and SEO

## 🔧 Customization

### Adding New Pages

1. Create a new `.njk` file in the `views/` directory
2. Add frontmatter with layout, title, and permalink
3. Use the existing component patterns for consistency

### Modifying Styles

- Global styles are in `views/css/tailwind.css`
- Tailwind configuration is in `tailwind.config.js`
- Custom components use Tailwind utility classes

### Updating Content

- Edit the Nunjucks templates in `views/`
- Modify the base layout in `_layouts/base.njk`
- Add reusable components in `_includes/`

## 📱 Responsive Design

The site is built mobile-first with breakpoints:
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind CSS dark mode classes
- Local storage persistence
- Toggle button in the navigation

## 📈 Performance

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript footprint
- CSS purging in production builds

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [Coming Soon]
- **GitHub**: [https://github.com/khenderson20](https://github.com/khenderson20)
- **LinkedIn**: [https://www.linkedin.com/in/kevin-h-cs/](https://www.linkedin.com/in/kevin-h-cs/)

---

Built with curiosity and continuous learning by Kevin Henderson 🚀