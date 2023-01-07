import styled from 'styled-components';

export const FooterBg = styled.section`
  background-color: grey;
  display: flex;
  color: white;
  margin-top: auto;

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
  }

  /* selected link */
  a:active {
    color: black;
  }
`;
