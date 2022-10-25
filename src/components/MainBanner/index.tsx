import { memo } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from 'assets/logo2.png';

import { MainBannerContainer, Title } from './styled';

interface IMainBannerProps {
  children?: React.ReactNode;
}

const MainBanner: React.FC<IMainBannerProps> = () => {
  return (
    <MainBannerContainer className="d-flex flex-column ">
      <div className="container">
        <Navbar bg="transparent " expand="md" className="fw-bold">
          <Navbar.Brand href="#home" className="">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="px-4">
                HOME
              </Link>
              <Link to="/locations" className="px-4">
                LOCATIONS
              </Link>
              <Link to="/episodes" className="px-4">
                EPISODES
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Title className="fw-bold align-self-center mx-5">
          The Rick and Morty Characters
        </Title>
      </div>
    </MainBannerContainer>
  );
};

export default memo(MainBanner);
