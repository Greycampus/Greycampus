import React, { useState, useMemo, useCallback, useRef } from 'react';
import { string, object } from 'yup';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomTextField from './customTextField';
import Box from '@mui/material/Box';

const validationSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email').required('Email is required'),
    phoneNumber: string()
        .matches(
            /^[0-9]{10}$/,
            'Phone number must be exactly 10 digits'
        )
        .required('Phone number is required'),
    company: string().required('Company is required'),
    designation: string().required('Designation is required'),
    message: string().required('Message is required'),
});

const ContactForm = ({ text }: { text?: string }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        designation: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const debounceTimeout = useRef<NodeJS.Timeout | null>(null); // Store the debounce timeout reference

    // Memoize the validation schema to prevent re-creating it on each render
    const memoizedValidationSchema = useMemo(() => validationSchema, []);

    // Custom debounce function to delay validation calls
    const debounce = (func: Function, delay: number) => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current); // Clear previous timeout
        }
        debounceTimeout.current = setTimeout(() => func(), delay);
    };

    // Debounced validation handler
    const handleValidation = useCallback((name: string, value: string) => {
        debounce(() => {
            memoizedValidationSchema
                .validateAt(name, { ...formData, [name]: value })
                .then(() => setErrors((prev) => ({ ...prev, [name]: '' })))
                .catch((err) => setErrors((prev) => ({ ...prev, [name]: err.message })));
        }, 300); // 300ms debounce delay
    }, [formData, memoizedValidationSchema]);

    // Handle input changes and perform validation
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        handleValidation(name, value); // Trigger debounced validation
    }, [handleValidation]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await memoizedValidationSchema.validate(formData, { abortEarly: false });
            alert(JSON.stringify(formData, null, 2));
            setErrors({});
        } catch (validationErrors) {
            const formattedErrors: Record<string, string> = {};
            (validationErrors as any).inner.forEach((error: any) => {
                formattedErrors[error.path] = error.message;
            });
            setErrors(formattedErrors);
        }

        setIsSubmitting(false);
    };

    return (
        <Box sx={{ p: '20px', borderRadius: '16px', bgcolor: '#fff', mb: '20px' }}>
            {text && (
                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', mb: '20px' }}>
                    {text}
                </Typography>
            )}
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="phoneNumber"
                            label="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="company"
                            label="Company"
                            value={formData.company}
                            onChange={handleChange}
                            error={!!errors.company}
                            helperText={errors.company}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            name="designation"
                            label="Designation"
                            value={formData.designation}
                            onChange={handleChange}
                            error={!!errors.designation}
                            helperText={errors.designation}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                            name="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                            <Typography sx={{ fontFamily: "Poppins, sans-serif", textTransform: 'none' }}>
                                Contact Us
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactForm;