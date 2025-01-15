import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

// Styles Object
const styles = {
    container: {
        backgroundImage: "url('https://www.greycampus.com/hubfs/GreyCampus/Backgrounds/alumni.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: "4rem 2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        fontFamily: 'Poppins'
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for readability
        zIndex: -1,
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "2rem",
    },
    card: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        padding: "16px",
        textAlign: "left",
        height: "100%",
        maxHeight: '160px',
        mb: '16px'
    },
    cardText: {
        fontSize: "1rem",
        lineHeight: "1.5",
    },
};

// Data for Program Highlights
const highlights = [
    {
        id: 1,
        text: "Flexible training delivery models – Live online, in-person and hybrid",
    },
    {
        id: 2,
        text: "Fully customised training programs aligned with specific outcomes",
    },
    {
        id: 3,
        text: "Access to feature-rich Learning Management System for all delivery models",
    },
    {
        id: 4,
        text: "Live online sessions and doubt clarification support for real time interaction with industry experts",
    },
    {
        id: 5,
        text: "Industry experts as instructors to provide a very hands-on practical training experience",
    },
    {
        id: 6,
        text: "Labs, projects, capstones and simulators for practice and reinforced learning",
    },
];

const ProgramHighlights = () => {
    return (
        <Box sx={styles.container}>
            {/* Background Overlay */}
            <Box sx={styles.overlay}></Box>

            {/* Title */}
            <Typography sx={styles.title}>Program Highlights</Typography>

            {/* Highlights Grid */}
            <Grid container spacing={3} rowSpacing={4}>
                {highlights.map((highlight) => (
                    <Grid item xs={12} sm={6} md={4} key={highlight.id} sx={{ mb: '16px'}}>
                        <Card sx={{ ...styles.card, }}>
                            <CardContent>
                                <Typography sx={styles.cardText}>{highlight.text}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProgramHighlights;
