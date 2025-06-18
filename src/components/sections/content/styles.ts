import { theme } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

const BackgroundPan = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -100% 0%;
  }
`;

export const Container = styled.main`
  transform-style: preserve-3d;
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("./wavy-pattern.png");
    mix-blend-mode: multiply;
    opacity: 0.125;
    z-index: -1;
    background-size: 600px;
    animation: ${BackgroundPan} 30s linear infinite;
    will-change: background-position;
  }

  clip-path: polygon(
    0 0,
    50px 20px,
    100px 0,
    150px 20px,
    200px 0,
    250px 20px,
    300px 0,
    350px 20px,
    400px 0,
    450px 20px,
    500px 0,
    550px 20px,
    600px 0,
    650px 20px,
    700px 0,
    750px 20px,
    800px 0,
    850px 20px,
    900px 0,
    950px 20px,
    1000px 0,
    1050px 20px,
    1100px 0,
    1150px 20px,
    1200px 0,
    1250px 20px,
    1300px 0,
    1350px 20px,
    1400px 0,
    1450px 20px,
    1500px 0,
    1550px 20px,
    1600px 0,
    1650px 20px,
    1700px 0,
    1750px 20px,
    1800px 0,
    1850px 20px,
    1900px 0,
    1950px 20px,
    2000px 0,
    2050px 20px,
    2100px 0,
    2150px 20px,
    2200px 0,
    2250px 20px,
    2300px 0,
    2350px 20px,
    2400px 0,
    2450px 20px,
    2500px 0,
    2550px 20px,
    2600px 0,
    2650px 20px,
    2700px 0,
    2750px 20px,
    2800px 0,
    2850px 20px,
    2900px 0,
    2950px 20px,
    3000px 0,
    3050px 20px,
    3100px 0,
    3150px 20px,
    3200px 0,
    3250px 20px,
    3300px 0,
    3350px 20px,
    3400px 0,
    3450px 20px,
    3500px 0,
    100% 20px,
    100% 100%,
    0% 100%
  );
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  padding-top: 25px;
`;
