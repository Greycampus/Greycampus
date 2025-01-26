import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { removeParagraph } from "src/utilities/removeParagraph";

// ✅ GraphQL Query
const GET_RELATED_BLOGS = gql`
    query Query($documentId: ID!) {
        data: openCampusBlog(documentId: $documentId) {
            opencampus_category {
                open_campus_blogs {
                    post_title
                    documentId
                    opencampus_sub_category {
                        name
                    }
                }
            }
        }
    }
`;

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

// ✅ Function to Render Accordions
const renderAccordion = (
    subCategories: string[],
    getBlogForSubCategory: (category: string) => any[],
    expanded: number | null,
    setExpanded: (index: number | null) => void
) => {
    return subCategories.map((section: string, index: number) => (
        <Accordion
            key={index}
            sx={{
                backgroundColor: "#000",
                border: "1px solid #34AEB5",
                color: "#fff",
                "&:before": { display: "none" },
            }}
            expanded={expanded === index}
            onChange={() => setExpanded(expanded === index ? null : index)}
        >
            <AccordionSummary expandIcon={expanded === index ? <CloseIcon sx={{ color: "#34AEB5" }} /> : <AddIcon sx={{ color: "#fff" }} />} sx={{
                fontWeight: "bold",
                "&.Mui-expanded": { color: "#34AEB5" },
            }}>
                <Typography>{section}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {getBlogForSubCategory(section).map((item: any) => (
                    <Link key={item.documentId} href={`/openCampus/${item.documentId}`} passHref>
                        <Typography>{item.post_title}</Typography>
                    </Link>
                ))}
            </AccordionDetails>
        </Accordion>
    ));
};

const CustomComponent = ({ blog }: { blog: any }) => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [allCategoryBlogs, setAllCategoryBlogs] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        removeParagraph()
        const fetchRelatedBlogs = async () => {
            setLoading(true);
            setError(null);
            try {
                const API_URL = `${process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT}/graphql`;
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: GET_RELATED_BLOGS.loc?.source.body,
                        variables: { documentId: blog?.documentId },
                    }),
                });

                const result = await response.json();
                if (result.errors) throw new Error("GraphQL query failed");

                setAllCategoryBlogs(result.data);
            } catch (err) {
                console.error("GraphQL fetch error:", err);
                setError("Failed to load related blogs.");
            }
            setLoading(false);
        };

        if (blog?.documentId) fetchRelatedBlogs();
    }, [blog?.documentId]);

    const subCategories =
        allCategoryBlogs?.data.opencampus_category.open_campus_blogs
            .map((blog: any) => blog.opencampus_sub_category?.name)
            .filter((name: string | undefined) => name) ?? [];

    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", gap: 2, background: "#000", px: "16px", pt: "48px" }}>
            <LeftSidebar />
            <Box sx={{ flex: 2, padding: "16px", color: "#fff" }}>
                <Typography variant="h4" gutterBottom>{blog?.post_title || "Blog Title"}</Typography>
                <Box
                    sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.8",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: parseMarkdown(blog?.post_body),
                    }}
                />
                {blog?.content.map(renderContent)}
            </Box>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                {loading && <Typography>Loading...</Typography>}
                {error && <Typography color="error">{error}</Typography>}
                {!loading && !error && renderAccordion(
                    subCategories,
                    (category) => allCategoryBlogs?.data.opencampus_category.open_campus_blogs.filter(
                        (blog: any) => blog.opencampus_sub_category?.name === category
                    ),
                    expanded,
                    setExpanded
                )}
            </Box>
        </Box>
    );
};

export default CustomComponent;
