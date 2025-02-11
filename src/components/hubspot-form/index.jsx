import { useEffect } from "react";
import { useRouter } from "next/router"; // Import Next.js router

const HubspotForm = ({ formId }) => {
  const router = useRouter(); // Initialize Next.js router

  useEffect(() => {
    const loadHubspotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20029733",
          formId: "c887108b-6f59-4c6f-a1e2-9d2acd3561a4",
          target: `#${formId}`,
          onFormSubmit: () => {
            console.log("Form submitted!");
            router.push("/thank-you"); // Redirect to custom thank-you page
          },
        });
      }
    };

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = loadHubspotForm;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, [formId, router]); // Add router to dependencies

  return <div id={formId}></div>;
};

export default HubspotForm;