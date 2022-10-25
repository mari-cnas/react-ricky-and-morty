import { Card, Ratio, Row } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
}

export const ColoredCard = styled.div`
  background-color: #add8e6;
  border-radius: 3px;
  display: flex;

  /* unvisited link */
  a:link {
    color: orange;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: purple;
  }

  /* selected link */
  a:active {
    color: blue;
  }
`;

export const CharacterName = styled(Card.Title)`
  font-size: 2em;
  text-shadow: black 0.1em 0.1em 0.2em;
`;

export const CharacterImage = styled.div<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin-left: 0px;
  height: 200px;
  @media (min-width: 600px) {
    width: 40%;
    height: auto;
  }
`;

export const CharacterText = styled.div`
  @media (min-width: 600px) {
    width: 60%;
  }
`;
