import React from 'react';
import { Formik, Form } from 'formik';
import { string, object } from 'yup';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CustomTextField from './customTextField';
import Box from '@mui/material/Box';

//const CustomTextField = React.lazy(() => import('./customTextField'));

const validationSchema = object().shape({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    email: string().email('Invalid email').required('Email is required'),
    phoneNumber: string().required('Phone number is required'),
    company: string().required('Company is required'),
    designation: string().required('Designation is required'),
    message: string().required('Message is required'),
});

const ContactForm = ({ text }: { text?: string }) => {
    return (
        <Box sx={{ p: '20px', borderRadius: '16px', bgcolor: '#fff' }}>
            {text && (
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '24px',
                        mb: '20px',
                    }}
                >
                    {text}
                </Typography>
            )}
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    company: '',
                    designation: '',
                    message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <CustomTextField name="firstName" label="First Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField name="lastName" label="Last Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField name="email" label="Email" type="email" />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField name="phoneNumber" label="Phone Number" />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField name="company" label="Company" />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField name="designation" label="Designation" />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    name="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                >
                                    <Typography sx={{ fontFamily: "Poppins, sans-serif", textTransform: 'none' }}>
                                        Contact Us
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
