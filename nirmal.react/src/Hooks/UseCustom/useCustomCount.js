import { useState } from "react";

function useCustomCount(initialCount = 0, value) {
  const [Count, setCount] = useState(initialCount);

  const Increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const Decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const Reset = () => {
    setCount(initialCount);
  };

  return [Count, Increment, Decrement, Reset];
}

export default useCustomCount;
