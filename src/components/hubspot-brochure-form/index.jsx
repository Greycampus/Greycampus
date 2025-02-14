import { useEffect, useState } from "react";

const HubspotBrochureForm = ({ formId, open }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!open || isLoaded) return;

    const loadHubspotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20029733",
          formId: "b181218d-5788-4108-9133-31fba99550b3",
          target: `#${formId}`,
        });
      }
    };

    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsLoaded(true);
        loadHubspotForm();
      };

      // Delay script load to avoid main-thread blocking
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => document.body.appendChild(script));
      } else {
        setTimeout(() => document.body.appendChild(script), 3000);
      }
    } else {
      loadHubspotForm();
      setIsLoaded(true);
    }
  }, [formId, open, isLoaded]);

  return <div id={formId}></div>;
};

export default HubspotBrochureForm;
