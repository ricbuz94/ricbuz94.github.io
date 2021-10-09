import navbarCss from "./navbar.module.css";
import { FiChevronsRight, FiMail, FiInfo } from "react-icons/fi";
import { Link, match } from "react-router-dom";

interface NavbarProps {
  match: match<{}>;
}

const Navbar = ({ match }: NavbarProps) => (
  <nav className={navbarCss.navbar}>
    <ul className={navbarCss.list}>
      <li className={navbarCss.logo_item}>
        <span className={navbarCss.logo_text}>DrinkTool</span>
        <FiChevronsRight className="logo-icon" />
      </li>
      <li className="nav-item">
        <Link to={`${match.url}/contact`} className="nav-link">
          <FiMail className="nav-icon" />
          <span className="link-text">Contacts</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`${match.url}/policy`} className="nav-link">
          <FiInfo className="nav-icon" />
          <span className="link-text">Policy</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
