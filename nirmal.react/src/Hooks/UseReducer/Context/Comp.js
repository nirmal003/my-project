import React, { useReducer } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";

export const Counter = React.createContext();
export const CounterTwo = React.createContext();
export const CounterThree = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;

    case "decrease":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function Comp() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  const [countThree, dispatchThree] = useReducer(reducer, initialState);

  return (
    <Counter.Provider value={{ Count: count, Dispatch: dispatch }}>
      <CounterTwo.Provider value={{ Count: countTwo, Dispatch: dispatchTwo }}>
        <CounterThree.Provider
          value={{ Count: countThree, Dispatch: dispatchThree }}
        >
          <div>
            Comp
            <CompA />
            <CompB />
            <CompC />
          </div>
        </CounterThree.Provider>
      </CounterTwo.Provider>
    </Counter.Provider>
  );
}

export default Comp;
