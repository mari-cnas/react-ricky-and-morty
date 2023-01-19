import { memo, useEffect } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { strToSlug } from 'helpers';

import useCapitalize from 'hooks/useCapitalize';

import { CharacterType } from 'types/CharacterType';

import {
  CharacterBox,
  CharacterImage,
  CharacterName,
  CharacterText,
  ColoredCard,
  Verify,
} from './styled';

interface ICharacterCardProps {
  children?: React.ReactNode;
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => {
  const setCapitalize = useCapitalize();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setCapitalize(character.status);
  }, [setCapitalize, character.status]);

  return (
    <ColoredCard className=" text-dark w-100 flex-column flex-md-row ">
      <CharacterBox>
        <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          <CharacterImage aspectRatio="1x1" coverImage={character.image}>
            <div />
          </CharacterImage>
        </Link>
      </CharacterBox>
      <CharacterText className="py-3 ">
        <CharacterName className="px-3 mb-2">
          <Link
            className="w-100"
            to={`/characters/${character.id}/${strToSlug(character.name)}`}
          >
            {character.name}
          </Link>
        </CharacterName>
        <Card.Text className="px-3 fw-bold mb-3">
          <div className="d-flex">
            <Verify status={character.status} />
            {character.status.charAt(0).toUpperCase() +
              character.status.slice(1)}{' '}
            - {character.species}
          </div>
        </Card.Text>
        <Card.Text className="px-3">
          <div className="d-flex flex-column">
            <p className="text-muted ">Last known location:</p>
            <p>{character.location.name}</p>
          </div>
        </Card.Text>
        <Card.Text className="px-3">
          <div className="d-flex flex-column">
            <p className="text-muted ">Origin:</p>
            <a href={character.origin.url} className="text-dark">
              {character.origin.name.charAt(0).toUpperCase() +
                character.origin.name.slice(1)}
            </a>
          </div>
        </Card.Text>
      </CharacterText>
    </ColoredCard>
  );
};
export default memo(CharacterCard);
