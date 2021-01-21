import React, { useEffect } from "react";
import { List } from "../common/types";
import HomeFooter from "../components/HomeFooter";
import HomeList from "../components/HomeList";

const lists: Array<List> = [
  {
    title: "Progetti",
    items: [
      {
        url: process.env.REACT_APP_HMCID_URL,
        title: "Howmuchcanidrink",
        description: "Quanto posso bere? Quanto devo aspettare?",
      },
      {
        url: process.env.REACT_APP_DRINKTOOL_URL,
        title: "DrinkTool",
        description: "Calcolo del tasso alcolemico.",
      },
    ],
  },
];

function Home() {
  useEffect(() => {
    document.getElementById("title").innerHTML = " · Home";
  }, []);

  return (
    <div className="Home-div">
      <h1 className="Home-header">Riccardo Buzzolo</h1>
      <hr className="Home-divider" />
      {lists.map((list: List, i: number) => (
        <HomeList key={list.title} list={lists[i]} />
      ))}
      <br />
      <HomeFooter />
    </div>
  );
}

export default Home;
