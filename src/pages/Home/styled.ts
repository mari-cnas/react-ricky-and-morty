import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const HomeContainer = styled(Container)`
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
