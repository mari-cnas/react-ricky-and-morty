import { Card, Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
  aspectRatio: string;
}

interface IVerifyProps {
  status: string;
}

export const ColoredCard = styled.div`
  background-color: #add8e6;
  border-radius: 10px;
  display: flex;

  /* unvisited link */
  a:link {
    color: orange;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: orange;
  }

  /* mouse over link */
  a:hover {
    color: white;
  }

  /* selected link */
  a:active {
    color: white;
  }

  p {
    margin-bottom: 5px;
  }
`;

export const CharacterName = styled(Card.Title)`
  font-size: 1.7em;
  text-shadow: black 0.1em 0.1em 0.2em;
`;

export const CharacterImage = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px 0px 0px 10px;

  @media (max-width: 576px) {
    border-radius: 10px 10px 0px 0px;
  }
`;
export const CharacterBox = styled.div`
  @media (min-width: 600px) {
    width: 40%;
  }
`;

export const CharacterText = styled.div`
  @media (min-width: 600px) {
    width: 60%;
  }
`;

export const Verify = styled.p<IVerifyProps>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${({ status }) => {
    switch (status) {
      case 'Alive':
        return '#55cc44';
      case 'Dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  }};
  border-radius: 50%;
  margin-top: 8px;
`;
