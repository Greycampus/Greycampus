import React, { useState } from "react";
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
        fontFamily: 'Poppins, sans-serif',
    },
    accordion: {
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderBottom: "1px solid #333",
    },
    summary: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
    },
    details: {
        textAlign: "left",
        backgroundColor: "#333",
        padding: "1rem",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "1.5rem",
    },
};

const HowWeWork = () => {
    const [expanded, setExpanded] = useState(null);

    const steps = [
        { title: "Step 1: Need Analysis", content: "We analyse and understand the training needs to establish outcome-focussed requirements" },
        { title: "Step 2: Customisation", content: "Our subject matter experts work with your technical team to build custom training programs aligned to the established needs" },
        { title: "Step 3: Delivery", content: "Expert trainers deploy hands-on training as per the training plan; learners are given access to a robust LMS with multiple learning resources" },
        { title: "Step 4: Assessments and Reports", content: "Assessments in multiple variants are built into every trainng program. Progress reports of the training along with comprehensive assessment report is submitted" },
    ];

    const handleChange = (index) => (event, isExpanded) => {
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
                                    <RemoveIcon style={{ color: "#fff" }} />
                                ) : (
                                    <AddIcon style={{ color: "#fff" }} />
                                )
                            }
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            sx={styles.summary}
                        >
                            <Typography>{step.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={styles.details}>
                            <Typography>{step.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default HowWeWork;
