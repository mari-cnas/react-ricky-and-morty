import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CharacterContainer = styled.div``;

export const ColoredCard = styled(Card)`
  background-color: #87f;
  color: black;
`;

export const EpisodeName = styled(Card.Title)`
  font-size: 2em;
  color: white;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
`;
