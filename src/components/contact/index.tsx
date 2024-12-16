import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Grid,
    Box,
    Typography,
} from '@mui/material';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    company: Yup.string().required('Company is required'),
    designation: Yup.string().required('Designation is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = ({text}: {text?: string}) => {
    return (
        <Box sx={{ p: '20px', borderRadius: '16px', bgcolor: '#fff'}}>
            {text && <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', mb: '20px'}}>{text}</Typography>}
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
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    variant="outlined"
                                />
                                <ErrorMessage name="firstName" component="div" />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    variant="outlined"
                                />
                                <ErrorMessage name="lastName" component="div" />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                />
                                <ErrorMessage name="email" component="div" />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Phone Number"
                                    name="phoneNumber"
                                    variant="outlined"
                                />
                                <ErrorMessage name="phoneNumber" component="div" />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Company"
                                    name="company"
                                    variant="outlined"
                                />
                                <ErrorMessage name="company" component="div" />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Designation"
                                    name="designation"
                                    variant="outlined"
                                />
                                <ErrorMessage name="designation" component="div" />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                                <ErrorMessage name="message" component="div" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                >
                                    Contact Us
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