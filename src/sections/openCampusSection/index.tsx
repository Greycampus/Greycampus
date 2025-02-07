import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import CustomCard from "@components/customCard";

// Styles Object
const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#fff",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), 
                          url('https://www.greycampus.com/hubfs/GreyCampus/Backgrounds/Training-calendar.png')`,
        backgroundSize: "cover",
        backgroundPosition: {
            xs: "left center", // Move to the right on small screens
            sm: "30% center",   // Slightly left for small devices
            md: "center",       // Center the image on medium and larger screens
        },
        minHeight: "400px",
        padding: "2rem",
        flex: 1,
        bgColor: '#000'
    },
    contentBox: {
        flex: 1,
        //maxWidth: "40%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    listItemText: {
        fontSize: "1.1rem",
        fontFamily: "Poppins, sans-serif",
    },
    divider: {
        width: "80px",
        height: "8px",
        backgroundColor: "#0C868D",
        borderRadius: "4px",
        marginTop: "1rem",
    },
    imageBox: {
        flex: 1,
    },
};

// Data Array for List Items
const listItems = [
    { text: "Understand which certification is right for you", icon: <MenuBookIcon sx={{ color: "#0C868D" }} /> },
    { text: "Know the top certifications to propel your career", icon: <SchoolIcon sx={{ color: "#0C868D" }} /> },
    { text: "Get tips from experts to excel in certification exams", icon: <PeopleIcon sx={{ color: "#0C868D" }} /> },
    { text: "Access useful toolkits to practice for certification exams", icon: <BuildIcon sx={{ color: "#0C868D" }} /> },
    { text: "Be aware of the latest exam trends and patterns", icon: <DescriptionIcon sx={{ color: "#0C868D" }} /> },
];

const OpenCampusSection: React.FC = ({posts}: any) => {


    const getStringPath = (post_url: string) => {
        return post_url.replace("https://www.greycampus.com/opencampus/", "/opencampus/");
    };


    // Add slugify function
const slugify = (text:any) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

    return (
        <Box>
            <Box sx={styles.container}>
                {/* Left Content */}
                <Box sx={styles.contentBox}>
                    <Typography
                        variant="h3"
                        sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
                    >
                        Open Campus
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "light",
                            maxWidth: "80%",
                        }}
                    >
                        The largest resource library on professional certifications
                    </Typography>
                    <Box sx={styles.divider}></Box>
                    <List>
                        {listItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{ sx: styles.listItemText }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#000', py: '48px', px: '16px', gap: 3 }}>
                {posts?.map((item: any) =>{
                 const relativePath = getStringPath(item.post_url);

                  return (  <Box key={item.id} sx={{ maxWidth: '900px', width: '100%' }}>
                         
                        {/* <CustomCard {...item} onReadMorePath={getStringPath(item.documentId)} isOpenCampusBlog={true}/> */}
                        <CustomCard {...item} onReadMorePath={relativePath} isOpenCampusBlog={true} />

                    </Box>
                  )
                }
                )}
            </Box>
        </Box>
    );
};

export default OpenCampusSection;