import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CharacterContainer = styled.div``;

export const ColoredCard = styled(Card)`
  background-color: #9b4ddc;
`;

export const EpisodeName = styled(Card.Title)`
  font-size: 2em;
  text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
`;
