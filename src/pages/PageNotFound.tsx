import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import SiteButton from "../ui/site-button/SiteButton";

const PageNotFound = () => {
  const { url } = useRouteMatch();

  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = "Page not found";
    }
  }, []);

  const homeUrl = url.includes("/drinktool/") ? "/drinktool" : "/";
  return (
    <div className="pnf-container">
      <h2>Pagina non trovata</h2>
      <SiteButton isLink path={homeUrl} title="Home" />
    </div>
  );
};

export default PageNotFound;
