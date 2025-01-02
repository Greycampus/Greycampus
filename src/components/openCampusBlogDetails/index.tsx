import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image"; // or use a standard <img> with responsive styles
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

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
`

type ResourceBoxProps = {
    text: string;
    link: string;
};

const styles = {
    container: {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
       // width: "100%",
        gap: 2,
        background: "#000",
        px: '16px',
        pt: '48px'
    },
    left: {
        flex: 1,
        maxWidth: { xs: "100%", sm: "300px" },
        wordWrap: "break-word",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        gap: 2,
    },
    center: {
        flex: 2,
        maxWidth: "100%",
        padding: "16px",
        wordWrap: "break-word",
        color: "#fff",
    },
    right: {
        flex: 1,
        maxWidth: { xs: "100%", sm: "300px" },
        wordWrap: "break-word",
        flexWrap: "wrap",
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
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#34AEB5',
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        "&.Mui-expanded": {
           // backgroundColor: "#34AEB5",
            //color: "#34AEB5",
        },
        "&:before": {
            display: "none",
        },
    },
    accordionSummary: {
        fontWeight: "bold",
        fontFamily: "Poppins, sans-serif",
        "&.Mui-expanded": {
            // backgroundColor: "#34AEB5",
            color: "#34AEB5",
        },
    },
    subHeader: { fontFamily: "Poppins, sans-serif", fontSize: '20px', mb: '8px', color: '#fff'},
    resourceBox: { height: '40px', borderRadius: '4px', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderWidth: '1px', borderColor: '#fff', mb: '8px', px: '16px', borderStyle: 'solid', }
};

const ResourceBox:React.FC<ResourceBoxProps> = ({text, link}) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(link);
    } 

    return (
        <Box sx={styles.resourceBox} onClick={handleClick}>
            <Typography sx={{ fontSize: '16px', color: '#fff', fontFamily: "Poppins, sans-serif", }}>{text}</Typography>
        </Box>
    )
}


const ARR_LINKS = [{ text: "Open Campus", link: '/openCampus' }, { text: "Blog", link: '/blog' }, { text: "Mock Exams", link: '/notFound' }, { text: "Downloadables", link: '/notFound' }]

const CustomComponent = ({ blog }) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const [expanded, setExpanded] = useState(null);
    const { loading, error, data: allCategoryBlogs } = useQuery(GET_RELATED_BLOGS, { variables: { documentId: blog.documentId } })
    console.log("check data here---", allCategoryBlogs)
    const subCategories =  !loading  && allCategoryBlogs ? allCategoryBlogs.data.opencampus_category.open_campus_blogs.map((blog) => blog.opencampus_sub_category.name) : [];
    const getBlogForSubCategory = (category: string) => {
        return allCategoryBlogs.data.opencampus_category.open_campus_blogs.filter((blog) => blog.opencampus_sub_category.name == category) ?? []
    }

    
    
    const renderContent = (block) => {
        if (block.__component === "rich-text.text-block") {
            return (
                <ReactMarkdown key={block.id}>
                    {block.textContent}
                </ReactMarkdown>
            );
        }

        if (block.__component === "image.image-block") {
            return block.imge.map((image) => {
                const src = image.formats?.medium?.url || image.formats?.small?.url || image.url;
                const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT
                console.log("check img url ---", src)
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

        return null; // Fallback for unhandled components
    };


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };


    return (
        <Box sx={styles.container}>
            {/* Left Section */}
            <Box sx={styles.left}>
                <Typography sx={styles.subHeader}>Premium Resources</Typography>
                <ResourceBox text="Training Courses" link={'/openCampus'}  />
                <Typography sx={[styles.subHeader,{ mt: '16px'}]}>Free Resources</Typography>
                {ARR_LINKS.map((item, index) => (
                    <ResourceBox text={item.text} link={item.link} key={item.text}/>
                ))}
            </Box>

            {/* Center Section */}
            <Box sx={styles.center}>
                <Typography variant="h4" gutterBottom>
                    {blog.title || "Blog Title"}
                </Typography>
                {blog.content.map((block) => renderContent(block))}
            </Box>

            {/* Right Section */}
            <Box sx={styles.right}>
                {subCategories.map((section, index) => (
                    <Accordion
                        key={index}
                        sx={styles.accordion}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                    >
                        <AccordionSummary
                            expandIcon={
                                expanded === index ? (
                                    <CloseIcon sx={{ color: expanded === index ? "#34AEB5" : '#fff' }}/>
                                ) : (
                                        <AddIcon sx={{ color: "#fff" }} />
                                )
                            }
                            sx={styles.accordionSummary}
                        >
                            <Typography>{section}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {getBlogForSubCategory(section).map((item) => 
                            <Link href={`/openCampus/${item.documentId}`}>
                                <Typography>{item.title}</Typography>
                            </Link>
                        )}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default CustomComponent;