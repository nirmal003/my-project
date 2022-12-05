import React, { useContext } from "react";
import { CounterTwo } from "./Comp";

function CompD() {
  const context = useContext(CounterTwo);

  return (
    <div>
      CompD
      <h2>Count(2) - {context.Count}</h2>
      <button onClick={() => context.Dispatch("increase")}>Increase</button>
      <button onClick={() => context.Dispatch("decrease")}>Decrease</button>
      <button onClick={() => context.Dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompD;
