import { Item, List } from "../common/interfaces";
import ListHeader from "../ui/list-header/ListHeader";
import ListItem from "../ui/list-item/ListItem";

interface CustomListType {
  list: List;
}

const CustomList = ({ list }: CustomListType) => (
  <div className="Home-list">
    <ListHeader title={list.title} />
    {list.items
      .map((item: Item, index: number) => {
        const isLast: boolean = index === 0;
        return (
          <div key={index.toString()}>
            <ListItem item={item} />
            {isLast ? null : <div className="Home-list-divider" />}
          </div>
        );
      })
      .reverse()}
  </div>
);

export default CustomList;
