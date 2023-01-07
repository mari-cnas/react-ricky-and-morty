import styled from 'styled-components';

import rickandmorty from 'assets/rick-and-morty-cover-4.jpg';

export const MainBannerBg = styled.div`
  display: flex;
  background-image: url(${rickandmorty});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  color: black;
`;

export const Title = styled.h1`
  text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
  font-weight: bold;
  font-size: 4rem;

  @media (max-width: 768px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    font-size: 4rem;
  }
`;
