import { memo, useCallback, useEffect, useState } from 'react';

import { Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { IoArrowUndoCircle } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import useCapitalize from 'hooks/useCapitalize';
import useTitle from 'hooks/useTitle';

import { Wrapper } from 'styles/GlobalStyles';

import { CharacterType } from 'types/CharacterType';

import { CharacterContainer, CharacterName, Verify } from './styled';

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
    <Wrapper>
      <MainBanner />
      <div className="d-flex flex-column align-items-center flex-grow-1">
        {isLoading && (
          <div className="d-flex mt-auto mb-auto">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}
        {!isLoading && character && (
          <CharacterContainer className=" py-3 flex-column align-items-center">
            <div className="d-flex align-items-center">
              <Link to="/characters">
                <IoArrowUndoCircle
                  className="me-3 "
                  size={30}
                  style={{ color: '#87f' }}
                />
              </Link>
              <CharacterName>{character?.name ?? 'Loading...'}</CharacterName>
            </div>

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
                    {character.status.charAt(0).toUpperCase() +
                      character.status.slice(1)}{' '}
                    - {character.species}
                  </ListGroup.Item>
                  {character.type && (
                    <ListGroup.Item>Type: {character.type}</ListGroup.Item>
                  )}
                  <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
                  <ListGroup.Item>
                    Last known location: {character.location.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Origin: {character.origin.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Episodes: {character.episode.length}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </CharacterContainer>
        )}
      </div>
      <Footer />
    </Wrapper>
  );
};

export default memo(Character);
