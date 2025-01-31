import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { API_URL } from "src/utilities/resources";
import DownloadBrochureModal from "@components/css/modal";
// Styles Object
const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        padding: "3rem 2rem",
        textAlign: "center",
        fontFamily: 'Poppins, sans-serif',
    },
    title: {
        fontSize: "2.5rem",
        //fontWeight: "bold",
        marginBottom: "2rem",
        lineHeight: "1.2",
        fontFamily: 'Poppins, sans-serif',
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
        textTransform: 'none',
        fontFamily: 'Poppins, sans-serif',
    },
};

// Data for Cards
const trainingPrograms = [
    {
        id: 1,
        title: "New Hire Training",
        description:
            "Align the skills of your new hires to the business requirements at the earliest; reduce the time to project deployment.",
        imageUrl: `${API_URL}/uploads/image_asset_aa885af99b.jpeg`,
    },
    {
        id: 2,
        title: "Pre-Hire Training",
        description:
            "Hiring freshers from colleges? Get them trained even before their first day at your company and get them to be productive from Day 1.",
        imageUrl: `${API_URL}/uploads/image_asset_4_5726ef9458.webp`,
    },
    {
        id: 3,
        title: "Executive upskilling",
        description:
            "Upskill your team in the latest tools and technologies using dynamic experiential methodologies to boost their efficiency and performance.",
        imageUrl: `${API_URL}/uploads/image_asset_2_de9cdb598d.webp`,
    },
    {
        id: 4,
        title: "Leadership Training",
        description:
            "Build leaders and take your organisation to new heights with custom-built leadership training programs.",
        imageUrl: `${API_URL}/uploads/image_asset_3_acb0543820.webp`,
    },
];

const TrainingProgramsSection = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                                <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px' }}>
                                    {program.title}
                                </Typography>
                                <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>{program.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Download Brochure Button */}
            <Button variant="contained" sx={styles.button} onClick={handleOpen}>
                <Typography sx={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif', }}>
                    Download Brochure
                </Typography>
            </Button>

            <DownloadBrochureModal open={open} handleClose={handleClose} />

                    </Box>
    );
};

export default TrainingProgramsSection;
