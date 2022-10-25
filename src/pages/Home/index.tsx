import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import { CharacterType } from 'types/CharacterType';

import { HomeBg, MainContainer } from './styled';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
          <MainContainer className="  my-5 ">
            <Row xs={1} md={2} className=" w-100 g-3 mx-0">
              {characters.map((character) => (
                <Col key={character.id} className="d-flex">
                  <CharacterCard character={character} />
                </Col>
              ))}
            </Row>
            {pgs > 1 && (
              <Pagination className=" flex-wrap justify-content-center my-3">
                {Array(pgs)
                  .fill(null)
                  .map((pageItem, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Pagination.Item
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      active={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
              </Pagination>
            )}
          </MainContainer>
        )}
      </HomeBg>
      <Footer />
    </>
  );
};

export default memo(Home);
