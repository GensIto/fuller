import styled from "styled-components";

export const StyledSVG = styled.svg`
  background: transparent;
  border-radius: 50%;
  transform: scale(-1, 1) rotate(-90deg);
`;

export const StyledCircle = styled.circle.attrs((props: any) => ({
  progress: props.progress,
}))`
  fill: none;
  stroke: #cf587f;
  stroke-width: 100;
  stroke-dasharray: ${(props) => props.progress} 314;
`;
