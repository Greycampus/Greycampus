import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

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

  return <div id={formId} ref={formRef}></div>;
};

export default HubspotForm;
