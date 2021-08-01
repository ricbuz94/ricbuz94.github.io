import "./footer-icon.css";

type FooterIconType = {
  href: string | undefined;
  children: JSX.Element;
};

const FooterIcon = ({ href, children }: FooterIconType) => (
  <span>
    <a rel="noreferrer" aria-label="icon" href={href ?? "#"} target="_blank">
      {children}
    </a>
  </span>
);

export default FooterIcon;
