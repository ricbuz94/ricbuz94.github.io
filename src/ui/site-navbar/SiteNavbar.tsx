import "./site-navbar.css";
import { FiMenu } from "react-icons/fi";
import Logo from "../logo/Logo";
import ThemeSwitch from "../theme-switch/ThemeSwitch";
import { Link, useRouteMatch } from "react-router-dom";

interface SiteNavbarProps {
  theme: string | null;
  onToggle: () => void;
  onToggleDrawer: () => void;
}

const SiteNavbar = ({ theme, onToggle, onToggleDrawer }: SiteNavbarProps) => {
  let match = useRouteMatch();
  return (
    <>
      <nav className="site-navbar">
        <Logo theme={theme} />
        <ul className="site-navbar-nav">
          {/* <li className="nav-item">
          <Link to={`${match.url}/contact`} className="nav-link">
            <FiMail className="nav-icon" />
            <span className="link-text">Contacts</span>
          </Link>
        </li> */}
          <li>
            <Link className="route-link" to={`${match.url}drinktool`}>
              DrinkTool
            </Link>
          </li>
          {/* <li>
          <Link className="route-link" to={`${match.url}drinktool/about`}>
            <p>About</p>
          </Link>
        </li> */}
          <li>
            <ThemeSwitch theme={theme} onChange={onToggle} />
          </li>
        </ul>
        <div className="dropdown">
          <FiMenu className="site-navbar-menu" onClick={onToggleDrawer} />
        </div>
      </nav>
    </>
  );
};

export default SiteNavbar;
