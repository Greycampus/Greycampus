/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://greycampus.vercel.app/', 
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,

    // Additional paths for dynamic routes
    additionalPaths: async (config) => {
        const dynamicRoutes = await fetchDynamicRoutes();
        return dynamicRoutes.map((route) => ({
            loc: route, // URL Path
            changefreq: 'weekly',
            priority: 0.7,
        }));
    },
};

// Function to fetch all paginated blog posts from Strapi API
async function fetchAllBlogs() {
    let allBlogs = [];
    let page = 1;
    let pageSize = 25; // Adjust if Strapi allows a larger page size
    let totalPages = 1;

    try {
        while (page <= totalPages) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}?pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
            const response = await res.json();

            if (response.data && response.data.length > 0) {
                allBlogs = [...allBlogs, ...response.data]; // Append new data
            }

            // Update totalPages dynamically
            totalPages = response.meta.pagination.pageCount;
            console.log(`Fetched page ${page} of ${totalPages}`);

            page++; // Move to the next page
        }
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }

    return allBlogs; // Return all collected blog data
}

// Function to fetch dynamic routes (e.g., blog and openCampus pages)
async function fetchDynamicRoutes() {
    const blogs = await fetchAllBlogs();

    // Extract blog slugs from post_url and remove base URL
    const blogRoutes = blogs.map(blog => {
        const slug = blog.post_url.replace("https://www.greycampus.com/blog/", "");
        return `/blog/${slug}`;
    });

    // OpenCampus example (if fetching from another API, modify here)
    const openCampusRoutes = [
        { post_title: 'new-campus-launch' },
        { post_title: 'ai-in-education' },
    ].map(post => `/openCampus/${post.post_title}`);

    return [...blogRoutes, ...openCampusRoutes];


}