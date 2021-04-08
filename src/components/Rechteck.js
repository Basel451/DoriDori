import React, { useContext } from "react";
import { useState } from "react";
import Reihe from "./Reihe";
import styled from "styled-components";
import Context from "../context/arrayContext";
import { INSERT } from "../reducer/reducer";

const Rechteck = ({ number }) => {
  const [array, setArray] = useState([1, 2, 3, 4]);
  const { dispatch } = useContext(Context);

  function baselClick() {
    let a = array;
    let last = a.pop();
    a.unshift(last);
    setArray([...a]);
    let num =
      number === 0
        ? [2, 3]
        : number === 1
        ? [1, 3]
        : number === 2
        ? [0, 2]
        : [1, 0];
    dispatch({
      type: INSERT,
      payload: {
        pos: number * 2,
        num: array[num[0]],
        pos2: number * 2 + 1,
        num2: array[num[1]],
      },
    });
  }

  return (
    <RechteckWrapper onClick={baselClick}>
      {number}
      <Reihe numbers={[array[0]]} r={0} />
      <Reihe numbers={[array[1], array[2]]} r={1} />
      <Reihe numbers={[array[3]]} r={2} />
    </RechteckWrapper>
  );
};

const RechteckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(93, 50, 80);
  width: auto;
  height: 31;
  width: 30vmin;
  &:hover {
    cursor: pointer;
  }
`;

export default Rechteck;
