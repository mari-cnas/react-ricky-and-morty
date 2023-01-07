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
        <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center  my-3 ">
          <div className="col-md-4 d-flex align-items-center">
            <span>
              &copy; ❮❯ by{' '}
              <a
                href="https://www.linkedin.com/in/marianacnascimento/"
                target="_blank"
                rel="noreferrer"
              >
                Mariana Carvalho
              </a>{' '}
              2022
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="https://github.com/mari-cnas"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialTwitter size={22} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/mari-cnas"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialInstagram size={22} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/mari-cnas"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialFacebook size={22} />
              </a>
            </li>
            <li className="ms-3">
              <a
                href="https://github.com/mari-cnas"
                target="_blank"
                rel="noreferrer"
              >
                <TiSocialGithub size={22} />
              </a>
            </li>
          </ul>
        </footer>
      </Container>
    </FooterBg>
  );
};

export default memo(Footer);
