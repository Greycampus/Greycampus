import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import CustomCard from "@components/customCard";

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), 
                          url('https://www.greycampus.com/hubfs/GreyCampus/Backgrounds/blog.webp')`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "left center", sm: "30% center", md: "center" },
        minHeight: "300px",
        padding: "2rem",
    },
    contentBox: { flex: 1, textAlign: "left" },
    title: { fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "2.5rem", marginBottom: "1rem" },
    description: { fontFamily: "Poppins, sans-serif", fontWeight: "light", fontSize: "1.1rem", lineHeight: "1.6" },
    divider: { width: "80px", height: "8px", backgroundColor: "#0C868D", borderRadius: "4px", marginTop: "1rem" },
};

const GreyCampusBlogSection = ({ posts }: {posts: any}) => {

    const getStringPath = (id: string) => `/blog/${id || ""}`;

    return (
        <Box sx={{ flex: 1 }}>
            <Box sx={styles.container}>
                <Box sx={styles.contentBox}>
                    <Typography variant="h3" component="h1" sx={styles.title}>
                        The GreyCampus Blog
                    </Typography>
                    <Typography sx={styles.description}>
                        A dedicated blog for professional certifications across the world. GreyCampus
                        provides abundant resources on professional certification like PMP, Six Sigma,
                        ITIL and more.
                    </Typography>
                    <Box sx={styles.divider}></Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#000', py: '48px', px: '16px', gap: 3 }}>
                {posts?.map((item: any) => (
                    <Box key={item.id} sx={{ maxWidth: '900px', width: '100%' }}>
                        <CustomCard {...item} onReadMorePath={getStringPath(item.documentId)} />
                    </Box>
                ))}
                {/* <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    sx={{ mt: 3 }}
                /> */}
            </Box>
        </Box>
    );
};

export default GreyCampusBlogSection;