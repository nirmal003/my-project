import React, { useContext } from "react";
import { CounterThree } from "./Comp";

function CompF() {
  const context = useContext(CounterThree);
  return (
    <div>
      CompF
      <h2>Count(3) - {context.Count}</h2>
      <button onClick={() => context.Dispatch("increase")}>Increase</button>
      <button onClick={() => context.Dispatch("decrease")}>Decrease</button>
      <button onClick={() => context.Dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompF;
