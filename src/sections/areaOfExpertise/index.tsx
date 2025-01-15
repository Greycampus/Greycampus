import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Styles Object
const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        padding: "4rem 2rem",
        fontFamily: 'Poppins'
    },
    title: {
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        textAlign: "left",
    },
    expertiseItem: {
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
    },
};

// Data for Areas of Expertise
const expertiseAreas = [
    "Data Analytics",
    "Data Visualisation",
    "AI and ML",
    "Adoption of Generative AI",
    "Business Analytics",
    "Data Engineering",
    "Full Stack Development",
    "Cyber Security",
    "Cloud Computing",
    "Digital Marketing",
    "Six Sigma",
    "Project Management",
    "Performance Management",
    "Leadership",
    "Design Thinking",
    "Innovation Mindset",
    "Communication skills",
    "Team Building and Management",
    "and more...",
];

const AreasOfExpertise = () => {
    return (
        <Box sx={styles.container}>
            {/* Title */}
            <Typography sx={styles.title}>Some of our areas of expertise</Typography>

            {/* Expertise Grid */}
            <Grid container spacing={3}>
                {expertiseAreas.map((area, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Typography sx={styles.expertiseItem}>{area}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AreasOfExpertise;
