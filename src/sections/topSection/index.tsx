import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import { API_URL } from "src/utilities/resources";
import HubspotForm from "../../components/hubspot-form/index";
import Image from 'next/image';

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
            <Image
                src={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
            />
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