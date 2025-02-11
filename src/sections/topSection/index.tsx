import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import { API_URL } from "src/utilities/resources";
import HubspotForm from "../../components/hubspot-form/index";

const TopSection = () => {

    return (
        <Box
        sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex", // Ensures content aligns correctly
            justifyContent: "center", // Centers the inner content
        }}
    >
        <Box
            sx={{
                position: "relative",
                zIndex: 1,
                py: "80px",
                px: "20px",
                width: "100%",
                display: { md: "flex" },
                justifyContent: "space-between", // ✅ Proper spacing between columns
                alignItems: "center",
                gap: "40px", // Optional: Adds spacing between items
            }}
        >
            <Box sx={{ flex: 1 }}>
                <VideoSection />
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        width: "100%", // Ensures responsiveness,
                        minHeight:"365px",
                    }}
                >
                    <HubspotForm formId="hubspotForm2" />
                </Box>
            </Box>
        </Box>
    </Box>
    
    );
};

export default TopSection;