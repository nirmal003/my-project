import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [Timer, setTimer] = useState(0);
  const intervalRef = useRef();

  //      we can stop the interval by using useRef

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Count - {Timer}</h1>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop Counting
      </button>
    </div>
  );
}

export default Timer;
