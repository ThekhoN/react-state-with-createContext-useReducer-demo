import React from "react";
import { CounterConsumer } from "../context-state-modules/counter/context";
import styled from "styled-components";

const CounterWrapper = styled.div`
  button {
    padding: 0.3rem 0.6rem;
    margin: 0.3rem;
    border-radius: 0.3rem;
    font-size: 0.675rem;
  }
`;

const Counter = ({ count, incrementCount, decrementCount, resetCount }) => {
  return (
    <CounterWrapper>
      <h4>
        Count: <span>{count.value}</span>
      </h4>
      <br />
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={resetCount}>Reset Count</button>
    </CounterWrapper>
  );
};

const ConnectedCounter = () => {
  return (
    <CounterConsumer>
      {props => {
        return <Counter {...props} />;
      }}
    </CounterConsumer>
  );
};

export default ConnectedCounter;
