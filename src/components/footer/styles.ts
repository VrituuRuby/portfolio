import styled from "styled-components";
import AmbigramVector from "@/assets/ambigram.svg?react";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: 1px dashed rgba(255, 255, 255, 0.25);

  align-items: center;
  color: white;
  gap: 2rem;
  padding: 2rem 0;
`;

export const Ambigram = styled(AmbigramVector)`
  height: 50px;
`;

export const LinksContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 12px;
`;

export const Link = styled.a`
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: white;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.25);
`;
