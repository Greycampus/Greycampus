import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { API_URL } from 'src/utilities/resources';

const NotFoundPage = () => {

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                background: `url(${API_URL}/uploads/gc_bg_1_min_3700ac9eb5_3a45950ddb.webp) no-repeat center center`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            }}
        >
            <Typography variant="h3" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Page Not Found!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                We have recently upgraded our website. If you are using an old link to enroll in a course, it might not work.
            </Typography>
            <Button variant="contained" color="primary" href="/">
                Return To GreyCampus
            </Button>
        </Box>
    );
}

export default NotFoundPage;
