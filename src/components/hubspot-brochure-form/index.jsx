import { useEffect } from "react";

const HubspotBrochureForm = ({ formId }) => {
  useEffect(() => {
    const loadHubspotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20029733",
          formId: "b181218d-5788-4108-9133-31fba99550b3",
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

export default HubspotBrochureForm;
