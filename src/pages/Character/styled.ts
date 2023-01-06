import { Container } from 'react-bootstrap';
import styled from 'styled-components';

interface IVerifyProps {
  status: string;
}

export const CharacterContainer = styled(Container)`
  background-color: #add8e6;
  display: flex;
`;

export const Background = styled.div`
  background-color: rgb(32, 35, 41);
  display: flex;
`;

export const CharacterName = styled.h1`
  text-shadow: black 0.1em 0.1em 0.2em;
  color: white;
`;

export const Verify = styled.p<IVerifyProps>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${({ status }) => {
    switch (status) {
      case 'Alive':
        return '#55cc44';
      case 'Dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  }};
  border-radius: 50%;
  margin-top: 8px;
`;
