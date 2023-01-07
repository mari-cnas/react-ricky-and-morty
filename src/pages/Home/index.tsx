import { memo } from 'react';

import { Col, Container, Ratio, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';
import MainBanner from 'components/MainBanner';

import characters from '../../assets/characters.jpg';
import episodes from '../../assets/episodes.png';
import locations from '../../assets/locations.jpg';
import { CardT, HomeBg, MainSection } from './styled';

const Home: React.FC = () => {
  return (
    <HomeBg>
      <MainSection>
        <MainBanner />
        <Container className="mt-auto mb-auto">
          <Row className="g-5 row-cols-1 row-cols-md-3">
            <Col className="d-flex">
              <Link to="/characters" className="w-100">
                <CardT>Characters: 826</CardT>
                <Ratio aspectRatio="16x9">
                  <img src={characters} alt="Characters" />
                </Ratio>
              </Link>
            </Col>
            <Col className="d-flex">
              <Link to="/episodes" className="w-100">
                <CardT>Episodes: 51</CardT>
                <Ratio aspectRatio="16x9">
                  <img src={episodes} alt="Episodes" />
                </Ratio>
              </Link>
            </Col>
            <Col className="d-flex">
              <Link to="/locations" className="w-100">
                <CardT>Locations: 126</CardT>
                <Ratio aspectRatio="16x9">
                  <img src={locations} alt="Locations" />
                </Ratio>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </MainSection>
    </HomeBg>
  );
};

export default memo(Home);
