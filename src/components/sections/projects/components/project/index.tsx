import type { Project } from "../../../../../data";
import { Button } from "../../../../shared/button";
import {
  ActionContainer,
  Gradient,
  Image,
  Paragraph,
  ProjectCard,
  ProjectCardContainer,
  Title,
} from "./style";

import GithubSvg from "@/assets/github.svg?react";
import PlaySvg from "@/assets/play.svg?react";

type Props = {
  project: Project;
};

export function Project({ project }: Props) {
  return (
    <ProjectCardContainer>
      <ProjectCard>
        <Gradient />
        <Image src={project.image} />
        <Title>{project.name}</Title>
        <Paragraph>{project.description}</Paragraph>
        <ActionContainer>
          {project.live_demo && (
            <Button as="a" target="_blank" href={project.live_demo}>
              <PlaySvg />
              Acessar
            </Button>
          )}
          {project.github && (
            <Button as="a" target="_blank" href={project.github}>
              <GithubSvg />
              Github
            </Button>
          )}
        </ActionContainer>
      </ProjectCard>
    </ProjectCardContainer>
  );
}
