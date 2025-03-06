import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HubspotBrochureForm from "@components/hubspot-brochure-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "80%", md: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: '16px', sm: '46px' },
};

export default function DownloadBrochureModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {open && <HubspotBrochureForm handleClose={handleClose} />} {/* ✅ Pass handleClose */}
      </Box>
    </Modal>
  );
}
