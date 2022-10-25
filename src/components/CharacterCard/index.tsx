import { memo } from 'react';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { strToSlug } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import {
  CharacterImage,
  CharacterName,
  CharacterText,
  ColoredCard,
} from './styled';

interface ICharacterCardProps {
  children?: React.ReactNode;
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => (
  <ColoredCard className=" text-dark w-100 flex-column flex-md-row ">
    <CharacterImage coverImage={character.image} />
    <CharacterText className="py-3 ">
      <CharacterName className="px-3 pb-4">
        <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          {character.name}
        </Link>
      </CharacterName>
      <Card.Text className="px-3 fw-bold">
        {character.status} - {character.species}
      </Card.Text>
      <Card.Text className="px-3">
        Last known location: {character.location.name}
      </Card.Text>
      <Card.Text className="px-3">
        First seen in:{' '}
        <a href={character.episode[1]} className="text-dark">
          {' '}
          click here
        </a>
      </Card.Text>
    </CharacterText>
  </ColoredCard>
);

export default memo(CharacterCard);
