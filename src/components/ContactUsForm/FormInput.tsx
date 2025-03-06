import React from "react";
import { TextField } from "@mui/material";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean; // ✅ Added multiline support
  rows?: number;       // ✅ Added rows for multiline inputs
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  disabled,
  required,
  multiline = false, // ✅ Default to false
  rows = 4,          // ✅ Default to 4 rows for multiline inputs
}) => (
  <TextField
    fullWidth
    label={label}
    variant="outlined"
    size="small"
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={error}
    disabled={disabled}
    required={required}
    multiline={multiline} // ✅ Apply multiline prop
    rows={multiline ? rows : undefined} // ✅ Apply row height only if multiline
  />
);

export default FormInput;
