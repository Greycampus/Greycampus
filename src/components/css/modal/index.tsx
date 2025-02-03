import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HubspotBrochureForm from "@components/hubspot-brochure-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs:'80%',
    sm:'80%',
    md:'400px'
  },
  height:350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: {
    xs:2,
    sm:2,
    md:4
  },
};

// ✅ Pass `open` prop to trigger form load
export default function DownloadBrochureModal({ open, handleClose }:{ open:any, handleClose:any }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <HubspotBrochureForm formId="brochureForm10" />
      </Box>
    </Modal>
  );
}
