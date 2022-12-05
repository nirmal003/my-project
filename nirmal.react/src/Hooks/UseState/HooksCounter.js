import React, { useState } from "react";

function HooksCounter() {
  const initialState = 0;

  const [Count, setState] = useState(initialState);

  const IncreaseFive = () => {
    for (let i = 0; i < 5; i++) {
      setState((prevCount) => prevCount + 1); //    use this method also
    }

    // setState(Count + 5); //    this is easy method
  };

  return (
    <div>
      <h2> Count : {Count}</h2>
      <button onClick={() => setState(Count + 1)}>Increase count</button>
      <button onClick={() => setState(Count - 1)}>Decrease count</button>
      <button onClick={() => setState(initialState)}>Reset count</button>
      <button onClick={IncreaseFive}>Increase 5 count</button>
    </div>
  );
}

export default HooksCounter;
