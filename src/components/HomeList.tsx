import { Item, List } from "../common/types";
import ListHeader from "../ui/list-header/ListHeader";
import ListItem from "../ui/list-item/ListItem";

type HomeListType = {
  list: List;
};

const HomeList = ({ list }: HomeListType) => (
  <div className="Home-list">
    <ListHeader title={list.title} />
    {list.items
      .map((item: Item, index: number) => {
        const isLast: boolean = index === list.items.length - 1;
        return (
          <div key={index.toString()}>
            <ListItem item={item} />
            {isLast ? <div className="Home-list-divider" /> : null}
          </div>
        );
      })
      .reverse()}
  </div>
);

export default HomeList;
