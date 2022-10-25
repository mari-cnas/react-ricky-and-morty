import styled from 'styled-components';

export const FooterBg = styled.section`
  background-color: grey;
  display: flex;
  color: white;

  /* unvisited link */
  a:link {
    color: white;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: #333;
  }

  /* mouse over link */
  a:hover {
    color: grey;
  }

  /* selected link */
  a:active {
    color: #0000ff;
  }
`;
