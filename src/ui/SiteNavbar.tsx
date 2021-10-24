import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import styled from "styled-components";

interface SiteNavbarProps {
  onToggleDrawer: () => void;
}

const StyledNavbar = styled.nav`
  display: flex;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  align-items: center;

  /* small screen */
  @media screen and (max-width: 600px) {
    padding-top: 4rem;
  }
`;

const StyledNav = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  transition: ${(props) => props.theme.mainTransition};

  & > li:not(li:last-child) {
    margin-right: 1rem;
  }

  /* small screen */
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDropdown = styled.div`
  display: none;

  /* small screen */
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const StyledMenu = styled(FiMenu)`
  display: none;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }

  /* small screen */
  @media screen and (max-width: 600px) {
    display: block;
    width: 2rem;
    height: auto;
    transition: all 0.5s ease;
  }
`;

const SiteNavbar = ({ onToggleDrawer }: SiteNavbarProps) => {
  return (
    <StyledNavbar>
      <Logo />
      <StyledNav>
        <li>
          <ThemeSwitch />
        </li>
      </StyledNav>
      <StyledDropdown>
        <StyledMenu onClick={onToggleDrawer} />
      </StyledDropdown>
    </StyledNavbar>
  );
};

export default SiteNavbar;
