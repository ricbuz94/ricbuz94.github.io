import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./site-button.css";

type SiteButtonType = {
  isLink: boolean;
  path?: any;
  title: string;
  color?: string;
  backgroundColor?: string;
  onClick?:
    | ((event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void)
    | undefined;
};

const SiteButton = ({
  isLink = false,
  path,
  title,
  color,
  backgroundColor,
  onClick,
}: SiteButtonType) => {
  if (isLink) {
    return (
      <Link to={path ?? "/"} className="site-button">
        {title}
      </Link>
    );
  }
  return (
    <button className="site-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default SiteButton;
