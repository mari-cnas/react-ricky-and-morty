import { memo } from 'react';

import { IoArrowUndoCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Title } from './styled';

interface IBaseComponentProps {
  children?: React.ReactNode;
  title: string;
}

const MainTitle: React.FC<IBaseComponentProps> = ({ title }) => {
  return (
    <div className="d-flex align-items-center pb-3">
      <Link to="/">
        <IoArrowUndoCircle
          className="me-3 "
          size={30}
          style={{ color: '#87f' }}
        />
      </Link>
      <Title>{title}</Title>
    </div>
  );
};

export default memo(MainTitle);
