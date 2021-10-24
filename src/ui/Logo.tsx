import styled, { ThemeConsumer } from "styled-components";
import logoLight from "../images/logo-light.png";
import logoDark from "../images/logo-dark.png";

const StyledLogo = styled.img`
  height: auto;
  width: calc(40px + 1vmin);
  transition: all 0.3s ease;
`;

const SiteLogo = () => (
  <ThemeConsumer>
    {(theme) => {
      const isDark = theme.name === "dark";
      return <StyledLogo alt="" src={isDark ? logoDark : logoLight} />;
    }}
  </ThemeConsumer>
);

export default SiteLogo;
