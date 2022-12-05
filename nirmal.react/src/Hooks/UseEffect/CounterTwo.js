import React, { useState, useEffect } from "react";

function CounterTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("hello");

    document.title = ` You clicked ${count} times`;

    //   only if any change in the count then useEffect will Execute
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default CounterTwo;
