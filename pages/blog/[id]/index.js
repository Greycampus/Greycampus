import BlogDetails from "../../../src/components/blogDetails";

const EachBlog = ({blog}) => {
    return (
        <BlogDetails blog={blog}/>
    )
}

export async function getStaticPaths() {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + '/api/blogs?nocache=true';

    // Fetch all blog IDs from the API
    const res = await fetch(API_URL);
    const blogs = await res.json();

    // Create paths for each blog
    const paths = blogs.data.map((blog) => ({
        params: { id: blog.documentId }, 
    }));

    return {
        paths,
        fallback: true, // Enable fallback for new paths
    };
}

export async function getStaticProps({ params }) {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

    // Fetch data for the specific blog using the id from params
    const res = await fetch(`${API_URL}/api/blogs/${params.id}?nocache=true`);
    const data = await res.json();

    return {
        props: {
            blog: data.data, // Pass blog data as props
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

export default EachBlog;