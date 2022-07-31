import { StyledSVG, StyledCircle } from "./CircleStyle";

export const Circle = (props: any) => {
  return (
    <StyledSVG width='50' height='50'>
      <StyledCircle progress={props.progress} r='50' cx='25' cy='25' />
    </StyledSVG>
  );
};
