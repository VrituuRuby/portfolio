import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  perspective: 1000px;
  flex: 1;
  aspect-ratio: 5/7;
  position: relative;
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 200%;
  height: 65%;
  transform: rotate(30deg);
  transform-origin: top right;
  opacity: 0.3;

  background-image: linear-gradient(
    0turn,
    transparent,
    rgba(200, 200, 200, 0.3) 5%,
    rgba(255, 255, 255, 0.2) 15%,
    rgba(255, 255, 255, 0.1) 100%
  );

  transition: height 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 12px;
  overflow: hidden;
  transform-style: preserve-3d;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid black;
  transform-origin: 100% 0%;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: inherit;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.secondary},
      ${({ theme }) => theme.primary}
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    z-index: -1;
  }

  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.6),
    inset 0 -6px 40px ${({ theme }) => theme.primary}2E;

  ${ProjectCardContainer}:hover & {
    transform: rotateX(5deg) translateZ(1px);
    box-shadow: 0 25px 30px rgba(0, 0, 0, 0.4),
      inset 0 -6px 40px ${({ theme }) => theme.primary}2E;

    ${Gradient} {
      height: 100%;
      opacity: 0.8;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: top center;
  image-rendering: auto;
  will-change: transform;
`;

export const Title = styled.h4`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 125%;
  font-family: "Press Start 2P", sans-serif;
  color: ${({ theme }) => theme.secondary};
`;

export const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-family: "Space Grotesk", sans-serif;
  color: white;
`;

export const ActionContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;
