import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';
import { styled } from '@mui/system';

interface FormikTextFieldProps extends TextFieldProps {
    label: string; // Label is a required string
    name: string;  // Name is a required string
}


// Styled component for TextField
const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
}));

// Reusable Formik-aware TextField component
const FormikTextField: React.FC<FormikTextFieldProps> = ({ label, name, ...props }) => {
    const { values, handleChange, handleBlur, touched, errors } = useFormikContext(); // Access Formik context

    return (
        <StyledTextField
            name={name}
            value={values[name]} // Bind value from Formik state
            onChange={handleChange} // Handle value changes
            onBlur={handleBlur} // Handle blur events
            label={label}
            error={touched[name] && Boolean(errors[name])} // Show error if field is touched and has an error
            helperText={touched[name] && errors[name]} // Display error message
            {...props} // Additional props like id, type, etc.
        />
    );
};

export default FormikTextField;
