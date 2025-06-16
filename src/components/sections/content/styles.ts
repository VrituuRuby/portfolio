import styled, { keyframes } from "styled-components";

const BackgroundPan = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -100% 0%;
  }
`;

export const Container = styled.main`
  transform-style: preserve-3d;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("./wavy-pattern.png");
    mix-blend-mode: multiply;
    opacity: 0.125;
    z-index: -1;
    background-size: 600px;
    animation: ${BackgroundPan} 30s linear infinite;
    will-change: background-position;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  padding-top: 25px;
`;
