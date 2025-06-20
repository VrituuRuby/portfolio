import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Space Grotesk", sans-serif;
    -webkit-font-smoothing: antialiased; /* Chrome/Safari */
    -moz-osx-font-smoothing: grayscale;  /* Firefox */
    text-rendering: optimizeLegibility;
  }

  html, body {
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.primary};

  }


  #root {
    overflow-x: hidden;
    overflow-y: overlay;
    width: 100vw;
    height: 100vh;
    perspective: 1px;
    transform-style: preserve-3d;

    scrollbar-gutter: stable;
    scrollbar-width: thin;

  }

`;
