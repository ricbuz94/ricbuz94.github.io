import { FiMail, FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import styled from "styled-components";
import FooterIcon from "../ui/FooterIcon";
import SiteLink from "../ui/SiteLink";

const StyledFooter = styled.footer`
  min-height: max-content;
  padding-top: 2rem;
  padding-bottom: 4rem;
  min-width: 45vmin;
  transition: ${(props) => props.theme.foregroundColorTransition};

  & p {
    font-size: 70%;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 2rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <FooterIcon href={process.env.REACT_APP_MAILTO}>
        <FiMail />
      </FooterIcon>
      <FooterIcon href={process.env.REACT_APP_INSTAGRAM}>
        <FiInstagram />
      </FooterIcon>
      <FooterIcon href={process.env.REACT_APP_GITHUB}>
        <FiGithub />
      </FooterIcon>
      <FooterIcon href={process.env.REACT_APP_TWITTER}>
        <FiTwitter />
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
    <p>{`Riccardo Buzzolo © ${new Date().getFullYear()}`}</p>
  </StyledFooter>
);

export default Footer;
