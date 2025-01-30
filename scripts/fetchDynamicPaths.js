const fetch = require("node-fetch");

async function fetchBlogs() {
  let allPaths = [];
  let page = 1;
  let totalPages = 1;
  const pageSize = 100; // ✅ Fetch 100 per request

  do {
    try {
      const fullUrl = `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/blogs?fields=post_url&pagination[page]=${page}&pagination[pageSize]=${pageSize}&timestamp=${Date.now()}`;
      console.log(`Fetching Blogs: ${fullUrl}`);

      const res = await fetch(fullUrl);
      const data = await res.json();

      if (!data.data || data.data.length === 0) {
        console.log(`No more Blogs found at page ${page}`);
        break;
      }

      // ✅ Extract only the slug from `post_url` (Removing Base URL)
      const paths = data.data.map((item) => {
        if (!item.post_url) return null; // Skip if `post_url` is missing
        const slug = item.post_url.replace("https://www.greycampus.com/blog/", "").trim();
        return {
          loc: `https://greycampus.vercel.app/blog/${slug}`,
          lastmod: new Date().toISOString(),
        };
      }).filter(Boolean); // ✅ Remove null values from array

      allPaths = [...allPaths, ...paths];

      totalPages = data?.meta?.pagination?.pageCount || 1;
      page++;

      if (page > totalPages) break;
    } catch (error) {
      console.error(`Error fetching Blogs:`, error);
      break;
    }
  } while (page <= totalPages);

  console.log(`✅ Total Blogs: ${allPaths.length}`);
  return allPaths;
}

async function fetchDynamicPaths() {
  try {
    const blogs = await fetchBlogs();

    const allPaths = [...blogs];

    // ✅ Remove duplicate URLs
    const uniquePaths = Array.from(new Set(allPaths.map((p) => p.loc))).map((loc) => ({
      loc,
      lastmod: new Date().toISOString(),
    }));

    console.log(`✅ Unique URLs for Sitemap: ${uniquePaths.length}`);
    return uniquePaths;
  } catch (error) {
    console.error("Error fetching dynamic paths:", error);
    return [];
  }
}


// ✅ Slugify Function (Converts Text to URL-Friendly Format)
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

module.exports = fetchDynamicPaths;
