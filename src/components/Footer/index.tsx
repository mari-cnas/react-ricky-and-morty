import { memo } from 'react';

import { Container } from 'react-bootstrap';
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialFacebook,
} from 'react-icons/ti';

import { FooterBg } from './styled';

const Footer: React.FC = () => {
  return (
    <FooterBg>
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center  my-4 ">
          <div className="col-md-4 d-flex align-items-center">
            <span>&copy; ❮❯ by MaryAnn 2022</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="www.google.com">
                <TiSocialTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a href="www.google.com">
                <TiSocialInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a href="www.google.com">
                <TiSocialFacebook />
              </a>
            </li>
            <li className="ms-3">
              <a href="www.google.com">
                <TiSocialGithub />
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </FooterBg>
  );
};

export default memo(Footer);
