import { FiSun, FiMoon } from "react-icons/fi";
import styled, { ThemeConsumer } from "styled-components";
import { CurrentThemeContext } from "../context/theme";

const SunIcon = styled(FiSun)`
  margin-top: 4px;
  font-size: 170%;
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.foregroundColorTransition};
`;

const MoonIcon = styled(FiMoon)`
  margin-top: 4px;
  font-size: 170%;
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.foregroundColorTransition};
`;

const StyledThemeSwitch = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  width: 100%;
  text-align: center;

  &:hover ${SunIcon}, &:hover ${MoonIcon} {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ThemeSwitch = () => (
  <CurrentThemeContext.Consumer>
    {({ setCurrentTheme }) => (
      <ThemeConsumer>
        {(theme) => {
          const isDark = theme.name === "dark";
          return (
            <StyledThemeSwitch onClick={setCurrentTheme}>
              {isDark ? <MoonIcon /> : <SunIcon />}
            </StyledThemeSwitch>
          );
        }}
      </ThemeConsumer>
    )}
  </CurrentThemeContext.Consumer>
);

export default ThemeSwitch;
