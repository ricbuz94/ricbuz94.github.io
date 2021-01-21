import React from "react";
import { Item, List } from "../common/types";
import HomeListItem from "./HomeListItem";

type HomeListType = {
  list: List;
};

function HomeList({ list }: HomeListType) {
  return (
    <div>
      <h2 className="Home-header">{list.title}</h2>
      {list.items
        .map((item: Item, index: number) => (
          <HomeListItem key={index.toString()} item={item} />
        ))
        .reverse()}
    </div>
  );
}

export default HomeList;
