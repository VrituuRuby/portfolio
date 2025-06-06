import type { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children?: ReactNode;
};

export function ContentSection({ children }: Props) {
  return <Container>{children}</Container>;
}
