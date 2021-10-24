import styled from "styled-components";

type FooterIconType = {
  href: string | undefined;
  children: JSX.Element;
};

const StyledFooterIcon = styled.a`
  margin: 0;
  padding: 0;
  font-size: 160%;
  color: ${(props) => props.theme.colors.text};
  vertical-align: middle;
  transition: ${(props) => props.theme.mainTransition};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const FooterIcon = ({ href, children }: FooterIconType) => (
  <span>
    <StyledFooterIcon
      rel="noreferrer"
      aria-label="icon"
      href={href ?? "#"}
      target="_blank"
    >
      {children}
    </StyledFooterIcon>
  </span>
);

export default FooterIcon;
