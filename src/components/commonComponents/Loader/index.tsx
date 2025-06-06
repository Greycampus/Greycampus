import React from 'react'
import { CircularProgress, Box } from '@mui/material';
const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <CircularProgress size={60} color="primary" />
    </Box>
  )
}

export default Loader