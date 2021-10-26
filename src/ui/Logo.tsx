import styled, { ThemeConsumer } from "styled-components";
import logoLight from "../images/logo-light.png";
import logoDark from "../images/logo-dark.png";

const StyledLogo = styled.img`
  aspect-ratio: attr(width) / attr(height);
`;

const SiteLogo = () => (
  <ThemeConsumer>
    {(theme) => {
      const isDark = theme.name === "dark";
      if (isDark) {
        return <StyledLogo alt="R" src={logoDark} width="50" height="50" />;
      }
      return <StyledLogo alt="R" src={logoLight} width="50" height="50" />;
    }}
  </ThemeConsumer>
);

export default SiteLogo;
