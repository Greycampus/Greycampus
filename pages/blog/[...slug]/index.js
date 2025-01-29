import BlogDetails from "../../../src/components/blogDetails";

const EachBlog = ({ blog }) => {
    return (
        <BlogDetails blog={blog} />
    );
};

export async function getStaticPaths() {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + `/api/blogs?timestamp=${Date.now()}`;

    // Fetch all blog URLs from the API
    const res = await fetch(API_URL);
    const blogs = await res.json();

    // Create paths for each blog, assuming the 'post_url' structure is /categoryname/post-title
    const paths = blogs.data.map((blog) => ({
        params: { slug: blog.post_url.split('/').slice(1) },  // Split URL and create the slug path
    }));

    // console.log('paths------------', paths);
    
    return {
        paths,
        fallback: true, // Enable fallback for new paths
    };
}

export async function getStaticProps({ params }) {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;
    // console.log('params----------------------------', params);

    // Construct the full post_url from the slug array
    const post_url = `${params.slug.join('/')}`;
    

    // Fetch data for the specific blog using the constructed post_url
    const res = await fetch(`${API_URL}/api/blogs?populate=*&filters[post_url][$eq]=https://www.greycampus.com/blog/${post_url}&timestamp=${Date.now()}`);
    
    const url = `${API_URL}/api/blogs?populate=*&filters[post_url][$eq]=https://www.greycampus.com/blog/${post_url}&timestamp=${Date.now()}`
    // console.log('url-----------------', url);
    
    const data = await res.json();
    // console.log('data-----------------------', data);
    
    return {
        props: {
            blog: data.data, // Pass blog data as props
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

export default EachBlog;
