import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HubspotBrochureForm from "@components/hubspot-brochure-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height:400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
