const fetchDynamicPaths = require("./scripts/fetchDynamicPaths");

let cachedPaths = null;

module.exports = {
  siteUrl: "https://greycampus.vercel.app/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    if (!cachedPaths) {
      cachedPaths = await fetchDynamicPaths();
    }
    return cachedPaths;
  },
};
