import { projects } from "../../../data";
import { Project } from "./components/project";
import { Container, ProjectsContainer, Title } from "./styles";

export function ProjectsSection() {
  return (
    <Container>
      <Title>Projetos</Title>
      <ProjectsContainer>
        {projects.map((item, i) => (
          <Project project={item} key={i} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}
