import React from "react";
import useCustomCount from "./useCustomCount";

function CustomTwo() {
  const [Count, Increment, Decrement, Reset] = useCustomCount(0, 1);

  return (
    <div>
      <h1>Count - {Count}</h1>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Increase</button>
      <button onClick={Reset}>Increase</button>
    </div>
  );
}

export default CustomTwo;
