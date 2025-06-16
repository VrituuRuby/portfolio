import {
  Ambigram,
  Container,
  Copyright,
  Link,
  LinksContainer,
  VerticalDivider,
} from "./styles";

import DiscordSvg from "@/assets/discord.svg?react";
import LinkedinSvg from "@/assets/linkedin.svg?react";
import GithubSvg from "@/assets/github.svg?react";

export function Footer() {
  return (
    <Container>
      <Ambigram />
      <LinksContainer>
        <Link>
          <DiscordSvg />
        </Link>
        <VerticalDivider />
        <Link>
          <LinkedinSvg />
        </Link>
        <VerticalDivider />
        <Link>
          <GithubSvg />
        </Link>
      </LinksContainer>

      <Copyright>© 2025 Victor Velozo. Todos os direitos reservados.</Copyright>
    </Container>
  );
}
