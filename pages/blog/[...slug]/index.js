import BlogDetails from "../../../src/components/blogDetails";

const EachBlog = ({ blog }) => {
    return <BlogDetails blog={blog} />;
};

export async function getStaticPaths() {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + `/api/blogs?timestamp=${Date.now()}`;

    const res = await fetch(API_URL);
    const blogs = await res.json();

    const paths = blogs.data
        .map((blog) => {
            let postUrl = blog.post_url;

            // Remove the base URL if it exists (ensure we only get the path)
            postUrl = postUrl.replace(/^https?:\/\/www\.greycampus\.com\/blog\//, '');

            // Ensure postUrl is correctly formatted (no leading or trailing slashes)
            postUrl = postUrl.replace(/^\/|\/$/g, '');

            // Split postUrl into slug array
            const slugParts = postUrl.split('/');

            return {
                params: { slug: slugParts },
            };
        })
        .filter((path) => path.params.slug.length > 0); // Ensure we don't add empty slugs

    return {
        paths,
        fallback: true, // Enable fallback for new paths
    };
}

export async function getStaticProps({ params }) {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;
    const BASE_URL = "https://www.greycampus.com/blog"; // Ensure this matches your Strapi data

    // Construct full post_url from slug array
    const post_url = `${BASE_URL}/${params.slug.join('/')}`;

    // Fetch data for the specific blog using the full post_url
    const res = await fetch(
        `${API_URL}/api/blogs?populate=*&filters[post_url][$eq]=${encodeURIComponent(post_url)}&timestamp=${Date.now()}`
    );
    
    const url=  `${API_URL}/api/blogs?populate=*&filters[post_url][$eq]=${encodeURIComponent(post_url)}&timestamp=${Date.now()}`
    console.log('url------------', url);
    

    const data = await res.json();
    console.log('data--------------', data)

    return {
        props: {
            blog: data.data.length > 0 ? data.data[0] : null, // Pass first blog entry if found
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

export default EachBlog;
