import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Container, Content } from "./styled";

type Props = (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  children: ReactNode;
  as?: "button" | "a";
};

export function Button({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>{children}</Content>
    </Container>
  );
}
