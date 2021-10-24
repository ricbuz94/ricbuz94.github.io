import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)<{ $isUnderline: boolean }>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: ${(props) => (props.$isUnderline ? "underline" : "none")};
    text-underline-offset: 2px;
  }
`;

const StyledButton = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.foregroundColorTransition};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

interface RouteLinkProps {
  to?: string;
  onClick?: () => void;
  children: string | JSX.Element;
  isButton?: boolean;
  enableUnderline?: boolean;
}

const RouteLink = ({
  to,
  onClick,
  isButton,
  children,
  enableUnderline = false,
}: RouteLinkProps) => {
  if (!!isButton) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }
  return (
    <StyledLink to={to} $isUnderline={enableUnderline}>
      {children}
    </StyledLink>
  );
};

export default RouteLink;
