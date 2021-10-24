import styled from "styled-components";

interface SiteLinkType {
  title: string;
  href: string;
}

const StyledLink = styled.a`
  outline: none;
  font-weight: bolder;
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  transition: ${(props) => props.theme.foregroundColorTransition};
`;

const SiteLink = ({ title, href }: SiteLinkType) => (
  <StyledLink href={href} target="_blank" rel="noreferrer">
    {title}
  </StyledLink>
);

export default SiteLink;
