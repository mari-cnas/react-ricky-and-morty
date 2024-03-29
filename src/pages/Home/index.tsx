import { memo, useEffect } from 'react';

import { Col, Container, Ratio, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import useTitle from 'hooks/useTitle';

import { Wrapper } from 'styles/GlobalStyles';

import characters from '../../assets/characters.jpg';
import episodes from '../../assets/episodes.png';
import locations from '../../assets/locations.jpg';
import { CardT, HomeContainer } from './styled';

const Home: React.FC = () => {
  const setTitle = useTitle();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTitle('');
  }, [setTitle]);

  return (
    <Wrapper>
      <MainBanner />
      <HomeContainer className="mt-auto ">
        <Row className=" row-cols-1 row-cols-md-3 mt-2 mb-5">
          <Col className="d-flex mt-5">
            <Link to="/characters" className="w-100">
              <CardT>Characters: 826</CardT>
              <Ratio aspectRatio="16x9">
                <img src={characters} alt="Characters" />
              </Ratio>
            </Link>
          </Col>
          <Col className="d-flex mt-5">
            <Link to="/episodes" className="w-100">
              <CardT>Episodes: 51</CardT>
              <Ratio aspectRatio="16x9">
                <img src={episodes} alt="Episodes" />
              </Ratio>
            </Link>
          </Col>
          <Col className="d-flex my-5">
            <Link to="/locations" className="w-100">
              <CardT>Locations: 126</CardT>
              <Ratio aspectRatio="16x9">
                <img src={locations} alt="Locations" />
              </Ratio>
            </Link>
          </Col>
        </Row>
      </HomeContainer>
      <Footer />
    </Wrapper>
  );
};

export default memo(Home);
