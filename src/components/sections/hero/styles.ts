import styled, { keyframes } from "styled-components";
import AmbigramVector from "@/assets/ambigram.svg?react";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;

  position: relative;
  transform-style: preserve-3d;

  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    width: 100vw;
    height: 100vh;
    position: absolute;
    transform: translateZ(-1px);
  }
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  transform: translateZ(-0.5px) scale(1.5) !important;
`;

export const VectorAmbigram = styled(AmbigramVector)`
  filter: drop-shadow(-10px 8px 0 rgba(0, 0, 0, 0.5));
`;

export const Greeting = styled.p`
  font-size: 2rem;
  color: white;
  font-family: "Press Start 2P", sans-serif;
`;

export const Heading = styled.h1`
  color: white;
  font-size: 7vw;
  font-family: "Press Start 2P", sans-serif;
  line-height: 125%;
`;

export const SubHeading = styled.h2`
  color: white;
  font-size: 2vw;
  font-family: "Press Start 2P", sans-serif;
  color: white;
`;
