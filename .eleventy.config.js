import sass from "sass";
import path from "path";
import fs from "fs";

export default function(eleventyConfig) {
  // BrowserSync settings
  eleventyConfig.setBrowserSyncConfig({
    open: true,
    server: "_site"
  });

  // Add layout aliases
  eleventyConfig.addLayoutAlias("post", "post");
  eleventyConfig.addLayoutAlias("base", "base");

  // Register filters after directory configuration
  eleventyConfig.addFilter("dateFormat", function(value, format = "readable") {
    const date = new Date(value);
    // Return year only for ISO dates
    if (format === "year") {
      return date.getFullYear();
    }
    if (format === "iso") {
      return date.toISOString().split('T')[0];
    }
    // Default format for readable dates
    return date.toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  });



  // Process SCSS files (but not Tailwind - that's handled by the npm scripts)
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      // Skip processing tailwind.scss if it exists
      if(path.basename(inputPath) === "tailwind.scss") {
        return;
      }
      
      try {
        // Process regular SCSS
        let result = sass.compileString(inputContent);
        return async () => result.css;
      } catch (error) {
        console.error(`SCSS Error in ${inputPath}:`, error.message);
        // Return empty CSS to prevent build failure
        return async () => "";
      }
    }
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("views/assets");
  eleventyConfig.addPassthroughCopy("views/js");

  // Add a single check after build
  eleventyConfig.on('eleventy.after', async () => {
    const jsDir = path.join("_site", "js");
    const themeJsPath = path.join(jsDir, "theme.js");

    if (!fs.existsSync(jsDir)) {
      fs.mkdirSync(jsDir, { recursive: true });
    }

    if (!fs.existsSync(themeJsPath)) {
      console.warn(`Theme.js not found in output, creating default version`);
      // Copy from views/js/theme.js if it exists, otherwise use default
      if (fs.existsSync(path.join("views/js", "theme.js"))) {
        fs.copyFileSync(path.join("views/js", "theme.js"), themeJsPath);
        console.log("Copied theme.js from views/js directory");
      } else {
        const defaultJs = `
// Default theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
  }
});`;
        fs.writeFileSync(themeJsPath, defaultJs);
        console.log("Created default theme.js");
      }
    }
  });
  
  // Return the configuration object
  return {
    dir: {
      input: "views",
      includes: "../_includes",
      layouts: "../_layouts",
      output: "_site"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "njk"
  };
}
