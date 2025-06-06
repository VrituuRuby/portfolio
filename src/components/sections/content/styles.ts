import styled, { keyframes } from "styled-components";

const BackgroundPan = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 100% 0%;
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
    opacity: 0.1;
    animation: ${BackgroundPan} 30s linear infinite;
    z-index: -1;
  }

  width: 100%;
  min-width: 100vw;
  margin-top: -25px;
  clip-path: polygon(
    0% 15px,
    1.25% 0px,
    2.5% 15px,
    3.75% 0px,
    5% 15px,
    6.25% 0px,
    7.5% 15px,
    8.75% 0px,
    10% 15px,
    11.25% 0px,
    12.5% 15px,
    13.75% 0px,
    15% 15px,
    16.25% 0px,
    17.5% 15px,
    18.75% 0px,
    20% 15px,
    21.25% 0px,
    22.5% 15px,
    23.75% 0px,
    25% 15px,
    26.25% 0px,
    27.5% 15px,
    28.75% 0px,
    30% 15px,
    31.25% 0px,
    32.5% 15px,
    33.75% 0px,
    35% 15px,
    36.25% 0px,
    37.5% 15px,
    38.75% 0px,
    40% 15px,
    41.25% 0px,
    42.5% 15px,
    43.75% 0px,
    45% 15px,
    46.25% 0px,
    47.5% 15px,
    48.75% 0px,
    50% 15px,
    51.25% 0px,
    52.5% 15px,
    53.75% 0px,
    55% 15px,
    56.25% 0px,
    57.5% 15px,
    58.75% 0px,
    60% 15px,
    61.25% 0px,
    62.5% 15px,
    63.75% 0px,
    65% 15px,
    66.25% 0px,
    67.5% 15px,
    68.75% 0px,
    70% 15px,
    71.25% 0px,
    72.5% 15px,
    73.75% 0px,
    75% 15px,
    76.25% 0px,
    77.5% 15px,
    78.75% 0px,
    80% 15px,
    81.25% 0px,
    82.5% 15px,
    83.75% 0px,
    85% 15px,
    86.25% 0px,
    87.5% 15px,
    88.75% 0px,
    90% 15px,
    91.25% 0px,
    92.5% 15px,
    93.75% 0px,
    95% 15px,
    96.25% 0px,
    97.5% 15px,
    98.75% 0px,
    100% 15px,
    100% 100%,
    0% 100%
  );
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
`;
