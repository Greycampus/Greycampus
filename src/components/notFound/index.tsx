import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NotFoundPage = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                background: `url(https://www.greycampus.com/hubfs/404.webp) no-repeat center center`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.common.white
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
