const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy({
    'src/main.css' : 'assets/main.css',
    'src/scripts/animations.js' : 'assets/animations.js',
    'src/images' : 'assets/img',
    'src/js' : 'assets/js'
  });
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir:{
      input: 'views',
      output: 'docs',
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/selection-tool",
    templateFormats: ["html", "liquid", "md", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  }
}