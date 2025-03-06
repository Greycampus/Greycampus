import React, { useState } from "react";
import { Grid, Button, MenuItem, CircularProgress, TextField } from "@mui/material";
import countryCode from "../../data/countryCode.json";
import FormInput from "./FormInput";
import SnackbarAlert from "./SnackbarAlert";
import { FormData, Errors, AlertState } from "./types";

// Find default country (Ensure fallback)
const defaultCountry = countryCode.find((c) => c.country === "India") || { id: 0, country: "India", code: "91" };

const ContactUsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: defaultCountry.country,
    phone: `+${defaultCountry.code} `,
    company: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: "", severity: "success" });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (loading) return;

    const { name, value } = e.target;

    if (name === "phone") {
      const countryCode = formData.phone.split(" ")[0];
      if (!value.startsWith(countryCode)) return;

      setFormData((prev) => ({
        ...prev,
        [name]: `${countryCode} ${value.replace(countryCode, "").trim()}`,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle Country Change
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading) return;

    const selectedCountry = countryCode.find((c) => c.country === e.target.value);
    if (selectedCountry) {
      setFormData((prev) => ({
        ...prev,
        country: selectedCountry.country,
        phone: `+${selectedCountry.code} `,
      }));
    }
  };

  // Form Validation
  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim() || formData.phone.length < 5) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setAlert({ open: true, message: "Email sent successfully!", severity: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: defaultCountry.country,
          phone: `+${defaultCountry.code} `,
          company: "",
          department: "",
          message: "",
        });
      } else {
        setAlert({ open: true, message: "Something went wrong. Please try again later.", severity: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ open: true, message: "Failed to send email. Please check your internet connection.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SnackbarAlert  alert={alert} onClose={() => setAlert({ ...alert, open: false })} />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} rowSpacing={3}>
          {/* First Name & Last Name */}
          {["firstName", "lastName"].map((name) => (
            <Grid item md={6} xs={12} key={name}>
              <FormInput label={name.replace(/^\w/, (c) => c.toUpperCase())} name={name as keyof FormData} value={formData[name as keyof FormData]} onChange={handleChange} error={errors[name as keyof Errors]} disabled={loading} />
            </Grid>
          ))}

          {/* Email */}
          <Grid item md={6} xs={12}>
            <FormInput label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} disabled={loading} />
          </Grid>


        {/* Country Dropdown */}
        <Grid item md={2} xs={4}>
            <TextField select fullWidth label="Country" variant="outlined" size="small" name="country" value={formData.country} onChange={handleCountryChange} disabled={loading}>
              {countryCode.map((country) => (
                <MenuItem key={country.id} value={country.country}>
                  {country.country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>


          {/* Phone Number */}
          <Grid item md={4} xs={8}>
            <FormInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} disabled={loading} />
          </Grid>



          {/* Company & Department */}
          {["company", "department"].map((name) => (
            <Grid item md={6} xs={12} key={name}>
              <FormInput label={name.replace(/^\w/, (c) => c.toUpperCase())} name={name as keyof FormData} value={formData[name as keyof FormData]} onChange={handleChange} disabled={loading} />
            </Grid>
          ))}

          {/* Message */}
          <Grid item xs={12}>
            <FormInput label="Message" name="message" value={formData.message} onChange={handleChange} error={errors.message} disabled={loading} multiline />
          </Grid>

          {/* Submit Button */}
          <Grid item md={4} xs={12}>
            <Button fullWidth variant="contained" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Contact Us"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ContactUsForm;
