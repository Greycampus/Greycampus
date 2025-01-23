import { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {
    const loadHubspotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20029733",
          formId: "c887108b-6f59-4c6f-a1e2-9d2acd3561a4",
          target: "#hubspotForm", // Div ID where the form will be embedded
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
      script.remove();
    };
  }, []);

  return <div id="hubspotForm"></div>;
};

export default HubspotForm;
