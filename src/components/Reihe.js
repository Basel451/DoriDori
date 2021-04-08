import React from "react";
import styled from "styled-components/macro";
import Quadrat from "./Quadrat";

const Reihe = ({ numbers, r }) => {
  return (
    <Row>
      {numbers.map((num, i) => {
        return (
          <>
            {i === 1 && (
              <Quadrat key={`isfsdf-${i}`} i={i} r={2}>
                Image
              </Quadrat>
            )}
            <Quadrat key={`${i}-row`} i={i} r={r}>
              {num}
            </Quadrat>
          </>
        );
      })}
    </Row>
  );
};

export default Reihe;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;
