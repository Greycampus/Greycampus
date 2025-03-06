import React, { useState } from "react";
import { MenuItem, Button, Grid, Box, TextField, CircularProgress } from "@mui/material";
import FormInput from "@components/ContactUsForm/FormInput";
import countryCode from "../../data/countryCode.json";
import { AlertState } from "@components/ContactUsForm/types";
import SnackbarAlert from "@components/ContactUsForm/SnackbarAlert";

const defaultCountry = countryCode.find((c) => c.country === "India") || { id: 0, country: "India", code: "91" };

const DownloadBrochureForm: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: defaultCountry.country,
    phone: `+${defaultCountry.code} `,
  });

  const [errors, setErrors] = useState<{ email?: string; name?: string; phone?: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertState>({ open: false, message: "", severity: "success" });

  // ✅ Allow users to edit phone number while keeping country code
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const countryCode = formData.phone.split(" ")[0]; // Extract country code
      const phoneNumber = value.replace(countryCode, "").trim(); // Remove country code from input
      setFormData({ ...formData, phone: `${countryCode} ${phoneNumber}` });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = countryCode.find((c) => c.country === e.target.value);
    if (selectedCountry) {
      setFormData({ ...formData, country: selectedCountry.country, phone: `+${selectedCountry.code} ` });
    }
  };

  // ✅ Validation Logic
  const validate = () => {
    let newErrors: { email?: string; name?: string; phone?: string } = {};

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch("/api/download-brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setFormData({
          name: "",
          email: "",
          country: defaultCountry.country,
          phone: `+${defaultCountry.code} `,
        });

        handleClose(); // Close modal after success
        
        // ✅ open PDF 
          const pdfUrl = "/GC_Training_Solutions.pdf"; // Ensure this file exists in `public/`
          window.open(pdfUrl, "_blank"); // Opens in new tab
      } else {
        setAlert({ open: true, message: "Something went wrong. Please try again later.", severity: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlert({ open: true, message: "Failed to submit request. Please check your internet connection.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SnackbarAlert alert={alert} onClose={() => setAlert({ ...alert, open: false })} />
      <Box sx={{ height: "100%", margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Email */}
            <Grid item lg={12} sm={6} xs={12}>
              <FormInput
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={loading}
              />
            </Grid>

            {/* Name */}
            <Grid item lg={12} sm={6} xs={12}>
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                disabled={loading}
              />
            </Grid>

            {/* Country & Phone */}
            <Grid item sm={3} xs={12}>
              <TextField
                select
                fullWidth
                label="Country"
                variant="outlined"
                size="small"
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                disabled={loading}
              >
                {countryCode.map((country) => (
                  <MenuItem key={country.id} value={country.country}>
                    {country.country}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item sm={9} xs={12}>
              {/* ✅ Phone Number Now Editable */}
              <FormInput label="Phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} disabled={loading} />
            </Grid>

            {/* Submit Button */}
            <Grid item sm={12} xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  fontWeight: "600",
                  textTransform: "capitalize",
                  padding: "10px",
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Download Brochure"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default DownloadBrochureForm;
