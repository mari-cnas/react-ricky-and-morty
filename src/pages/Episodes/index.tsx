import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import { EpisodeType } from 'types/EpisodeType';

import { HomeBg, MainContainer } from './styled';

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEpisodes = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    ).then((response) => response.json());
    setIsLoading(false);
    setEpisodes(results);
    setPgs(info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchEpisodes(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchEpisodes(page);
    },
    [fetchEpisodes],
  );

  return (
    <>
      <MainBanner />
      <HomeBg className="d-flex justify-content-center">
        <MainContainer className="mx-5 my-5">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
            </div>
          )}

          {!isLoading && (
            <div className="d-flex flex-column w-100">
              <Row xs={1} md={3} className=" g-3 justify-content-center">
                {episodes.map((episode) => (
                  <Col key={episode.id} className="d-flex">
                    <EpisodeCard episode={episode} />
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
            </div>
          )}
        </MainContainer>
      </HomeBg>
      <Footer />
    </>
  );
};

export default memo(Episodes);
