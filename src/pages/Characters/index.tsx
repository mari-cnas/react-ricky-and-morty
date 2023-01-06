import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Row, Spinner } from 'react-bootstrap';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';
import MainTitle from 'components/MainTitle';

import useTitle from 'hooks/useTitle';

import { CharacterType } from 'types/CharacterType';

import { CharactersPaginate, HomeBg, MainContainer } from './styled';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const setTitle = useTitle();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTitle('');
  }, [setTitle]);

  const fetchCharacters = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then((response) => response.json());
    setIsLoading(false);
    setCharacters(results);
    setPgs(info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchCharacters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchCharacters(page);
    },
    [fetchCharacters],
  );

  return (
    <>
      <MainBanner />
      <HomeBg className="d-flex justify-content-center">
        {isLoading && (
          <div className="d-flex aling-items-center justify-content-center my-5">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}

        {!isLoading && (
          <MainContainer className="mt-4   ">
            <MainTitle title="Characters" />
            <Row xs={1} md={2} className=" w-100 g-3 mx-0">
              {characters.map((character) => (
                <Col key={character.id} className="d-flex">
                  <CharacterCard character={character} />
                </Col>
              ))}
            </Row>
            {pgs > 1 && (
              <CharactersPaginate
                forcePage={currentPage - 1}
                onPageChange={(p) => handlePageChange(p.selected + 1)}
                pageCount={pgs}
                previousLabel="<<"
                nextLabel=">>"
                className="my-5 list-unstyled flex-wrap"
              />
            )}
          </MainContainer>
        )}
      </HomeBg>
      <Footer />
    </>
  );
};

export default memo(Characters);
