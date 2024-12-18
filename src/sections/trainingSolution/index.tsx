import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

// Styles Object
const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        padding: "3rem 2rem",
        textAlign: "center",
        fontFamily: 'Poppins'
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        lineHeight: "1.2",
        fontFamily: 'Poppins'
    },
    card: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        textAlign: "left",
        height: "100%",
    },
    media: {
        height: "180px",
    },
    cardContent: {
        padding: "1.5rem",
    },
    button: {
        marginTop: "2rem",
        backgroundColor: "#28C8D0",
        color: "#fff",
        padding: "0.75rem 2rem",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: "#1FA0A6",
        },
    },
};

// Data for Cards
const trainingPrograms = [
    {
        id: 1,
        title: "New Hire Training",
        description:
            "Align the skills of your new hires to the business requirements at the earliest; reduce the time to project deployment.",
        imageUrl: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/image_asset.jpeg?width=500&height=334&name=image_asset.jpeg",
    },
    {
        id: 2,
        title: "Pre-Hire Training",
        description:
            "Hiring freshers from colleges? Get them trained even before their first day at your company and get them to be productive from Day 1.",
        imageUrl: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/image-asset-4.webp?width=1000&height=667&name=image-asset-4.webp",
    },
    {
        id: 3,
        title: "Executive upskilling",
        description:
            "Upskill your team in the latest tools and technologies using dynamic experiential methodologies to boost their efficiency and performance.",
        imageUrl: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/image-asset-2.webp?width=500&height=333&name=image-asset-2.webp",
    },
    {
        id: 4,
        title: "Leadership Training",
        description:
            "Build leaders and take your organisation to new heights with custom-built leadership training programs.",
        imageUrl: "https://www.greycampus.com/hs-fs/hubfs/GC(B2B)/image-asset-3.webp?width=500&height=333&name=image-asset-3.webpg",
    },
];

const TrainingProgramsSection = () => {
    return (
        <Box sx={styles.container}>
            {/* Section Title */}
            <Typography sx={styles.title}>
                Designing and Delivering Customised Training Solutions to Suit the Specific Needs of Your Organisation
            </Typography>

            {/* Training Programs Grid */}
            <Grid container spacing={3}>
                {trainingPrograms.map((program) => (
                    <Grid item xs={12} sm={6} md={3} key={program.id}>
                        <Card sx={styles.card}>
                            <CardMedia
                                component="img"
                                image={program.imageUrl}
                                alt={program.title}
                                sx={styles.media}
                            />
                            <CardContent sx={styles.cardContent}>
                                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins' }}>
                                    {program.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>{program.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Download Brochure Button */}
            <Button variant="contained" sx={styles.button}>
                Download Brochure
            </Button>
        </Box>
    );
};

export default TrainingProgramsSection;
