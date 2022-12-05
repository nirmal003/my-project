import React, { useState, useEffect } from "react";

function CountInterval() {
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCount(Count + 1);
    }, 1000);

    return () => {
      console.log("hi");
      clearInterval(Interval);
    };
  }, [Count]); //     dependency is optional but its good way to paratice

  return (
    <div>
      <h2>{Count}</h2>

      {/* <button onClick={() => clearInterval(Interval)}>Stop Counting</button> */}
    </div>
  );
}

export default CountInterval;
