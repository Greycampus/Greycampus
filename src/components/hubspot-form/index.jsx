import { useEffect } from "react";

const HubspotForm = ({ formId }) => {
  useEffect(() => {
    const loadHubspotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20029733",
          formId: "c887108b-6f59-4c6f-a1e2-9d2acd3561a4",
          target: `#${formId}`, // Use the unique ID passed as a prop
        });
      }
    };

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = loadHubspotForm;
    document.body.appendChild(script);

    return () => {
      // Cleanup if the component unmounts
      document.body.removeChild(script);
    };
  }, [formId]); // Re-run effect if formId changes

  return <div id={formId}></div>; // Set unique ID for each instance
};

export default HubspotForm;
