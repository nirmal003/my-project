//      complex reducer

import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 100, //     here we use multiple state method like object
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, firstCount: state.firstCount + action.value };

    case "decrease":
      return { ...state, firstCount: state.firstCount - action.value };

    case "increaseFive":
      return { ...state, firstCount: state.firstCount + action.value };

    case "decreaseFive":
      return { ...state, firstCount: state.firstCount - action.value };

    case "reset1":
      return { ...state, firstCount: state.firstCount - state.firstCount };

    case "increase2":
      return { ...state, secondCount: state.secondCount + action.value };

    case "decrease2":
      return { ...state, secondCount: state.secondCount - action.value };

    case "increaseFive2":
      return { ...state, secondCount: state.secondCount + action.value };

    case "decreaseFive2":
      return { ...state, secondCount: state.secondCount - action.value };

    case "reset2":
      return { ...state, secondCount: 100 };

    default:
      return state;
  }
};

function CountTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count - {count.firstCount}</h2>
      <button onClick={() => dispatch({ value: 1, type: "increase" })}>
        Increase
      </button>
      <button onClick={() => dispatch({ value: 1, type: "decrease" })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ value: 5, type: "increaseFive" })}>
        IncreaseFive
      </button>
      <button onClick={() => dispatch({ value: 5, type: "decreaseFive" })}>
        DecreaseFive
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset1" })}>Reset1</button>

      <h2>Count - {count.secondCount}</h2>

      <button onClick={() => dispatch({ value: 1, type: "increase2" })}>
        Increase2
      </button>
      <button onClick={() => dispatch({ value: 1, type: "decrease2" })}>
        Decrease2
      </button>
      <button onClick={() => dispatch({ value: 5, type: "increaseFive2" })}>
        IncreaseFive
      </button>
      <button onClick={() => dispatch({ value: 5, type: "decreaseFive2" })}>
        DecreaseFive
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset2" })}>Reset2</button>
    </div>
  );
}

export default CountTwo;
