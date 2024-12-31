import { Box, Typography, Divider } from "@mui/material";

const PrivacyPolicy = ({ terms }) => {
    const { title, content } = terms;

    const renderContent = (content) => {
        return content.map((block, index) => {
            switch (block.type) {
                case "paragraph":
                    return (
                        <Typography
                            key={index}
                            paragraph
                            sx={{
                                marginBottom: "16px",
                                lineHeight: "1.8",
                                fontSize: "16px",
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            {block.children
                                .map((child, i) => child.text)
                                .join("")}
                        </Typography>
                    );

                case "heading":
                    // Check if the heading text is empty
                    const headingText = block.children
                        .map((child) => child.text)
                        .join("")
                        .trim();
                    if (!headingText) return null; // Return null if the text is empty

                    return (
                        <Box
                            key={index} // Added key to the outer Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center", // Align items in the center vertically
                                my: "60px", // Margin for top and bottom spacing
                            }}
                        >
                            {/* Divider */}
                            <Box
                                sx={{
                                    width: "72px", // Adjust width of the divider
                                    height: "4px", // Adjust thickness
                                    backgroundColor: "#34AEB5", // Teal color
                                    borderRadius: "2px", // Rounded edges
                                    marginRight: "20px", // Space between divider and text
                                    alignSelf: "flex-end", // Align divider at the bottom
                                }}
                            />

                            {/* Text */}
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: "24px",
                                    fontFamily: "Poppins, sans-serif",
                                    lineHeight: "1", // Ensure no extra space above or below the text
                                }}
                            >
                                {headingText}
                            </Typography>
                        </Box>
                    );

                default:
                    return null;
            }
        });
    };

    return (
        <Box
            sx={{
                padding: "32px",
                backgroundColor: "#000", // Black background
                color: "#fff", // White text color
                //maxWidth: "800px", // Centered layout
                margin: "0 auto", // Center horizontally
            }}
        >
            {/* Header Section */}
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    marginBottom: "16px",
                    fontWeight: "bold",
                }}
            >
                {title}
            </Typography>

            {/* Divider */}
            <Divider
                sx={{
                    width: "72px", // Adjust the width of the divider
                    margin: "0 auto",
                    height: "4px", // Divider thickness
                    borderRadius: "4px",
                    backgroundColor: "#34AEB5", // Teal color
                    marginBottom: "24px",
                }}
            />

            {/* Dynamic Content */}
            <Box
                sx={{
                    width: "100%", // Full width by default
                    maxWidth: { xs: "90%", sm: "75%", md: "70%" }, // Adjust width based on breakpoints
                    textAlign: { xs: "center", sm: "justify" }, // Center-align for small screens, justify for larger
                    margin: "0 auto", // Center horizontally
                }}
            >
                {renderContent(content)}
            </Box>
        </Box>
    );
};

export async function getStaticProps() {
    // Replace `API_URL` with your Strapi endpoint
    const TermsEndPoint =
        process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + "api/privacy-policy";
    const res = await fetch(TermsEndPoint);
    const data = await res.json();
    console.log("check data ---", data);

    return {
        props: {
            terms: {
                title: data.data.title,
                content: data.data.content,
            },
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}

export default PrivacyPolicy;
