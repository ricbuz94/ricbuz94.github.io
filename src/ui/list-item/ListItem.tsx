import "./list-item.css";
import { Item } from "../../common/interfaces";

interface ListItemType {
  item: Item;
}

const ListItem = ({ item }: ListItemType) => (
  <div className="list-item">
    <a
      className="list-item-title"
      rel="noreferrer"
      href={item.url}
      target="_blank"
    >
      <h3>{item.title}</h3>
      <p className="list-item-description">{item.description}</p>
    </a>
  </div>
);

export default ListItem;
