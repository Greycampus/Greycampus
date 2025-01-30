import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {modifyLinks} from '../../utilities/modifyLinks'
const BlogList = dynamic(() => import("@components/openCampusBlogList"), {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <Typography>Loading...</Typography>, // Fallback during lazy loading
});

// ✅ Function to Convert Markdown to HTML
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
        .replace(/\n/g, "<br/>"); // Line breaks
};

// ✅ Function to Render Blog Content (Text + Images)
const renderContent = (block: any) => {
    if (block.__component === "rich-text.text-block") {
        return (
            <Box
                key={block.id}
                sx={{ mb: 2, color: "#fff" }}
                dangerouslySetInnerHTML={{
                    __html: parseMarkdown(block.textContent),
                }}
            />
        );
    }

    if (block.__component === "image.image-block") {
        return block.imge.map((image: any) => {
            const src =
                image.formats?.medium?.url ||
                image.formats?.small?.url ||
                image.url;
            const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

            return (
                <Box key={image.id} sx={{ width: "100%", borderRadius: "8px", overflow: "hidden", marginBottom: "16px" }}>
                    <Image
                        src={API_URL + src}
                        alt={image.alternativeText || "Blog Image"}
                        layout="responsive"
                        width={image.width}
                        height={image.height}
                        priority
                    />
                </Box>
            );
        });
    }
    return null;
};

// ✅ Left Sidebar Component with Clickable Buttons
const LeftSidebar = () => {
    const resourceLinks = [
        { label: "Training Courses", path: "/notFound" },
        { label: "Open Campus", path: "/openCampus" },
        { label: "Blog", path: "/blog" },
        { label: "Mock Exams", path: "/notFound" },
        { label: "Downloadables", path: "/notFound" }
    ];

    return (
        <Box sx={{ flex: 1, bgcolor: "black", p: 3, color: "white" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Premium Resources
            </Typography>
            <Link href="/notFound" passHref>
                <Button variant="outlined" fullWidth sx={{ mb: 2, color: "white", borderColor: "white" }}>
                    Training Courses
                </Button>
            </Link>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
                Free Resources
            </Typography>
            {resourceLinks.slice(1).map((item) => (
                <Link key={item.label} href={item.path} passHref>
                    <Button variant="outlined" fullWidth sx={{ mb: 2, color: "white", borderColor: "white" }}>
                        {item.label}
                    </Button>
                </Link>
            ))}
        </Box>
    );
};

const CustomComponent = ({ blog }: { blog: any }) => {

    if (!blog) {
        return <Typography>Loading blog data...</Typography>;
    }

    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 2, background: "#000", px: "16px", pt: "48px" }}>
            <LeftSidebar />
            <Box sx={{ flex: 2, padding: "16px", color: "#fff" }}>
                <Typography variant="h4" gutterBottom>{blog?.post_title || "Blog Title"}</Typography>
                <Box
                    className='post-body-content'
                    sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.8",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: modifyLinks(parseMarkdown(blog?.post_body || "")),
                    }}
                />
                {blog?.content?.map(renderContent)}
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <BlogList category={blog?.opencampus_category?.name} />
            </Box>
        </Box>
    );
};


export default CustomComponent;