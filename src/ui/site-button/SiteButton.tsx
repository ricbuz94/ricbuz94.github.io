import { Link } from "react-router-dom";
import "./site-button.css";

interface SiteButtonType {
  path: any;
  title: string;
}

const SiteButton = ({ path, title }: SiteButtonType) => (
  <Link to={path ?? "/"} className="site-button">
    {title}
  </Link>
);

export default SiteButton;
