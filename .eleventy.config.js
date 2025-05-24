import Nunjucks from "nunjucks";
import sass from "sass";
import path from "path";
import { EleventyPluginBundle } from "@11ty/eleventy-plugin-bundle";
import fs from "fs";

export default async function(eleventyConfig) {
  // BrowserSync settings
  eleventyConfig.setBrowserSyncConfig({
    open: true,
    server: "_site"
  });

  // First register filters with Eleventy
  eleventyConfig.addFilter("date", function(value) {
    if (value === "now") {
      return new Date().getFullYear();
    }
    return new Date(value).getFullYear();
  });

  eleventyConfig.addFilter("safe", function(value) {
    return value;  // Eleventy handles safe differently
  });

  // Then create and configure Nunjucks environment
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(["_includes", "_layouts"])
  );

  // Add the same filters to Nunjucks environment
  nunjucksEnvironment.addFilter("date", function(value) {
    if (value === "now") {
      return new Date().getFullYear();
    }
    return new Date(value).getFullYear();
  });

  nunjucksEnvironment.addFilter("safe", function(value) {
    return new Nunjucks.runtime.SafeString(value);
  });

  // Set the Nunjucks environment
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addPlugin(EleventyPluginBundle);
  
  // Set Directories
  // --------------------------------------------------------------------------
  // - input directory is where we store our content
  eleventyConfig.setInputDirectory("views");
  // - include directory is where we store our partials
  eleventyConfig.setIncludeDirectory("_includes");
  // - add layout aliases
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("base", "base.njk");
  // - output directory is where we store our compiled files
  eleventyConfig.setOutputDirectory("_site");
  // - data directory is where we store our data files
  eleventyConfig.setDataDirectory("_data");

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

  // Add a single check after build
  eleventyConfig.on('eleventy.after', async () => {
    const jsDir = path.join("_site", "js");
    const themeJsPath = path.join(jsDir, "theme.js");
    
    if (!fs.existsSync(jsDir)) {
      fs.mkdirSync(jsDir, { recursive: true });
    }
    
    if (!fs.existsSync(themeJsPath)) {
      console.warn(`Theme.js not found in output, creating default version`);
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
    }
  });
  
  // Return the configuration object
  return {
    dir: {
      input: "views",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    },
    pathPrefix: "/",
    htmlTemplateEngine: "njk"
  };
}
