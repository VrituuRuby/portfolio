import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 100px;
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-family: "Press Start 2P", sans-serif;
  color: ${({ theme }) => theme.secondary};
  font-size: 2rem;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
