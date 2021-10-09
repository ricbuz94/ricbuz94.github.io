import "./site-link.css";

interface SiteLinkType {
  title: string;
  href: string;
}

const SiteLink = ({ title, href }: SiteLinkType) => (
  <a className="site-link" href={href} target="_blank" rel="noreferrer">
    {title}
  </a>
);

export default SiteLink;
