import type { ReactNode } from "react";
import { Container, Wrapper } from "./styles";

type Props = {
  children?: ReactNode;
};

export function ContentSection({ children }: Props) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
