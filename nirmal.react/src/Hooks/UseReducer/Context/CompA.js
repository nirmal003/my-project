import React, { useContext } from "react";
import { Counter } from "./Comp";

function CompA() {
  const context = useContext(Counter);
  return (
    <div>
      CompA
      <h2>Count(1) - {context.Count}</h2>
      <button onClick={() => context.Dispatch("increase")}>Increase</button>
      <button onClick={() => context.Dispatch("decrease")}>Decrease</button>
      <button onClick={() => context.Dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompA;
