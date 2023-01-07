import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CharacterContainer = styled.div``;

export const ColoredCard = styled(Card)`
  background-color: purple;
  color: white;
`;

export const EpisodeName = styled(Card.Title)`
  font-size: 2em;
  color: #00ff00;
`;
