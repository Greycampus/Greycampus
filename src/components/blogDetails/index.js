import { Box, Typography, Divider, Grid } from "@mui/material";
import ReactMarkdown from "react-markdown"; // Markdown parser
import { useRouter } from "next/router";

const styles = {
    metadataBox: {
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    metadataTxt: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
    },
};

const BlogDetails = ({ blog }) => {
    const router = useRouter();

    // Fallback loading state
    if (router.isFallback) {
        return <Typography>Loading...</Typography>;
    }

    const { title, content, published_date, author, category } = blog;

    return (
        <Box
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                padding: { xs: "16px", md: "32px" },
                //minHeight: "100vh",
                fontFamily: "Poppins, sans-serif",
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for desktop
                gap: "24px",
            }}
        >   
            
            {/* Left Section - Content */}
            <Box
                sx={{
                    flex: 2, // Take 2/3 of the width
                    fontSize: "16px",
                    lineHeight: "1.8",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "24px",
                        textAlign: "left",
                        fontSize: "48px",
                    }}
                >
                    {title}
                </Typography>

                {/* Content Section */}
                <Box sx={{ maxWidth: "800px" }}>
                    <ReactMarkdown
                        components={{
                            p: ({ node, ...props }) => (
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "16px",
                                    }}
                                    {...props}
                                />
                            ),
                            h1: ({ node, ...props }) => (
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "32px",
                                        mt: "40px",
                                        mb: "20px",
                                    }}
                                    {...props}
                                />
                            ),
                            h2: ({ node, ...props }) => (
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "24px",
                                        mt: "40px",
                                        mb: "20px",
                                    }}
                                    {...props}
                                />
                            ),
                            li: ({ node, ...props }) => (
                                <Typography
                                    component="li"
                                    sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "16px",
                                        marginLeft: "16px",
                                    }}
                                    {...props}
                                />
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </Box>
            </Box>

            {/* Right Section - Metadata */}
            <Box
                sx={{
                    flex: 1, // Take 1/3 of the width
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    textAlign: "center",
                }}
            >
                <Box sx={styles.metadataBox}>
                    <Typography variant="body1" sx={styles.metadataTxt}>
                        Date
                    </Typography>
                    <Typography sx={styles.metadataTxt}>
                        {new Date(published_date).toLocaleString()}
                    </Typography>
                </Box>

                <Box sx={styles.metadataBox}>
                    <Typography variant="body1" sx={styles.metadataTxt}>
                        About Author
                    </Typography>
                    <Typography sx={styles.metadataTxt}>{author}</Typography>
                </Box>

                <Box sx={styles.metadataBox}>
                    <Typography variant="body1" sx={styles.metadataTxt}>
                        Category
                    </Typography>
                    <Typography sx={styles.metadataTxt}>{category}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogDetails;
