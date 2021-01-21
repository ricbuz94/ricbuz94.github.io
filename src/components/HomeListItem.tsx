import React from "react";
import { Item } from "../common/types";

type HomeListItemType = {
  item: Item;
};

function HomeListItem({ item }: HomeListItemType) {
  return (
    <div className="Home-item-div">
      <a className="Home-link" rel="noreferrer" href={item.url} target="_blank">
        <h3 className="Home-item-header">{item.title}</h3>
      </a>
      <p className="Home-item-desc">{item.description}</p>
    </div>
  );
}

export default HomeListItem;
