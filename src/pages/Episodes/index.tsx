import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';
import MainTitle from 'components/MainTitle';

import useTitle from 'hooks/useTitle';

import { Paginate, Wrapper } from 'styles/GlobalStyles';

import { EpisodeType } from 'types/EpisodeType';

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const setTitle = useTitle();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTitle('Episodes');
  }, [setTitle]);

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
    <Wrapper>
      <MainBanner />

      <div className="d-flex justify-content-center flex-grow-1">
        {isLoading && (
          <div className="d-flex mt-auto mb-auto">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}

        {!isLoading && (
          <Container className="mx-5 mt-5">
            <div className="d-flex flex-column w-100">
              <MainTitle title="Episodes" />
              <Row xs={1} md={2} lg={3} className=" g-3 justify-content-center">
                {episodes.map((episode) => (
                  <Col key={episode.id} className="d-flex">
                    <EpisodeCard episode={episode} />
                  </Col>
                ))}
              </Row>
              {pgs > 1 && (
                <Paginate
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={pgs}
                  previousLabel="<<"
                  nextLabel=">>"
                  className="my-5 list-unstyled flex-wrap"
                />
              )}
            </div>
          </Container>
        )}
      </div>

      <Footer />
    </Wrapper>
  );
};

export default memo(Episodes);
