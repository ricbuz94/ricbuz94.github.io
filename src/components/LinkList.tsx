import styled from "styled-components";
import { Link, Links } from "../common/interfaces";
import ListHeader from "../ui/ListHeader";
import ListLink from "../ui/ListLink";

interface CustomListType {
  list: Links;
}

const StyledHomeListContainer = styled.div`
  width: 70vmin;

  /* small screen */
  @media only screen and (max-width: 600px) {
    width: 80vmin;
  }
`;

const StyledListDivider = styled.div`
  margin: 0;
  padding: 0;
  height: 1.2rem;
`;

const LinkList = ({ list }: CustomListType) => (
  <StyledHomeListContainer>
    <ListHeader title={list.title} />
    {list.links
      .map((link: Link, index: number) => {
        const isLast: boolean = index === 0;
        return (
          <div key={index.toString()}>
            <ListLink link={link} />
            {isLast ? null : (
              <StyledListDivider className="home-list-divider" />
            )}
          </div>
        );
      })
      .reverse()}
  </StyledHomeListContainer>
);

export default LinkList;
