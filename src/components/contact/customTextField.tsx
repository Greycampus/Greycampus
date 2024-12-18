import React from 'react';
import { TextField } from '@mui/material';
import { Field, FieldProps } from 'formik';

interface CustomTextFieldProps {
    name: string;
    label: string;
    type?: string;
    multiline?: boolean;
    rows?: number;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
    name,
    label,
    type = 'text',
    multiline = false,
    rows,
}) => {
    return (
        <Field name={name}>
            {({ field, meta }: FieldProps) => (
                <TextField
                    {...field}
                    fullWidth
                    label={label}
                    type={type}
                    variant="outlined"
                    multiline={multiline}
                    rows={multiline ? rows : undefined}
                    error={Boolean(meta.touched && meta.error)}
                    helperText={meta.touched && meta.error ? meta.error : ''}
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
            )}
        </Field>
    );
};

export default CustomTextField;