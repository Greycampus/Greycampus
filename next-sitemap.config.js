const fetchDynamicPaths = require("./scripts/fetchDynamicPaths");

let cachedPaths = null;

module.exports = {
  siteUrl: "https://www.greycampus.com/",
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

// "https://www.greycampus.com/"