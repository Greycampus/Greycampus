import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { removeParagraph } from '../../utilities/removeParagraph'
import Head from "next/head";

// ✅ Function to Convert Markdown to HTML (No `react-markdown`)
const parseMarkdown = (markdown: string) => {
    if (!markdown) return "";

    return markdown
        .replace(/^### (.*$)/gm, "<h3>$1</h3>") // H3
        .replace(/^## (.*$)/gm, "<h2>$1</h2>") // H2
        .replace(/^# (.*$)/gm, "<h1>$1</h1>") // H1
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
        .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
        .replace(/~~(.*?)~~/g, "<del>$1</del>") // Strikethrough
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>') // Links
        .replace(/^- (.*)$/gm, "<li>$1</li>") // List Items
        .replace(/\n/g, "<br/>"); // Line breaks
};

// ✅ Styles (Same as before)
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

const BlogDetails = ({ blog }: { blog: any }) => {
    const router = useRouter();
    const currentUrl = `https://www.greycampus.com${router.asPath}`;

    // Fallback loading state
    if (router.isFallback) {
        return <Typography>Loading...</Typography>;
    }

    const { post_title, post_body, publish_date, author, category, post_seo_title, post_url, meta_description, featured_image_url } = blog;

    useEffect(() => {
        removeParagraph()
    })
    return (
        <>
            <Head>
                <title>{post_seo_title && post_seo_title}</title>
                <meta name="description" content={meta_description && meta_description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:description" content={meta_description && meta_description} />
                <meta property="og:title" content={post_seo_title && post_seo_title} />
                <meta name="twitter:description" content={meta_description && meta_description} />
                <meta name="twitter:title" content={post_seo_title && post_seo_title}></meta>
                <meta property="og:image" content={featured_image_url && featured_image_url}/>
                <meta property="og:image:width" content="998"/>
                <meta property="og:image:height" content="523"/>
                <meta name="twitter:image" content={featured_image_url && featured_image_url}/>
                <meta property="og:url" content={currentUrl && currentUrl}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <link rel="canonical" href={currentUrl && currentUrl}/>
                <meta property="og:type" content="article"/>
                <meta http-equiv="content-language" content="en-us"/>


                </Head>

                                            <Box
                                                sx={{
                                                    backgroundColor: "#000",
                                                    color: "#fff",
                                                    padding: { xs: "16px", md: "32px" },
                                                    fontFamily: "Poppins, sans-serif",
                                                    display: "flex",
                                                    flexDirection: { xs: "column", md: "row" },
                                                    gap: "24px",
                                                }}
                                            >
                                                {/* Left Section - Content */}
                                                <Box
                                                    sx={{
                                                        flex: 2,
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
                                                        {post_title}
                                                    </Typography>

                                                    {/* ✅ Content Section (Uses `dangerouslySetInnerHTML`) */}
                                                    <Box sx={{ maxWidth: "800px" }}>
                                                        <Box
                                                            sx={{
                                                                fontFamily: "Poppins, sans-serif",
                                                                fontSize: "16px",
                                                                lineHeight: "1.8",
                                                            }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: parseMarkdown(post_body),
                                                            }}
                                                        />
                                                    </Box>
                                                </Box>

                                                {/* Right Section - Metadata */}
                                                <Box
                                                    sx={{
                                                        flex: 1,
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
                                                            {new Date(publish_date).toLocaleString()}
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
                                        </>
                                        );
};

                                        export default BlogDetails;