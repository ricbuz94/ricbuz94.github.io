import { Link } from "../common/interfaces";
import styled from "styled-components";
import cn from "classnames";

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h4`
  transition: ${(props) => props.theme.foregroundColorTransition};
`;

const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.subText};
  margin: 0px;
  font-size: small;
  margin-top: 15px;
  padding: 0px;
`;

const StyledTag = styled.p`
  font-size: 80%;
  font-weight: bold;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;

  &.ANDROID {
    color: #689f38;
  }

  &.WEB {
    color: #6495ed;
  }
`;

const StyledLink = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 0.25em;
  transition: ${(props) => props.theme.mainTransition};
  box-shadow: ${(props) => props.theme.colors.cardShadow};

  &:hover {
    box-shadow: ${(props) => props.theme.colors.cardShadowHover};
    transform: translateY(-3px);
  }

  &:active {
    box-shadow: ${(props) => props.theme.colors.cardShadowHover};
    transform: scale(1.03);
  }

  & > a {
    margin: 0;
    line-height: 1;
    padding: 1.4rem 1.6rem;
    color: ${(props) => props.theme.colors.text};
  }

  &:hover ${StyledTitle} {
    color: ${(props) => props.theme.colors.accent};
  }

  &:active ${StyledTitle} {
    color: ${(props) => props.theme.colors.accent};
  }

  /* small screen */
  @media only screen and (max-width: 600px) {
    border-radius: 1.5rem;

    & > a {
      padding: 1.5rem;
      line-height: initial;
    }
  }
`;

interface ListItemType {
  link: Link;
}

const ListLink = ({ link }: ListItemType) => (
  <StyledLink>
    <a rel="noreferrer" href={link.url} target="_blank">
      <StyledTitleContainer>
        <StyledTitle>{link.title}</StyledTitle>
        {link?.tag ? (
          <StyledTag className={cn(link.tag)}>{`#${link.tag}`}</StyledTag>
        ) : null}
      </StyledTitleContainer>
      <StyledDescription>{link.description}</StyledDescription>
    </a>
  </StyledLink>
);

export default ListLink;
