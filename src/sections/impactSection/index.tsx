import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Styles Object
const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        py: '80px',
        px: "20px",
        textAlign: "left",
        flex: 1,
        display: {
            md: 'flex'
        },
        fontFamily: 'Poppins, sans-serif',
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        lineHeight: "1.2",
    },
    description: {
        fontSize: "1rem",
        marginBottom: "2rem",
        color: "#aaa",
    },
    statBox: {
        border: "2px solid #fff",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        height: "100%",
        maxHeight: '260px',
        mb: '8px'
    },
    image: {
        width: "50px",
        height: "50px",
        marginBottom: "1rem",
    },
    statTitle: {
        fontSize: "1.2rem",
        fontWeight: "500",
    },
};

// Array for Stats Data
const stats = [
    {
        id: 1,
        imageUrl: "https://www.greycampus.com/hubfs/GreyCampus/icons/glance-1.svg",
        title: "Learners from 40+ countries",
    },
    {
        id: 2,
        imageUrl: "https://www.greycampus.com/hubfs/GreyCampus/icons/glance-2.svg",
        title: "Across 1000+ Organizations",
    },
    {
        id: 3,
        imageUrl: "https://www.greycampus.com/hubfs/GreyCampus/icons/glance-3.svg",
        title: "Spending 1M+ hours on our platform and courses",
    },
];

const ImpactSection = () => {
    return (
        <Box sx={styles.container}>
            {/* Left Section */}
            <Box sx={{ maxWidth: "600px", flex: 1, mr: '16px' }}>
                <Typography sx={styles.title}>
                    Creating Impact Through Professional Trainings Globally Since 2014
                </Typography>
                <Typography sx={styles.description}>
                    Winner of Deloitte Fastest 50 Awards for the fastest growing company
                    in India four years in a row - 2015, 2016, 2017 and 2018
                </Typography>
            </Box>

            {/* Right Section */}
            <Box sx={{ flex: 1}}>
                <Grid container spacing={3}>
                    {stats.map((stat) => (
                        <Grid item xs={12} md={4} key={stat.id}>
                            <Box sx={styles.statBox}>
                                <img
                                    src={stat.imageUrl}
                                    alt={stat.title}
                                    style={styles.image}
                                    loading="lazy"
                                />
                                <Typography sx={styles.statTitle}>{stat.title}</Typography>
                            </Box>
                        </Grid>

                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ImpactSection;
