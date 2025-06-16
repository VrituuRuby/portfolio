import { useEffect, useRef } from "react";
import ThreeCanvas from "../../three-canvas";
import { Container, Content, VectorAmbigram } from "./styles";

export function HeroSection() {
  const ref = useRef<SVGSVGElement>(null);

  const frequency = 1.5;
  const amplitude = 10;

  useEffect(() => {
    let frameId: number;
    let t = 0;

    const animate = () => {
      t += 0.02;
      const y = Math.sin(t * frequency) * amplitude;
      if (ref.current) {
        ref.current.style.transform = `translateY(${y}px)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, [amplitude, frequency]);

  return (
    <Container>
      <ThreeCanvas />
      <Content>
        <VectorAmbigram ref={ref} />
      </Content>
    </Container>
  );
}
