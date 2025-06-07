import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-family: "Press Start 2P", sans-serif;
  color: ${({ theme }) => theme.secondary};
  font-size: 2rem;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 200px;
  width: 100%;
  border-radius: 100%;
  aspect-ratio: 1;
`;

export const Description = styled.div`
  flex-direction: column;
  gap: 0.5rem;
  font-family: "Space Grotesk", sans-serif;
  color: white;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    line-height: 125%;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Paragraph = styled.p`
  font-family: "Space Grotesk", sans-serif;
  color: white;
  width: 100%;
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Technology = styled.div`
  display: flex;
  gap: 0.25rem;
  color: white;
  font-size: 1rem;
  font-weight: medium;

  padding: 0.25rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.primary};
`;
