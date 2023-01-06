import { memo, useState } from 'react';

import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import logob from '../../assets/logo_black.png';
import logo from '../../assets/logo.png';
import { HeaderBg, MenuMobile, MenuOverlay, NavDiv } from './styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <HeaderBg className="py-3">
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <div className="container d-flex align-items-center justify-content-between w-100 d-block d-md-none">
        <div className="d-flex align-items-end ">
          <GiHamburgerMenu
            type="button"
            onClick={() => setIsMenuOpened(true)}
            size={18}
            style={{ color: '#add8e6' }}
          />
        </div>
      </div>
      <MenuMobile
        isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-md-none position-fixed "
      >
        <NavDiv className="container w-100">
          <div className=" d-flex flex-column justify-content-center mb-3">
            <AiOutlineClose
              type="button"
              onClick={() => setIsMenuOpened(false)}
              className="align-self-end my-3"
            />
          </div>
          <div className="d-flex flex-column justify-content-between w-100">
            <Link to="/" className="mb-5">
              <img src={logob} alt="logo" style={{ width: '50px' }} />
            </Link>
            <Link to="/characters" className="mb-5">
              CHARACTERS
            </Link>
            <Link to="/episodes" className="mb-5">
              EPISODES
            </Link>
            <Link to="/locations" className=" mb-5">
              LOCATIONS
            </Link>
          </div>
        </NavDiv>
      </MenuMobile>
      <NavDiv className="w-100 d-none d-md-flex">
        <div className="d-flex  align-items-center justify-content-start w-100">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
          </Link>
          <Link to="/characters" className="mb-2 ms-3">
            CHARACTERS
          </Link>
          <Link to="/episodes" className="mb-2 mx-3">
            EPISODES
          </Link>
          <Link to="/locations" className=" mb-2 ">
            LOCATIONS
          </Link>
        </div>
      </NavDiv>
    </HeaderBg>
  );
};

export default memo(Header);
