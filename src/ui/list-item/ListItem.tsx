import "./list-item.css";
import { Item } from "../../common/types";
import ListItemDescription from "../list-item-description/ListItemDescription";
import ListItemTitle from "../list-item-title/ListItemTitle";

type ListItemType = {
  item: Item;
};

const ListItem = ({ item }: ListItemType) => (
  <div className="list-item">
    <ListItemTitle url={item.url} title={item.title} />
    <ListItemDescription description={item.description} />
  </div>
);

export default ListItem;
