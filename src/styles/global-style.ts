import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
  }

  html, body {
    height: 100vh;
    overflow: hidden;
  }

  #root {
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100vw;
    height: 100vh;
    perspective: 1px;
    transform-style: preserve-3d;
  }

`;
