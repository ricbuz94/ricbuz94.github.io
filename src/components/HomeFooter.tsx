import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import FooterIcon from "../ui/footer-icon/FooterIcon";

function HomeFooter() {
  return (
    <footer className="Home-footer">
      <FooterIcon href={process.env.REACT_APP_TWITTER}>
        <FiTwitter className="footer-icon" />
      </FooterIcon>
      <FooterIcon href={process.env.REACT_APP_INSTAGRAM}>
        <FiInstagram className="footer-icon" />
      </FooterIcon>
      <FooterIcon href={process.env.REACT_APP_GITHUB}>
        <FiGithub className="footer-icon" />
      </FooterIcon>
    </footer>
  );
}

export default HomeFooter;
