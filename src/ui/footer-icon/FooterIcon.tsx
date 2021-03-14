import "./footer-icon.css";

type FooterIconType = {
  href: string | undefined;
  children: JSX.Element;
};

const FooterIcon = ({ href, children }: FooterIconType) => {
  return (
    <span>
      <a rel="noreferrer" href={href ?? "#"} target="_blank">
        {children}
      </a>
    </span>
  );
};

export default FooterIcon;
