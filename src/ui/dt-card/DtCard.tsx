import "./dt-card.css";

type DtCardProps = {
  children: JSX.Element;
};

const DtCard = ({ children }: DtCardProps) => (
  <div className="dt-card">{children}</div>
);

export default DtCard;
