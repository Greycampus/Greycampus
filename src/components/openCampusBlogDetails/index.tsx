import React, { useState } from "react";
import dynamic from "next/dynamic"; // ✅ Lazy-load heavy components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client/react/hooks";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import { initializeApollo } from "@services/graphql";

// ✅ Lazy Load ApolloProvider
const ApolloProvider = dynamic(() =>
    import("@apollo/client").then((mod) => mod.ApolloProvider),
    { ssr: false }
);

// ✅ GraphQL Query
const GET_RELATED_BLOGS = gql`
    query Query($documentId: ID!) {
        data: openCampusBlog(documentId: $documentId) {
            opencampus_category {
                open_campus_blogs {
                    title
                    documentId
                    opencampus_sub_category {
                        name
                    }
                }
            }
        }
    }
`;

type ResourceBoxProps = {
    text: string;
    link: string;
};

// ✅ Optimized MUI imports (Tree Shaking)
const styles = {
    container: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: 2,
        background: "#000",
        px: '16px',
        pt: '48px'
    },
    left: {
        flex: 1,
        maxWidth: { xs: "100%", sm: "300px" },
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },
    center: {
        flex: 2,
        maxWidth: "100%",
        padding: "16px",
        color: "#fff",
    },
    right: {
        flex: 1,
        maxWidth: { xs: "100%", sm: "300px" },
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },
    imageContainer: {
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden",
    },
    accordion: {
        backgroundColor: "#000",
        border: '1px solid #34AEB5',
        color: "#fff",
        "&:before": { display: "none" },
    },
    accordionSummary: {
        fontWeight: "bold",
        "&.Mui-expanded": { color: "#34AEB5" },
    },
    subHeader: { fontSize: '20px', mb: '8px', color: '#fff' },
    resourceBox: { height: '40px', borderRadius: '4px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', border: '1px solid #fff', mb: '8px', px: '16px' }
};

const ResourceBox: React.FC<ResourceBoxProps> = ({ text, link }) => {
    const router = useRouter();

    return (
        <Box sx={styles.resourceBox} onClick={() => router.push(link)}>
            <Typography sx={{ fontSize: '16px', color: '#fff' }}>{text}</Typography>
        </Box>
    );
};

const ARR_LINKS = [{ text: "Open Campus", link: '/openCampus' }, { text: "Blog", link: '/blog' }, { text: "Mock Exams", link: '/notFound' }, { text: "Downloadables", link: '/notFound' }];

const CustomComponent = ({ blog }: { blog: any }) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const [expanded, setExpanded] = useState<number | null>(null);

    // ✅ Initialize Apollo Client only when needed
    const apolloClient = initializeApollo();
    const { loading, data: allCategoryBlogs } = useQuery(GET_RELATED_BLOGS, { variables: { documentId: blog?.documentId } });

    const subCategories = !loading && allCategoryBlogs ?
        allCategoryBlogs.data.opencampus_category.open_campus_blogs.map((blog: any) => blog.opencampus_sub_category.name)
        : [];

    const getBlogForSubCategory = (category: string) => {
        return allCategoryBlogs?.data.opencampus_category.open_campus_blogs.filter((blog: any) => blog.opencampus_sub_category.name === category) ?? [];
    };

    const renderContent = (block: any) => {
        if (block.__component === "rich-text.text-block") {
            return <ReactMarkdown key={block.id}>{block.textContent}</ReactMarkdown>;
        }

        if (block.__component === "image.image-block") {
            return block.imge.map((image: any) => {
                const src = image.formats?.medium?.url || image.formats?.small?.url || image.url;
                const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;
                return (
                    <Box key={image.id} sx={styles.imageContainer}>
                        <Image
                            src={API_URL + src}
                            alt={image.alternativeText || "Blog Image"}
                            layout="responsive"
                            width={image.width}
                            height={image.height}
                        />
                    </Box>
                );
            });
        }
        return null;
    };

    return (
        <ApolloProvider client={apolloClient}>
            <Box sx={styles.container}>
                {/* Left Section */}
                <Box sx={styles.left}>
                    <Typography sx={styles.subHeader}>Premium Resources</Typography>
                    <ResourceBox text="Training Courses" link={'/openCampus'} />
                    <Typography sx={[styles.subHeader, { mt: '16px' }]}>Free Resources</Typography>
                    {ARR_LINKS.map((item) => <ResourceBox text={item.text} link={item.link} key={item.text} />)}
                </Box>

                {/* Center Section */}
                <Box sx={styles.center}>
                    <Typography variant="h4" gutterBottom>{blog?.title || "Blog Title"}</Typography>
                    {blog?.content.map((block: any) => renderContent(block))}
                </Box>

                {/* Right Section */}
                <Box sx={styles.right}>
                    {subCategories.map((section: string, index: number) => (
                        <Accordion
                            key={index}
                            sx={styles.accordion}
                            expanded={expanded === index}
                            onChange={() => setExpanded(expanded === index ? null : index)}
                        >
                            <AccordionSummary expandIcon={expanded === index ? <CloseIcon sx={{ color: "#34AEB5" }} /> : <AddIcon sx={{ color: "#fff" }} />} sx={styles.accordionSummary}>
                                <Typography>{section}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {getBlogForSubCategory(section).map((item: any) => (
                                    <Link key={item.documentId} href={`/openCampus/${item.documentId}`} passHref>
                                        <Typography>{item.title}</Typography>
                                    </Link>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </ApolloProvider>
    );
};

export default CustomComponent;