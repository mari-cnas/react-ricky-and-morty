import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const HomeBg = styled.div`
  background-color: rgb(32, 35, 41);

  color: white;
`;

export const MainContainer = styled(Container)`
  background-color: rgb(32, 35, 41);
`;

export const CharactersPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  & > li {
    border: 1px solid black;
    background-color: orange;
    color: black;
  }
  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  & > li.selected > a {
    background-color: purple;
    color: black;
  }
`;
