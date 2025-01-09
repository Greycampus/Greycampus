import React from 'react';
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
    name: string;
    label: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;  // ✅ Change type from `string` to `boolean`
    helperText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    name,
    label,
    type = 'text',
    multiline = false,
    rows,
    value,
    onChange,
    error,
    helperText
}) => {
    return (
        <TextField
            name={name}
            label={label}
            type={type}
            fullWidth
            variant="outlined"
            multiline={multiline}
            rows={multiline ? rows : undefined}
            value={value}
            onChange={onChange}
            error={Boolean(error)}
            helperText={helperText || ''}
            InputProps={{
                style: {
                    borderRadius: '8px',
                    height: multiline ? 'auto' : '48px', // Fix height for single-line fields
                },
            }}
            InputLabelProps={{
                style: {
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                        borderColor: '#3f51b5', // Hover color
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#3f51b5', // Focus color
                    },
                },
                '& .MuiFormHelperText-root': {
                    color: 'red',
                    marginTop: '4px',
                },
            }}
        />
    );
};

export default CustomTextField;