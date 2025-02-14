import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Skeleton, Box, Grid, TextField, Button } from "@mui/material";

const HubspotForm = ({ formId }) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setIsLoaded(true);
      };

      setTimeout(() => document.body.appendChild(script), 5000); // Delay loading by 5 seconds
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && window.hbspt) {
      window.hbspt.forms.create({
        portalId: "20029733",
        formId: "c887108b-6f59-4c6f-a1e2-9d2acd3561a4",
        target: `#${formId}`,
        onFormSubmit: () => {
          console.log("Form submitted!");
          router.push("/thank-you");
        },
      });
    }
  }, [isLoaded, formId, router]);

  return (
    <Box
      ref={formRef}
     
    >
      {!isLoaded ? (
        // Skeleton Loader UI
        <Grid container spacing={2} height={'385px'} overflow={'hidden'}>
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={8}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" width="100%" height={80} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" width={150} height={50} />
          </Grid>
        </Grid>
      ) : (
        // HubSpot Form
        <div id={formId} style={{ width: "100%" }}></div>
      )}
    </Box>
  );
};

export default HubspotForm;
