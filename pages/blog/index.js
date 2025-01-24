import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import GreyCampusBlogSection from "src/sections/blogSection";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
const styles = {
    pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        mt: 3,
        "& .MuiPaginationItem-root": {
            color: "#fff",
            border: "none",
        },
        "& .Mui-selected": {
            backgroundColor: "#34AEB5",
            color: "#fff",
            borderRadius: "6px",
        },
        "& .MuiPaginationItem-previousNext": {
            color: "#34AEB5",
        },
    },
};

const Blogs = ({ initialBlogs, totalPages }) => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const pageSize = 5; // Fetch 5 blogs per page after initial load

    const fetchMoreBlogs = async (page) => {
        setLoading(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/blogs?pagination[page]=${page}&pagination[pageSize]=${pageSize}&nocache=true`,
            );
            const data = await res.json();
            setBlogs(data.data || []);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (currentPage > 1) {
            fetchMoreBlogs(currentPage);
        }
    }, [currentPage]);

    return (
        <>
            <Head>

                <title>Blog</title>
                <meta name="description" content="GreyCampus Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:description" content="GreyCampus Blog" />
                <meta property="og:title" content="Blog" />
                <meta name="twitter:description" content="GreyCampus Blog" />
                <meta http-equiv="content-language" content="en-us"/>

                {/* <meta name="twitter:title" content="Blog"></meta>
                <link rel="next" href="https://www.greycampus.com/blog/page/2" />
                <meta property="og:url" content="https://www.greycampus.com/blog"/>
                <meta property="og:type" content="blog" />
                <meta name="twitter:card" content="summary" />
                <link rel="alternate" type="application/rss+xml" href="https://www.greycampus.com/blog/rss.xml" />
                <meta name="twitter:domain" content="www.greycampus.com"></meta> */}
                                </Head>
                                <Box>
                                    {loading ? (
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                                            <CircularProgress color="primary" />
                                        </Box>
                                    ) : (
                                        <GreyCampusBlogSection
                                            posts={blogs}
                                        // currentPage={currentPage}
                                        // setCurrentPage={setCurrentPage}
                                        // totalPages={totalPages}
                                        />
                                    )}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            bgcolor: "#000",
                                            alignItems: "center",
                                            py: "16px",
                                        }}
                                    >
                                        <Pagination
                                            count={totalPages}
                                            page={currentPage}
                                            onChange={(event, value) => setCurrentPage(value)}
                                            color="primary"
                                            sx={styles.pagination}
                                        />
                                    </Box>
                                </Box>
                            </>

                            );
};

                            export default Blogs;

                            export async function getStaticProps() {
    const pageSize = 10; // Fetch the first 10 blogs at build time
                            const BlogEndpoint = `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/api/blogs?pagination[page]=1&pagination[pageSize]=${pageSize}&nocache=true`;

                            const res = await fetch(BlogEndpoint);
                            const data = await res.json();

                            return {
                                props: {
                                initialBlogs: data.data || [],
                            totalPages: data.meta.pagination.pageCount,
        },
                            revalidate: 60, // Revalidate every 60 seconds to keep fresh data
    };
}