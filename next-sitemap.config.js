const fetchDynamicPaths = require("./scripts/fetchDynamicPaths");

module.exports = {
  siteUrl: "https://greycampus.vercel.app/", 
  generateRobotsTxt: true, // ✅ This automatically generates robots.txt
  generateIndexSitemap: false, // Ensures only one sitemap is created
  sitemapSize: 5000, // Keeps sitemap manageable
  additionalPaths: async (config) => {
    const paths = await fetchDynamicPaths();
    return paths;
  },
};
