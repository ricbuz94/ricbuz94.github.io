import "./list-link.css";
import { Link } from "../../common/interfaces";

interface ListItemType {
  link: Link;
}

const ListLink = ({ link }: ListItemType) => (
  <div className="list-item">
    <a
      className="list-item-title"
      rel="noreferrer"
      href={link.url}
      target="_blank"
    >
      <div className="list-item-header-container">
        <h3>{link.title}</h3>
        {link?.tag ? (
          <p className={`list-item-tag ${link.tag}`}>#{link.tag}</p>
        ) : null}
      </div>
      <p className="list-item-description">{link.description}</p>
    </a>
  </div>
);

export default ListLink;
