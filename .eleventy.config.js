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

  // Nunjucks settings
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("_includes")
  );

  nunjucksEnvironment.addFilter("date", function() {
    return new Date().getFullYear();
  });

  nunjucksEnvironment.addFilter("safe", function(value) {
    return new Nunjucks.runtime.SafeString(value);
  });

  // Set the eleventyConfig to use the custom Nunjucks environment
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
      
      // Process regular SCSS
      let result = sass.compileString(inputContent);
      return async () => result.css;
    }
  });

  // Pass through files
  eleventyConfig.addPassthroughCopy("views/images");
  eleventyConfig.addPassthroughCopy("views/js");
  
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
