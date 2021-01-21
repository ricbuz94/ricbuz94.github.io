import React from "react";
import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";

function HomeFooter() {
  return (
    <footer className="Home-footer">
      <span>
        <a
          rel="noreferrer"
          href={process.env.REACT_APP_TWITTER}
          target="_blank"
        >
          <FiTwitter className="Home-icon" />
        </a>
      </span>
      <span>
        <a
          rel="noreferrer"
          href={process.env.REACT_APP_INSTAGRAM}
          target="_blank"
        >
          <FiInstagram className="Home-icon" />
        </a>
      </span>
      <span>
        <a rel="noreferrer" href={process.env.REACT_APP_GITHUB} target="_blank">
          <FiGithub className="Home-icon" />
        </a>
      </span>
    </footer>
  );
}

export default HomeFooter;
