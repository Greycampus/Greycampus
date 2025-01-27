import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress, Link } from "@mui/material";

// Define the type for a blog
type Blog = {
    documentId: string; // Replace this with the actual type of your documentId
    post_title: string;
};

const API_URL =
    process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT +
    "/api/open-campus-blogs?populate=*";

const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]); // Use Blog[] as the type
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchBlogs = async () => {
        if (!hasMore || loading) return;

        setLoading(true);
        try {
            const response = await fetch(
               `${API_URL}&pagination[page]=${page}&pagination[pageSize]=20&timestamp=${Date.now()}`
            )
            const data = await response.json();
            const newBlogs: Blog[] = data.data || []; // Type the response as Blog[]

            setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
            setHasMore(newBlogs.length > 0);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            fetchBlogs();
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <Box
           className='custom-scrollbar'
            sx={{
                maxHeight: "500px",
                overflowY: "scroll",
                margin: "0 auto",
                border: "1px solid #fff",
                borderRadius: "8px",
                p: 2,
                bgcolor: "#000",
                color: "#fff",
            }}
            onScroll={handleScroll} // Attach the scroll event to the container
        >
            <Typography variant="h5" sx={{ mb: 2, textAlign: "center", color: "#fff" }}>
                Related Blogs
            </Typography>
            {blogs.map((blog, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    sx={{
                        mb: 1,
                        cursor: "pointer",
                        display: "block",
                        textDecoration: "underline",
                        "&:hover": {
                            color: "#ccc",
                        },
                    }}
                    component={Link}
                    href={`/openCampus/${blog.documentId}`} // Replace with the actual blog URL or slug
                    underline="none"
                    color="inherit"
                >
                    {blog.post_title || "Untitled Blog"}
                </Typography>
            ))}
            {loading && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <CircularProgress sx={{ color: "#fff" }} />
                </Box>
            )}
            {!hasMore && (
                <Typography
                    variant="body2"
                    sx={{ textAlign: "center", mt: 2, color: "GrayText" }}
                >
                    No more blogs to display.
                </Typography>
            )}
        </Box>
    );
};

export default BlogList;