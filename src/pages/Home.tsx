import { useEffect } from "react";
import { List } from "../common/types";
import HomeFooter from "../components/HomeFooter";
import HomeList from "../components/HomeList";
import SiteTitle from "../ui/site-title/SiteTitle";

const lists: Array<List> = [
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
      <SiteTitle title="Riccardo Buzzolo" />
      {lists.map((list: List, i: number) => (
        <HomeList key={list.title} list={lists[i]} />
      ))}
      <HomeFooter />
    </div>
  );
}

export default Home;
