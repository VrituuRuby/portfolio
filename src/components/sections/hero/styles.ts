import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  color: white;
  font-size: 5rem;
`;
