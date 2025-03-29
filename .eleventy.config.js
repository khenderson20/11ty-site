export default async function(eleventyConfig) {
    // Access to the full `eleventyConfig` Configuration API
    eleventyConfig.setInputDirectory("views");
    eleventyConfig.setIncludeDirectory("my_includes");
    eleventyConfig.setLayoutsDirectory("my_layouts");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setDataDirectory("my_data");
    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        trimBlocks: true,
        lstripBlocks: true,
    });
      // Universal filters (Adds to Liquid, Nunjucks, and 11ty.js)
      eleventyConfig.addFilter("myFilter", function(value) { /* … */ });
  };