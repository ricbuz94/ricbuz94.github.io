import logo from "./logo.module.css";

interface SiteLogoType {
  theme: any;
}

const SiteLogo = ({ theme }: SiteLogoType) => (
  <img
    className={logo.logo}
    src={
      theme === "dark"
        ? `${process.env.PUBLIC_URL}/img/logo-dark.png`
        : `${process.env.PUBLIC_URL}/img/logo.png`
    }
    alt=""
    onContextMenuCapture={() => {
      return false;
    }}
  />
);

export default SiteLogo;
