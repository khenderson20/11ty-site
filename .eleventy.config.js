import sass from "sass";

export default async function(eleventyConfig) {
    // Access to the full `eleventyConfig` Configuration API
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setIncludeDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_layouts");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setDataDirectory("_data");
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true,
      trimBlocks: true,
      lstripBlocks: true,
    });
    eleventyConfig.addTemplateFormats("scss");
    // creates extension for use
    eleventyConfig.addExtension("scss", {
      outputFileExtension: "css",
      // `compile` is called once per .scss file in the input directory
      compile: async function(inputContent) {
        let result = sass.compileString(inputContent);
        // This is the render function, `data` is the full cascade.
        return async (data) => {
          return result.css;
        };
      }
    });
    // Universal filters (Adds to Liquid, Nunjucks, and 11ty.js)
    eleventyConfig.addFilter("myFilter", function(value) { /* … */ });

    // Shortcodes added in this way are available in:
    // * Markdown
    // * Liquid
    // * Nunjucks
    // * JavaScript
    // * Handlebars (not async)

    eleventyConfig.addShortcode("user", function(firstName, lastName) { /* … */ });

    // Async-friendly in v2.0.0
    eleventyConfig.addShortcode("user", async function(myName) { /* … */ });

    // Direct async method available
    eleventyConfig.addAsyncShortcode("user", async function(myName) { /* … */ });
  };