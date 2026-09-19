// Eleventy config for ryansmithsays.com
// Source lives in /src. The build writes finished pages to /_site.
export default function (eleventyConfig) {
  // Files copied to the site as-is (paths are relative to the repo root).
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("ryan-portrait.jpg");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Set by the deploy workflow so links work both on the
    // github.io preview address (/ryansmithsays/) and on the custom domain (/).
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
