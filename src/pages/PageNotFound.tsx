import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteButton from "../ui/site-button/SiteButton";

function PageNotFound() {
  let location = useLocation();

  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = " · 404 Page not found";
    }
  }, []);

  return (
    <div className="PNF-container">
      <h2>Nessun risultato per {location.pathname}</h2>
      <SiteButton isLink path="/" title="Home" />
    </div>
  );
}

export default PageNotFound;
