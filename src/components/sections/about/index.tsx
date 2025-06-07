import { technologies } from "../../../data";
import {
  AboutMe,
  Container,
  Description,
  Image,
  Paragraph,
  Skills,
  Technology,
  TechsContainer,
  Title,
  Wrap,
} from "./styles";

export function AboutSection() {
  return (
    <Container>
      <AboutMe>
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
      </AboutMe>
      <Skills>
        <Title>Habilidades</Title>
        <Paragraph>
          Experiência em Node e React tanto para aplicações web quanto mobile.
          Estas são algumas das tecnologias utilizo no meu dia a dia:
        </Paragraph>

        <TechsContainer>
          {technologies.map((tech) => (
            <Technology>
              {<tech.Icon />}
              {tech.name}
            </Technology>
          ))}
        </TechsContainer>
      </Skills>
    </Container>
  );
}
