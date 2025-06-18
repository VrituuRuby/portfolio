import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 70vh;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  background-color: rgb(255 255 255 / 10%);
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  padding: 0.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  background-color: rgb(255 255 255 / 10%);
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  padding: 0.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: white;
  padding-left: 0.5rem;
  font-weight: bold;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 0.5rem;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
  }
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondary}
    );
  }
`;

export const MailTo = styled.a`
  width: fit-content;
  margin: 0 auto;
  background-color: transparent;
  text-decoration: none;
  color: white;
  display: flex;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 0.5rem 0.6rem;
`;
