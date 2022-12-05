//      we can ignore the performance lag/delay

import React, { useMemo, useState } from "react";

function Count() {
  const [CountOne, setCountOne] = useState(0);
  const [CountTwo, setCountTwo] = useState(0);

  const increaseOne = () => {
    setCountOne(CountOne + 1);
  };

  const increaseTwo = () => {
    console.log("hello");
    setCountTwo(CountTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("hi");
    let i = 0;
    while (i < 2000) i++;
    return CountOne % 2 === 0;
  }, [CountOne]);

  return (
    <div>
      <button onClick={increaseOne}>CountOne - {CountOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={increaseTwo}>CountTwo - {CountTwo}</button>
    </div>
  );
}

export default Count;
