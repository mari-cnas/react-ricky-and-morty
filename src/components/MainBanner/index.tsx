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
      <Container>
        <Header />
        <Title className="text-center mt-5">The Rick and Morty API</Title>
      </Container>
    </MainBannerBg>
  );
};

export default memo(MainBanner);
