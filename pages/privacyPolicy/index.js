import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Head from "next/head";

const parseMarkdown = (markdown) => {
    if (!markdown) return "";

    return markdown
        .replace(
            /^### (.*$)/gm,
            `<div style="display: flex; justify-content: flex-start; align-items: center; gap: 20px; margin-bottom: 12px;">
                <div style="width: 72px; height: 4px; background-color: #34AEB5; border-radius: 2px;"></div>
                <h3 style="margin: 0;">$1</h3>
            </div>`,
        ) // H3 with Divider
        .replace(/^## (.*$)/gm, "<h2>$1</h2>") // H2
        .replace(/^# (.*$)/gm, "<h1>$1</h1>") // H1
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
        .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
        .replace(/~~(.*?)~~/g, "<del>$1</del>") // Strikethrough
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>') // Links
        .replace(/^- (.*)$/gm, "<li>$1</li>") // List Items
        .replace(/\n/g, "<br/>"); // Line breaks
};

const PrivacyPolicy = ({ terms }) => {
    const { title, content } = terms;

    return (
        <>
            <Head>
                <title>Privacy Policy | GreyCampus</title>
                <meta name="description" content="We at GreyCampus respect your right to privacy. Find all the information related to our privacy policy here." />
                <meta property="og:description" content="We at GreyCampus respect your right to privacy. Find all the information related to our privacy policy here." />
                <meta property="og:title" content="Privacy Policy | GreyCampus" />
                <meta name="twitter:description" content="We at GreyCampus respect your right to privacy. Find all the information related to our privacy policy here." />
                <meta name="twitter:title" content="Privacy Policy | GreyCampus" />
                <link rel="canonical" href='https://www.greycampus.com/privacyPolicy' />

            </Head>
            <Box
                className="privacy-policy"
                sx={{
                    padding: "32px",
                    backgroundColor: "#000", // Black background
                    color: "#fff", // White text color
                    margin: "0 auto", // Center horizontally
                }}
            >
                {/* Header Section */}
                <Typography
                    sx={{
                        textAlign: "center",
                        //marginBottom: "16px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "48px",
                    }}
                >
                    {title}
                </Typography>

                {/* Divider */}
                <Divider
                    sx={{
                        width: "72px", // Adjust width of the divider
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
                        fontFamily: "Poppins, sans-serif", // Apply globally to all text
                        "& p": {
                            fontSize: "16px", // Set paragraph font size
                            marginBottom: "8px", // Optional: Add spacing between paragraphs
                        },
                        "& h3": {
                            fontSize: "24px", // Set H3 font size
                            fontWeight: "bold", // Optional: Make H3 bold
                        },
                    }}
                    dangerouslySetInnerHTML={{
                        __html: parseMarkdown(content),
                    }}
                />
            </Box>
        </>
    );
};

export async function getStaticProps() {
    // Replace `API_URL` with your Strapi endpoint
    const TermsEndPoint =
        process.env.NEXT_PUBLIC_API_SERVER_ENDPOINT + `/api/privacy-policy?timestamp=${Date.now()}`;

    const res = await fetch(TermsEndPoint);
    const data = await res.json();

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