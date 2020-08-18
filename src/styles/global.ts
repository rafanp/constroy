import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 60%;
    overflow-x: hidden;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {

    background: #FFF;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'M PLUS 1p', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  html, body, #root{
  height: 100vh;
  }

`;
