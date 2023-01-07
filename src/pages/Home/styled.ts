import styled from 'styled-components';

export const HomeBg = styled.div`
  background-color: rgb(32, 35, 41);
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  /* unvisited link */
  a:link {
    color: white;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: black;
    font-weight: bold;
    text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
  }

  /* selected link */
  a:active {
    color: black;
    font-weight: bold;
    text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
  }
`;

export const CardT = styled.h3`
  text-align: center;
`;
