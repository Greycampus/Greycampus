import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import HubspotForm from "../../components/hubspot-form/index";

const API_URL = process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT;

const TopSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp`;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundImage: bgLoaded
          ? `url(${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp)`
          : "url('/low-quality-placeholder.webp')",
        transition: "background-image 0.3s ease-in-out",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
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
