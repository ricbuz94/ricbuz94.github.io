import "./list-item-description.css";

type ListItemDescriptionType = {
  description: string;
};

const ListItemDescription = ({ description }: ListItemDescriptionType) => (
  <p className="list-item-description">{description}</p>
);

export default ListItemDescription;
