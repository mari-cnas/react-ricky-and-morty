import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';

import Footer from 'components/Footer';
import LocationCard from 'components/Location Card';
import MainBanner from 'components/MainBanner';
import MainTitle from 'components/MainTitle';

import useTitle from 'hooks/useTitle';

import { Paginate, Wrapper } from 'styles/GlobalStyles';

import { LocationType } from 'types/Locationstype';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const setTitle = useTitle();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTitle('Locations');
  }, [setTitle]);

  const fetchLocations = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    ).then((response) => response.json());
    setIsLoading(false);
    setLocations(results);
    setPgs(info.pages);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    fetchLocations(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchLocations(page);
    },
    [fetchLocations],
  );

  return (
    <Wrapper>
      <MainBanner />
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        {isLoading && (
          <div className="d-flex mt-auto mb-auto">
            <Spinner animation="grow" variant="primary" />
          </div>
        )}

        {!isLoading && (
          <Container className="mx-5 mt-5">
            <div className="d-flex flex-column w-100">
              <MainTitle title="Locations" />
              <Row xs={1} md={2} className=" g-3 justify-content-center">
                {locations.map((location) => (
                  <Col key={location.id} className="d-flex">
                    <LocationCard location={location} />
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

export default memo(Locations);
