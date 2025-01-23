import Box from "@mui/material/Box";
import VideoSection from "./videoComponent";
import { useEffect, useState } from "react";
import { API_URL } from "src/utilities/resources";
import HubspotForm from "../../components/hubspot-form/index";

const BASE64_PLACEHOLDER = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA1hJREFUWEe9V1l2nEAMpCG/cBc7sTNeJ/H9z0TnSSqpS4Kx/RXseeytUqm00NbrtU+02UnT/9i6nHT9163LMX47HffdruOZHi/g1Tb2bqB9DcDf+k8ABJk6HFsFACAHBuC9XlcK9M83PdKlMrsHBjIAIMGCvrDuxVDQz8YREkAIALqUGQ9YrU0FAAzGQ98BcGbcWGBxBasA4udtvf5JInQNKhOJv0HtYODEeBIhFnA/2nDQ1z8CcKo4CQ4hOMsAyobIAmM9UR8gDEwBUNIvMWBxV2GdpmAB4Bnra4jhRL+dt/X6N4cgZUBZRekdhnoS4hBf1IKkfKd/ANHbGwAkFCkMJf+ZATChQDz9XAMpk0VPMKwhGEwHAM77XAduARAyXIRi/4SBFO8zAE0Y+DhmAaizcoKct/qaPeWSjLwzjbj6iXb1mugHy217/1B2Pt9sxVi8aCHSMkCy8tkoQOhtZIECSPE6gxJdCAWGyrF7fBZ7SzQYu6WBCiDShoEQxjDk1a4UqHiN6XePawgkC94oDV00B0aKTJK3peae0ZmUn6thBnArFN/USB4iSMmRdrRQaOD1k0LEhuOYPah6qfdOFwgBWiF6oWaUnme0Q9UjYxqEzOU703uU85HKtj1jJKtNyJ+tuYvzdiOvXfiHcJxVmy4MPDEALyDkseesGkYDiWO/VtkonlJfr/pt2+X9WIiohZpR+s1iDOfzPI7jnRvGaU4YxbVPbbu8nQwk3LnaNM3k6TzjfJ5aXHcgo8JF/H0+9DGuAGnb46sykLsh1W2Z2xqMuscKQgDYdWNktrDXWsKGY54Y/aWtDy8lBFQyQbUbGkbdOPbynAPhqTe852+Hjs5pINr68FxCUACIl8KC7BcxuJj3C7PAWmANjJ5h7XrXSZpbd1t/PZVm5AMDxd7pXhYAWRIAYwhAI53RK6hldwDQ0Q7X2/rzQgCoWbjAON4CYHEGHARAcXawAsUYvh/6LgOMDTEDwP3vAYAnGBcWqJ9mM6gAAMTCYABGRtQQ2AeMe5/2UojWOwCgWt+T+ECvGq0Acii8XvhSY1YUFsx73TsjMimud48HBgwAUkxDwF7j+AcAuSg5JT0ETvW+gwEBADHiXgbgH6ZfAVDj+EV2uAgpBBFrGCYgroN/MoNGH/t9N0kAAAAASUVORK5CYII="; // Replace with your Base64 string
const HIGH_RES_IMAGE = `${API_URL}/uploads/gc_bg_6fa78c7ac0.webp`;

const TopSection = () => {
    const [backgroundImage, setBackgroundImage] = useState(BASE64_PLACEHOLDER);

    useEffect(() => {
        const img = new Image();
        img.src = HIGH_RES_IMAGE;

        img.onload = () => {
            setBackgroundImage(HIGH_RES_IMAGE); // Replace placeholder with high-res image
        };
    }, []);


    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                //height: "100vh", // ✅ Ensure it covers the full viewport height
                backgroundImage: `url(${backgroundImage})`, // ✅ Use background in CSS
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    py: "80px",
                    display: { md: "flex" },
                    justifyContent: "space-between",
                    px: "20px",
                    maxWidth: "1280px",
                    flex: 1,
                }}
            >
                <Box sx={{ flex: 1, mr: { sm: "0px", md: "40px" }, mb: "16px" }}>
                    <VideoSection />
                </Box>
                <Box sx={{ flex: 1, mb: '24px' }}>
                <Box
      sx={{
        backgroundColor: "white", // Set background to white
        padding: "20px", // Add padding
        borderRadius: "8px", // Optional: Add rounded corners
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
        maxWidth: "600px", // Limit the width
      }}
    >
      <HubspotForm />
    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TopSection;