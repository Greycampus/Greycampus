import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { AlertState } from "./types";

interface SnackbarAlertProps {
  alert: AlertState;
  onClose: () => void;

}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ alert, onClose }) => (
  <Snackbar  open={alert.open} autoHideDuration={4000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "right" }} sx={{ mt: '60px' }}>
    <Alert onClose={onClose} severity={alert.severity} sx={{ width: "100%" }}>
      {alert.message}
    </Alert>
  </Snackbar>
);

export default SnackbarAlert;
