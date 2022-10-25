import styled from 'styled-components';

import rickandmorty from 'assets/rick-and-morty-cover-4.jpg';

export const MainBannerContainer = styled.div`
  background-image: url(${rickandmorty});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  color: black;

  --bs-navbar-color: white;

  :root {
    --bs-navbar-color: white;
  }

  /* unvisited link */
  a:link {
    color: #add8e6;
    text-decoration: none;
  }

  /* visited link */
  a:visited {
    color: white;
  }

  /* mouse over link */
  a:hover {
    color: grey;
  }

  /* selected link */
  a:active {
    color: #0000ff;
  }
`;

export const Title = styled.h1`
  //text-shadow: 0.1em 0.1em 0.05em blue;
  // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
  font-size: 4rem;

  @media (min-width: 320px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    font-size: 2rem;
  }
  @media (min-width: 480px) {
    /* smartphones, Android phones, landscape iPhone */
    font-size: 4rem;
  }
  @media (min-width: 600px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  }
  @media (min-width: 801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
    h1 {
      font-size: 4rem;
    }
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
    h1 {
      font-size: 4rem;
    }
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
    h1 {
      font-size: 4rem;
    }
  }
`;
