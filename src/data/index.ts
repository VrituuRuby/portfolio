import DockerIcon from "../assets/techs/docker.svg?react";
import ExpressIcon from "../assets/techs/express.svg?react";
import JavaScriptIcon from "../assets/techs/javascript.svg?react";
import NestIcon from "../assets/techs/nest.svg?react";
import NodeIcon from "../assets/techs/node.svg?react";
import PrismaIcon from "../assets/techs/prisma.svg?react";
import ReactIcon from "../assets/techs/react.svg?react";
import TailwindIcon from "../assets/techs/tailwind.svg?react";
import TypeScriptIcon from "../assets/techs/typescript.svg?react";
import VueIcon from "../assets/techs/vue.svg?react";
import StyledCompIcon from "../assets/techs/styledcomponents.svg?react";

import ArenaImg from "../assets/projects/arena.png";
import CoffeeDeliveryImg from "../assets/projects/coffeedelivery.png";
import ReactDexImg from "../assets/projects/reactdex.png";

export const technologies = [
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Vue", Icon: VueIcon },
  { name: "Styled-Components", Icon: StyledCompIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Node", Icon: NodeIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "Nest", Icon: NestIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "Docker", Icon: DockerIcon },
];

export type Project = {
  name: string;
  image: string;
  description: string;
  live_demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Arena Transautos",
    image: ArenaImg,
    description:
      "Site feito sob medida para a empresa Arena Transautos, especializada em transporte de veículos. Inclui formulário para solicitação de serviços.",
    live_demo: "https://arenatransautos.com.br/",
  },
  {
    name: "ReactDex",
    image: ReactDexImg,
    description:
      "Pokédex desenvolvida com React utilizando a PokéAPI via GraphQL.",
    live_demo: "https://reactdex.onrender.com/",
    github: "https://github.com/VrituuRuby/react-pokedex",
  },
  {
    name: "Coffee Delivery Shop",
    image: CoffeeDeliveryImg,
    description:
      "Interface de loja fictícia de delivery de café com sistema de carrinho utilizando custom hooks. Projeto de estudo como parte de um desafio Rocketseat.",
    live_demo: "https://coffeedelivery.onrender.com/",
    github: "https://github.com/VrituuRuby/coffee-delivery-app",
  },
];
