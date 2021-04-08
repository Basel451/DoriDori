import React from "react";
import styled from "styled-components";

const Quadrat = ({ children, i, r }) => {
  return (
    <QuadratWrapper i={i} r={r}>
      <span className="tW">{children}</span>
    </QuadratWrapper>
  );
};

export default Quadrat;

const QuadratWrapper = styled.div`
  background-color: tomato;
  width: 10vmin;
  height: 10vmin;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  .tW {
    transform: ${({ r, i }) =>
      r === 2
        ? "rotate(0deg)"
        : r === 0
        ? "rotate(180deg)"
        : r === 1 && i === 0
        ? "rotate(90deg)"
        : "rotate(270deg)"};
  }
`;
