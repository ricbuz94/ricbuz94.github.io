import { Link, Links } from "../common/interfaces";
import ListHeader from "../ui/list-header/ListHeader";
import ListLink from "../ui/list-link/ListLink";

interface CustomListType {
  list: Links;
}

const LinkList = ({ list }: CustomListType) => (
  <div className="home-list">
    <ListHeader title={list.title} />
    {list.links
      .map((link: Link, index: number) => {
        const isLast: boolean = index === 0;
        return (
          <div key={index.toString()}>
            <ListLink link={link} />
            {isLast ? null : <div className="home-list-divider" />}
          </div>
        );
      })
      .reverse()}
  </div>
);

export default LinkList;
