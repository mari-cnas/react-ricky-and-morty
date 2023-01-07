import { memo } from 'react';

import { Card } from 'react-bootstrap';

import { LocationType } from 'types/Locationstype';

import { ColoredCard, LocationName } from './styled';

interface ILocationCardProps {
  children?: React.ReactNode;
  location: LocationType;
}

const LocationCard: React.FC<ILocationCardProps> = ({ location }) => (
  <ColoredCard className="text-dark d-flex flex-row w-100">
    <Card.Body className="px-4 ">
      <LocationName>{location.name}</LocationName>
      <Card.Text className="fw-bold">Type: {location.type}</Card.Text>
      <Card.Text className="fw-bold">Dimension: {location.dimension}</Card.Text>
      <Card.Text className="fw-bold">
        Residents: {location.residents.length}
      </Card.Text>
    </Card.Body>
  </ColoredCard>
);

export default memo(LocationCard);
