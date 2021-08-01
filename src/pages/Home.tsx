import { useEffect } from "react";
import { List } from "../common/interfaces";
import Footer from "../components/Footer";
import CustomList from "../components/CustomList";
import SiteLogo from "../ui/site-logo/SiteLogo";
import ListContainer from "../ui/list-container/ListContainer";

const lists: Array<List> = [
  {
    title: "Lavoro",
    items: [
      {
        url: process.env.REACT_APP_BEACHAROUND_URL ?? "#",
        title: "Beacharound",
        description: "Portale per spiagge ed hotel di tutta Italia.",
      },
    ],
  },
  {
    title: "Progetti",
    items: [
      {
        url: process.env.REACT_APP_HMCID_URL ?? "#",
        title: "Howmuchcanidrink",
        description: "Quanto posso bere? Quanto devo aspettare?",
      },
      {
        url: process.env.REACT_APP_DRINKTOOL_URL ?? "#",
        title: "DrinkTool",
        description: "Calcolo del tasso alcolemico.",
      },
    ],
  },
];

function Home() {
  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) {
      title.innerHTML = " · Home";
    }
  }, []);

  return (
    <div className="Home-div">
      <SiteLogo />
      <ListContainer>
        {lists.map((list: List, i: number) => (
          <CustomList key={list.title} list={lists[i]} />
        ))}
      </ListContainer>
      <Footer />
    </div>
  );
}

export default Home;
