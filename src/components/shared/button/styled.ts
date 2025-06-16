import styled from "styled-components";

export const Container = styled.button`
  flex: 1;
  background-image: linear-gradient(
    to top right,
    ${({ theme }) => theme.primary},
    ${({ theme }) => theme.secondary}
  );
  padding: 2px;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0px 0px 0px transparent;
  font-size: 1rem;

  transition: box-shadow, transform, 100ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px 1px ${({ theme }) => theme.primary}80;
  }

  text-decoration: none;

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px 0 ${({ theme }) => theme.primary}80;
  }
`;

export const Content = styled.p`
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.background}80;
  text-align: center;
  color: white;
  border-radius: 6px;
`;
