import React, { SyntheticEvent, useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Styles Object
const styles = {
    container: {
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
    },
    accordion: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
    },
    summary: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "16px",
        borderBottom: "1px solid #fff", // Default border
        "&.Mui-expanded": {
            padding: "16px", // Maintain consistent padding when expanded
        },
    },
    details: {
        textAlign: "left",
        backgroundColor: "#333",
        padding: "1rem",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "1.5rem",
        fontFamily: "Poppins, sans-serif",
    },
};

const HowWeWork = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const steps = [
        {
            title: "Step 1: Need Analysis",
            content:
                "We analyse and understand the training needs to establish outcome-focused requirements.",
        },
        {
            title: "Step 2: Customisation",
            content:
                "Our subject matter experts work with your technical team to build custom training programs aligned to the established needs.",
        },
        {
            title: "Step 3: Delivery",
            content:
                "Expert trainers deploy hands-on training as per the training plan; learners are given access to a robust LMS with multiple learning resources.",
        },
        {
            title: "Step 4: Assessments and Reports",
            content:
                "Assessments in multiple variants are built into every training program. Progress reports of the training along with a comprehensive assessment report are submitted.",
        },
    ];

    const handleChange = (index: number) => (event: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? index : null);
    };

    return (
        <Box sx={styles.container}>
            <Typography variant="h2" sx={styles.title}>
                How we work
            </Typography>
            <Box>
                {steps.map((step, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        sx={styles.accordion}
                    >
                        <AccordionSummary
                            expandIcon={
                                expanded === index ? (
                                    <RemoveIcon style={{ color: '#34AEB5' }} />
                                ) : (
                                    <AddIcon style={{ color: "#fff" }} />
                                )
                            }
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={{
                                ...styles.summary,
                                borderBottom:
                                    expanded === index
                                        ? "2px solid #34AEB5" // Highlighted border on expand
                                        : "1px solid #fff", // Default border
                                transition: "border-color 0.3s ease", // Smooth transition
                            }}
                        >
                            <Typography sx={{ fontFamily: "Poppins, sans-serif", color: expanded === index ? '#34AEB5' : '#fff' }}>
                                {step.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                ...styles.details,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            <Typography>{step.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default HowWeWork;