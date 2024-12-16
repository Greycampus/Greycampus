import { Box } from "@mui/material";
import React from "react";

const WidthWrapper = ({ children, ...props }) => {

    return (
        <Box sx={{ maxWidth: '1280px'}} {...props}>
            {children}
        </Box>
    )
}

export default WidthWrapper;