import ThreeCanvas from "../../three-canvas";
import { Container, Content, Greeting, Heading, SubHeading } from "./styles";

export function HeroSection() {
  return (
    <Container>
      <ThreeCanvas />
      <Content>
        <Greeting>Hello, I'm</Greeting>
        <Heading>Vrituu</Heading>
        <SubHeading>FullStack Web Developer</SubHeading>
      </Content>
    </Container>
  );
}
