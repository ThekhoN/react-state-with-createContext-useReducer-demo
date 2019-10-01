import React from "react";
import { INCREMENT_COUNT, DECREMENT_COUNT, RESET_COUNT } from "./actions";
import countReducer, { initialCount } from "./reducer";

const { Provider, Consumer } = React.createContext();

export { Consumer as CounterConsumer };

export const CounterProvider = ({ children }) => {
  const [count, dispatch] = React.useReducer(countReducer, initialCount);
  const incrementCount = () =>
    dispatch({
      type: INCREMENT_COUNT
    });
  const decrementCount = () =>
    dispatch({
      type: DECREMENT_COUNT
    });
  const resetCount = () =>
    dispatch({
      type: RESET_COUNT
    });
  return (
    <Provider value={{ count, incrementCount, decrementCount, resetCount }}>
      {children}
    </Provider>
  );
};
