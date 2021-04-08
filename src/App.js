import React, { useReducer } from "react";
import "./App.css";
import Rechteck from "./components/Rechteck";
import styled from "styled-components";
import { initialState, reducer } from "./reducer/reducer";
import Context from "./context/arrayContext";
import Solution from "./components/Solution";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="app__container">
        <div className="app__title">Basel Main APp</div>
        <div className="app__inner">
          <Inner>
            <Rechteck number={0} />
            <Rechteck number={1} />
          </Inner>
          <Inner>
            <Rechteck number={2} />
            <Rechteck number={3} />
          </Inner>
        </div>
      </div>
      <Solution />
    </Context.Provider>
  );
}

export default App;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;
