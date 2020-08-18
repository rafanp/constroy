import styled from "styled-components";
import { shade } from "polished";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImg}) no-repeat 100% center;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 25vh 0 0 10%;
    color: #fcfcfc;
    font-weight: 900;
    font-size: 3.6rem;
  }

  h2 {
    margin: 10vh 0 0 10%;
    font-size: 2.4rem;
    font-weight: 700;
    color: #f2bd18;
  }

  span {
    margin: 5vh 0 0 10%;
    font-size: 2.4rem;
    font-weight: 700;
    color: #fcfcfc;
  }

  button {
    margin: 15vh 0 15vh 10%;
  }

  @media (min-width: 1100px) {
    section {
      width: 1368px;
    }
    h1 {
      font-size: 64px;
    }
    h2 {
      font-size: 48px;
    }
  }
`;

export const Content = styled.div`
  color: #30233d;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: #f2bd18;
    font-weight: 700;
    font-size: 12.6px;
    line-height: 26px;
    letter-spacing: 6px;

    margin: 10vh 0 0 10vh;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 36px;

    margin: 5vh 0 0 10vh;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;

    margin: 10vh 10vh 0 10vh;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;

    color: #776c82;

    margin: 5vh 10vh 0 10vh;
  }

  @media (min-width: 1100px) {
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    section {
      width: 1368px;
    }
    img {
      display: block;
      width: 40vw;
      max-width: 500px;
    }
  }
`;

export const Main = styled.div`
  background: #0e274c;
  margin-top: 10vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
  }

  h1 {
    color: #f2bd18;
    font-weight: 700;
    font-size: 12.6px;
    line-height: 26px;
    letter-spacing: 6px;

    margin: 10vh 0 0 10vh;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 36px;

    margin: 5vh 0 0 10vh;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 36px;

    margin: 0vh 2vh 0 10vh;
  }

  a {
    margin: 10vh 0 0 20vh;
    background: #ff9000;
    width: 20rem;
    height: 5.6rem;
    border-radius: 10px;
    border: 0;
    color: #312e38;
    font-weight: 500;
    transition: background-color 0.2s;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: space-evenly;
    &:hover {
      background: ${shade(0.2, "#ff9000")};
    }
  }

  @media (min-width: 1100px) {
    section {
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      width: 1368px;
      margin-bottom: 10vh;
    }

    .itens {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-around;
    }
  }
`;

export const Footer = styled.div`
  width: 100vw;
  background: #000;

  display: flex;
  flex-direction: column;

  section .itens {
    margin: 10vh 10vh 10vh 10vh;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
  }

  h1 {
    color: #f2bd18;
    font-weight: 900;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 3px;
  }

  p {
    margin-left: 2vh;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
  }

  img {
    width: 2.4rem;
  }

  a {
    text-decoration: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    color: #fff;
    display: flex;
    flex-direction: row;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#ff9000")};
    }
  }

  @media (min-width: 700px) {
    .main {
      width: 100vw;
      max-width: 1368px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
