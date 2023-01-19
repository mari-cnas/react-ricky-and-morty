import ReactPaginate from 'react-paginate';
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
 
}

html,body,#root{
    min-height: 100vh;
}


`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(32, 35, 41);
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  & > li {
    border: 1px solid black;
    background-color: grey;
    color: black;
  }
  a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }
  & > li.selected > a {
    background-color: orange;
    color: black;
  }
`;
