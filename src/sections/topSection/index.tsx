import Image from "next/image";
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
                display: "flex",
                justifyContent: "center",
            }}
        >
            {/* ✅ Replace backgroundImage with optimized Next.js Image */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0, // Places it behind content
                }}
            >
                <Image
                    src={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority // Ensures it loads early
                />
            </Box>

            {/* Content Box */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    py: "80px",
                    px: "20px",
                    width: "100%",
                    display: { md: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                {/* Video Section */}
                <Box sx={{ flex: 1 }}>
                    <VideoSection />
                </Box>

                {/* HubSpot Form Section */}
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            minHeight: "365px",
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
