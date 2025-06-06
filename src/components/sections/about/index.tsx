import { Container, Description, Image, Title, Wrap } from "./styles";

export function AboutSection() {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <Wrap>
        <Image
          src="https://avatars.githubusercontent.com/u/61244052?v=4"
          alt="Foto de perfil"
        />
        <Description>
          <h2>Victor "Vritu" Velozo</h2>
          <h3>FullStack Webdeveloper</h3>
          <p>
            Desenvolvedor fullstack focado em criar aplicações web modernas e
            escaláveis - do design ao banco de dados.
          </p>
        </Description>
      </Wrap>
    </Container>
  );
}
