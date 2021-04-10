import "./list-header.css";

type ListHeaderType = {
  title: string;
};

const ListHeader = ({ title }: ListHeaderType) => (
  <h5 className="list-header">{title}</h5>
);

export default ListHeader;
