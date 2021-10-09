import { useState, useEffect } from "react";
import { Links } from "../common/interfaces";
import Footer from "../components/Footer";
import LinkList from "../components/LinkList";
import SiteNavbar from "../ui/site-navbar/SiteNavbar";
import ListContainer from "../ui/list-container/ListContainer";
import { links } from "../data/data";
import Drawer from "../ui/site-drawer/Drawer";
import ThemeSwitch from "../ui/theme-switch/ThemeSwitch";
import { FiArrowRight } from "react-icons/fi";
import { Link, useRouteMatch } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    if (theme !== "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      return;
    }
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = "Home";
    }
  }, []);

  let match = useRouteMatch();
  return (
    <>
      <div className={`home-div ${theme}`}>
        <header>
          <SiteNavbar
            theme={theme}
            onToggle={toggleTheme}
            onToggleDrawer={toggleDrawer}
          />
        </header>
        <ListContainer>
          {links.map((list: Links, i: number) => (
            <LinkList key={list.title} list={links[i]} />
          ))}
        </ListContainer>
        <Footer />
      </div>
      <Drawer className={theme} isOpen={isOpen} onClose={toggleDrawer}>
        <ul className="drawer-content">
          <li className="route-link" onClick={toggleDrawer}>
            <p>Chiudi</p>
            <FiArrowRight />
          </li>
          <li>
            <Link className="route-link" to={`${match.url}drinktool`}>
              DrinkTool
            </Link>
          </li>
          <li>
            <ThemeSwitch theme={theme} onChange={toggleTheme} />
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Home;
