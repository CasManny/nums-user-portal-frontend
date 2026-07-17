import { useEffect } from "react";
import { useLocation } from "react-router";

export const useDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/applicants")) {
      document.title = "Nexus – Applicant Portal";
    } else if (location.pathname.startsWith("/students")) {
      document.title = "Nexus – Student Portal";
    } else if (location.pathname.startsWith("/lecturers")) {
      document.title = "Nexus – Lecturer Portal";
    } else if (location.pathname.startsWith("/auth")) {
      document.title = "Nexus – Authentication";
    }
    else {
      document.title = "Nexus Academic Portal";
    }
  }, [location]);
};
