import "./site-logo.css";
import logo from "../../images/logo.png";
import logoDark from "../../images/logo_dark.png";

interface SiteLogoType {
  theme: any;
}

const SiteLogo = ({ theme }: SiteLogoType) => (
  <img
    className="logo"
    src={theme === "dark" ? logoDark : logo}
    alt=""
    onContextMenuCapture={() => {
      return false;
    }}
  />
);

export default SiteLogo;
