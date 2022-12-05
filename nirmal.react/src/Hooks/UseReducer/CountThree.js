//          Mutiple usereducer

//       count2 and count3 both also same

import React, { useReducer } from "react";

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

function CountThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>
        <h2>Count(2) - {countTwo}</h2>
        <button onClick={() => dispatchTwo("increase")}>Increase</button>
        <button onClick={() => dispatchTwo("decrease")}>Decrease</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CountThree;
