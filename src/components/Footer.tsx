import { FiMail, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import FooterIcon from "../ui/footer-icon/FooterIcon";
import SiteLink from "../ui/site-link/SiteLink";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="home-footer">
      <div>
        <FooterIcon href={process.env.REACT_APP_MAILTO}>
          <FiMail className="footer-icon" />
        </FooterIcon>
        <FooterIcon href={process.env.REACT_APP_INSTAGRAM}>
          <FiInstagram className="footer-icon" />
        </FooterIcon>
        <FooterIcon href={process.env.REACT_APP_GITHUB}>
          <FiGithub className="footer-icon" />
        </FooterIcon>
        <FooterIcon href={process.env.REACT_APP_TWITTER}>
          <FiTwitter className="footer-icon" />
        </FooterIcon>
      </div>
      <p>
        {"Made whith "}
        <span>
          <SiteLink
            title=" Create React App"
            href="https://create-react-app.dev/"
          />
          {" and "}
          <SiteLink title="GitHub Pages" href="https://pages.github.com/" />
        </span>
      </p>
      <p>{`Riccardo Buzzolo © ${currYear}`}</p>
    </footer>
  );
};

export default Footer;
