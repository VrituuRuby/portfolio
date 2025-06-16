import type { ReactNode } from "react";
import { Container, Wrapper } from "./styles";
import { Footer } from "@/components/footer";

type Props = {
  children?: ReactNode;
};

export function ContentSection({ children }: Props) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  );
}
