import { projects } from "../../../data";
import { Title } from "../about/styles";
import { Project } from "./components/project";
import { Container, ProjectsContainer } from "./styles";

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
