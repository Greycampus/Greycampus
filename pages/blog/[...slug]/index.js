import BlogDetails from "../../../src/components/blogDetails";

const EachBlog = ({ blog }) => {
    return <BlogDetails blog={blog} />;
};

export async function getStaticPaths() {
    const API_URL = `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/blogs?timestamp=${Date.now()}`;

    const res = await fetch(API_URL);
    const blogs = await res.json();

    const paths = blogs.data
        .map((blog) => {
            let postUrl = blog.post_url;

            // Remove base URL if it exists
            postUrl = postUrl.replace(/^https?:\/\/www\.greycampus\.com\/blog\//, '');

            // Remove leading/trailing slashes & split into array
            const slugParts = postUrl.replace(/^\/|\/$/g, '').split('/');

            return {
                params: { slug: slugParts },
            };
        })
        .filter((path) => path.params.slug.length > 0); // Remove empty slugs

    return {
        paths,
        fallback: true, // Enable fallback for new blog posts
    };
}

export async function getStaticProps({ params }) {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;
    const BASE_URL = "https://www.greycampus.com/blog";

    // Construct full post_url from slug array
    const post_url = `${BASE_URL}/${params.slug.join("/")}`;

    // Fetch blog data
    const res = await fetch(
        `${API_URL}/api/blogs?populate=*&filters[post_url][$eq]=${encodeURIComponent(post_url)}&timestamp=${Date.now()}`
    );

    const data = await res.json();
    console.log("Fetched Blog Data:", data);

    // ✅ Redirect to home page if no blog is found
    if (!data || !data.data || data.data.length === 0) {
        return {
            redirect: {
                destination: "/", // Redirect to home page
                permanent: false, // Set to true if blog is permanently deleted
            },
        };
    }

    return {
        props: {
            blog: data.data[0], // ✅ Always return a valid blog object
        },
        revalidate: 10, // ✅ Revalidate every 10 seconds
    };
}

export default EachBlog;
