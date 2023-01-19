import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const ColoredCard = styled(Card)`
  background-color: #2b9447;
  color: white;
`;
export const LocationName = styled(Card.Title)`
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
`;
