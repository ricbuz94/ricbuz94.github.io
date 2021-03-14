import "./site-title.css";

type SiteTitleType = {
  title: string;
};

const SiteTitle = ({ title }: SiteTitleType) => (
  <div className="site-title">
    <h1>{title}</h1>
    <hr className="Home-divider" />
  </div>
);

export default SiteTitle;
