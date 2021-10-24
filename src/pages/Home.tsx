import { useState, useEffect } from "react";
import { ThemeProvider } from "../context/theme";
import { Links } from "../common/interfaces";
import Footer from "../components/Footer";
import LinkList from "../components/LinkList";
import SiteNavbar from "../ui/SiteNavbar";
import ListContainer from "../ui/ListContainer";
import RouteLink from "../ui/RouteLink";
import { links } from "../data/data";
import Drawer from "../ui/site-drawer/Drawer";
import ThemeSwitch from "../ui/ThemeSwitch";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

const StyledHomeBackground = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: max(1.8vmin, 0.8rem);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: ${(props) => props.theme.backgroundColorTransition};

  & header {
    width: 60vmin;
    padding-bottom: 2rem;
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = "Home";
    }
  }, []);

  return (
    <ThemeProvider>
      <StyledHomeBackground>
        <header>
          <SiteNavbar onToggleDrawer={toggleDrawer} />
        </header>
        <ListContainer>
          {links.map((list: Links, i: number) => (
            <LinkList key={list.title} list={links[i]} />
          ))}
        </ListContainer>
        <Footer />
      </StyledHomeBackground>
      <Drawer className="" isOpen={isOpen} onClose={toggleDrawer}>
        <ul className="drawer-content">
          <li>
            <RouteLink isButton onClick={toggleDrawer}>
              <>
                <p>Chiudi</p>
                <FiArrowRight />
              </>
            </RouteLink>
          </li>

          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </Drawer>
    </ThemeProvider>
  );
};

export default Home;
