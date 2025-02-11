import Image from "next/image";
import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import HubspotForm from "../../components/hubspot-form/index";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

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
            {/* ✅ Keeping <picture> for Future Scalability */}
            <picture>
                <source
                    media="(max-width: 699px)"
                    srcSet={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                    type="image/webp"
                />
                <source
                    media="(max-width: 640px)"
                    srcSet={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                    type="image/webp"
                />
                <Image
                    src={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    priority
                    loading="eager"
                />
            </picture>

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
