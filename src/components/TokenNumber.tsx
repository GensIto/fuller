import styled from "styled-components";

export const TokenNumber = (props: any) => {
  return (
    <>
      <TokenText>
        {props.tokenPrevNumber < 100 && props.tokenPrevNumber > 10
          ? `0${props.tokenPrevNumber}`
          : props.tokenPrevNumber < 10
          ? `00${props.tokenPrevNumber}`
          : props.tokenPrevNumber}{" "}
        {props.tokenRearNumber < 100 && props.tokenRearNumber > 10
          ? `0${props.tokenRearNumber}`
          : props.tokenRearNumber < 10
          ? `00${props.tokenRearNumber}`
          : props.tokenRearNumber}
      </TokenText>
    </>
  );
};

const TokenText = styled.p`
  text-align: left;
  font-size: 2rem;
  font-weight: 500;
`;
