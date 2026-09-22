// Eleventy config for ryansmithsays.com
import { existsSync } from "node:fs";
import { HtmlBasePlugin } from "@11ty/eleventy";

// Source lives in /src. The build writes finished pages to /_site.
export default function (eleventyConfig) {
  // Prefixes root-relative links (href="/about/") with the path prefix at build
  // time, so every link works on the github.io preview (/ryansmithsays/) and on
  // the custom domain (/). Already-prefixed links are left alone.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Files copied to the site as-is (paths are relative to the repo root).
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("ryan-portrait.jpg");
  // Tells GitHub Pages the custom domain; must ship in every build's output,
  // since Actions-based Pages deploys don't persist it any other way.
  eleventyConfig.addPassthroughCopy("CNAME");
  // Photos for the homepage/work cards and blog posts, uploaded to the repo root.
  for (const file of [
    "Health.png", "MiCloud-Video.png", "ActivityCloud-Video.png", "portfolio.png",
    "Blog-ContentMarketer.jpg", "Blog-Burnout.jpg", "Blog-UnderratedDiscipline.jpg",
    "Blog-BlueprinttoBrilliance.jpg", "Blog-BlueprintMessingDevelopment.jpg", "Blog-MessagingDevelopment.jpg",
  ]) {
    if (existsSync(file)) eleventyConfig.addPassthroughCopy(file);
  }
  // Favicon and social-share image (the .ico, .png and .jpg are uploaded by hand).
  for (const file of ["favicon.svg", "favicon.ico", "apple-touch-icon.png", "og-image.jpg"]) {
    if (existsSync(file)) eleventyConfig.addPassthroughCopy(file);
  }
  // Logo SVGs are served publicly at /assets/logo/ and also inlined by the layout.
  eleventyConfig.addPassthroughCopy({ "src/_includes/logos": "assets/logo" });

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
