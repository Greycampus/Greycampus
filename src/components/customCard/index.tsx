import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Link from 'next/link';

// Define the prop types for the component
interface CustomCardProps {
  title: string;
  category: string;
  author?: string;
  published_date?: string;
  onReadMorePath: string; // Optional callback,
  isOpenCampusBlog?: boolean;
  opencampus_category?: any;
  opencampus_sub_category?: any;
  publishedAt?: string
}

type detailObj = {
  title: string;
  category: string;
  author: string;
  published_date: string;
}

const styles = {
  iconLine: { 
    display: 'flex', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    mb: '8px'
  },
  iconLineTxt: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    textTransform: 'capitalize'
  },
  iconLineIcon: {
    width: '20px',
    height: '18px',
    mr: '8px'
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    color: '#fff',
    textTransform: 'capitalize'
  }
}

const getIcon = (name: string) => {
  switch (name) {
    case 'tag':
      return <LocalOfferOutlinedIcon sx={styles.iconLineIcon}/>
    
    case 'grad':
      return <SchoolOutlinedIcon sx={[styles.iconLineIcon, { height: '24px'}]}/>

    case 'event':
      return <CalendarTodayOutlinedIcon sx={styles.iconLineIcon}/>

    default:
      return <></>;
  }
}

const getIconStringBox = (arr: any []) => {
  return (
    <Box>
      {arr.map((item) => {
        return (
          <Box sx={styles.iconLine} key={item.key}>
            {getIcon(item.icon)}
            <Typography sx={styles.iconLineTxt}>{item.txt}</Typography>
          </Box>
        )
      })}
    </Box>
  )
}

const getIconTextArr = (details: detailObj ) => {
    return ([
      { icon: 'tag', txt:   details.category, key: details.title },
      { icon: 'grad', txt:  details.author, key: details.title },
      { icon: 'event', txt: details.published_date, key: details.title }
    ])
}

// Correct way to define the functional component
const CustomCard: React.FC<CustomCardProps> = ({ title, category, author, published_date, onReadMorePath, isOpenCampusBlog = false, opencampus_category, opencampus_sub_category, publishedAt }) => {

  const iconTxtArr = getIconTextArr({ title, category: isOpenCampusBlog ? opencampus_category.name : category, author: isOpenCampusBlog ? 'Admin' : author || '',  published_date: isOpenCampusBlog ? publishedAt || '' : published_date || ''})

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: '12px',
        minHeight: '136px',
        height: { xs: 'auto',  sm:'136px'},
        borderWidth: '1px',
        borderColor: '#34AEB5',
        borderStyle: "solid"
        //height: "100vh", // Full viewport height for demonstration
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          width: "32px", // Fixed width for left section
          backgroundColor: "#FF8C42", // Example color
          display: "flex",
          height: '100%',
          maxWidth: '32px',
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        }} 
      />

      {/* Right Section (Flexible Box) */}
      <Box
        sx={{
          flexGrow: 1, // Take up remaining space
          display: "flex",
          px: '24px',
          py: '16px',
          width:'100%',
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px',
          color: '#fff'
        }}
      > 
        <Box sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'flex-start', color: '#fff', height: "calc(100% - 32px)", }}>
          <Box sx={{ height: "calc(100% - 32px)", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mt: 0}}>
            <Typography sx={styles.title}>
              {title}
            </Typography>
            <Link href={onReadMorePath} passHref >
              <Typography
                component="a"
                sx={{
                  fontSize: "14px",
                  color: "#34AEB5",
                  textDecoration: "none",
                  marginTop: "8px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Read More..
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: { xs: 'none', sm: 'block' }, bgcolor: '#34AEB5', width: '4px', borderRadius: '4px', height: "calc(100% - 32px)", // Adjust height to fit content
            mx: "16px", }}/>
          {getIconStringBox(iconTxtArr)}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCard;
