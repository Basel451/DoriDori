import React, { useContext, useState } from "react";
import styled from "styled-components";
import Context from "../context/arrayContext";

const Solution = () => {
  const { state } = useContext(Context);
  const [showContent, setShowContent] = useState(false);
  const [message, setMessage] = useState("");
  // vals: [3, 4, 2, 4, 1, 2, 3, 1],
  const check = () => {
    const arr = state.vals;
    console.log(arr);
    console.log(arr[0], arr[2]);
    console.log(arr[1], arr[4]);
    console.log(arr[5], arr[6]);
    console.log(arr[3], arr[7]);

    if (
      arr[0] === arr[2] &&
      arr[1] === arr[4] &&
      arr[5] === arr[6] &&
      arr[3] === arr[7]
    ) {
      setMessage("Aufgabe erfolgreich");
    } else {
      setMessage("Aufgabe fehlgeschlagen arschloch;");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          check();
          !showContent && setShowContent(true);
        }}
      >
        prüfen
      </button>
      {showContent && <div>{message}</div>}
      <>
        {state.vals.map((num, i) => {
          return <div key={i}>{num}</div>;
        })}
      </>
    </div>
  );
};

export default Solution;
