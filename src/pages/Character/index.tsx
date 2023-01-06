import { memo, useCallback, useEffect, useState } from 'react';

import { Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import useCapitalize from 'hooks/useCapitalize';
import useTitle from 'hooks/useTitle';

import { CharacterType } from 'types/CharacterType';

import {
  Background,
  CharacterContainer,
  CharacterName,
  Verify,
} from './styled';

const Character: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const setTitle = useTitle();
  const setCapitalize = useCapitalize();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setCapitalize(character?.status);
  }, [setCapitalize, character?.status]);

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacter(response);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTitle(`${character?.name} | Character`);
  }, [character?.name, setTitle]);

  return (
    <>
      <MainBanner />
      <Background className="d-flex flex-column align-items-center">
        <CharacterContainer className=" py-3 flex-column align-items-center">
          <CharacterName>{character?.name ?? 'Loading...'}</CharacterName>
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
            </div>
          )}
          {!isLoading && character && (
            <Row className="flex-column align-items-center justify-content-between">
              <Col>
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-100 py-3 "
                />
              </Col>
              <Col>
                <ListGroup>
                  <ListGroup.Item className="d-flex">
                    <Verify status={character.status} />
                    {character.status} - {character.species}
                  </ListGroup.Item>
                  <ListGroup.Item>Type: {character.type}</ListGroup.Item>
                  <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
                  <ListGroup.Item>
                    Last known location: {character.location.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Origin: {character.origin.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p>Episodes:</p>
                    {character.episode.map((episode) => (
                      <li>
                        <a href={episode}>{episode}</a>
                      </li>
                    ))}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          )}
        </CharacterContainer>
      </Background>
      <Footer />
    </>
  );
};

export default memo(Character);
