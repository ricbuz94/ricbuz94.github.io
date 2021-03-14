import "./list-item-title.css";

type ListItemTitleType = {
  url: string;
  title: string;
};

const ListItemTitle = ({ url, title }: ListItemTitleType) => (
  <a className="list-item-title" rel="noreferrer" href={url} target="_blank">
    <h3>{title}</h3>
  </a>
);

export default ListItemTitle;
