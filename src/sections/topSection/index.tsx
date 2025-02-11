import Image from "next/image";
import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import HubspotForm from "../../components/hubspot-form/index";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const TopSection = () => {
    return (
<>
            {/* ✅ Optimized Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
                <Image
                    src={`${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    priority // ✅ Ensures early loading for LCP optimization
                />
            </Box>

      
            </>
    );
};

export default TopSection;
