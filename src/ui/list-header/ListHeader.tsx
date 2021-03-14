import "./list-header.css";

type ListHeaderType = {
  title: string;
};

const ListHeader = ({ title }: ListHeaderType) => (
  <h2 className="list-header">{title}</h2>
);

export default ListHeader;
