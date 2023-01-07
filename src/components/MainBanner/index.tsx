import { memo } from 'react';

import { Container } from 'react-bootstrap';

import logo from 'assets/logo.png';

import Header from 'components/Header';

import { MainBannerBg, Title } from './styled';

interface IMainBannerProps {
  children?: React.ReactNode;
}
<img src={logo} alt="logo" />;
const MainBanner: React.FC<IMainBannerProps> = () => {
  return (
    <MainBannerBg>
      <Container className="d-flex flex-column flex-grow-1">
        <Header />
        <Title className="text-center mt-auto mb-auto">
          The Rick and Morty API
        </Title>
      </Container>
    </MainBannerBg>
  );
};

export default memo(MainBanner);
