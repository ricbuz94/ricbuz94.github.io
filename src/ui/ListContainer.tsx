import styled from "styled-components";

const StyledListContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 1rem;
  width: 100%;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.scrollbarBackground};
    -webkit-transition: ${(props) => props.theme.mainTransition};
    transition: ${(props) => props.theme.mainTransition};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.accent};
    -webkit-transition: ${(props) => props.theme.mainTransition};
    transition: ${(props) => props.theme.mainTransition};
  }
`;

const ListContainer = ({ children }: any) => (
  <StyledListContainer className="list-container">
    {children}
  </StyledListContainer>
);

export default ListContainer;
