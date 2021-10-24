import styled from "styled-components";

interface ListHeaderType {
  title: string;
}

const StyledHeader = styled.h5`
  margin-top: 2rem;
  margin-left: 1em;
  margin-bottom: 1.5em;
  font-size: 0.75rem;
`;

const ListHeader = ({ title }: ListHeaderType) => (
  <StyledHeader>{title}</StyledHeader>
);

export default ListHeader;
