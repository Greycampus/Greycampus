import OpenCampusSection from "src/sections/openCampusSection";
import { Box } from "@mui/material";
import GreyCampusBlogSection from "src/sections/blogSection";
import { GetStaticProps } from "next";


const Blogs = ({ blogs }) => {
    return (
        <Box>
            <OpenCampusSection posts={blogs}/>
        </Box>
    )
}

export default Blogs;

export async function getStaticProps() {
    const BlogEndpoint = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + '/api/open-campus-blogs?populate=*';
    const res = await fetch(BlogEndpoint);
    const posts = await res.json()

    return {
        props: {
            blogs: posts.data || [],
        },
    };
}
