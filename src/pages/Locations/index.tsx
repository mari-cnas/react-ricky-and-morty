import { memo, useCallback, useEffect, useState } from 'react';

import { Col, Pagination, Row, Spinner } from 'react-bootstrap';

import Footer from 'components/Footer';
import LocationCard from 'components/Location Card';
import MainBanner from 'components/MainBanner';

import { LocationType } from 'types/Locationstype';

import { LocationsBg, MainContainer } from './styled';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pgs, setPgs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
    <>
      <MainBanner />
      <LocationsBg className="d-flex justify-content-center">
        <MainContainer className="mx-5 my-5">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
            </div>
          )}

          {!isLoading && (
            <div className="d-flex flex-column w-100">
              <Row xs={1} md={3} className=" g-3 justify-content-center">
                {locations.map((location) => (
                  <Col key={location.id} className="d-flex">
                    <LocationCard location={location} />
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
      </LocationsBg>
      <Footer />
    </>
  );
};

export default memo(Locations);
