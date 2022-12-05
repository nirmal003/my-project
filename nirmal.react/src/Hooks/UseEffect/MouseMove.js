import React, { useState, useEffect } from "react";

function MouseMove() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  //      both event also some function

  const logMousePosition = (e) => {
    console.log("MouseEvent");

    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffet call");

    // window.onmousemove = (e) => {
    //   console.log("MouseEvent");

    //   setX(e.clientX);
    //   setY(e.clientY);
    // };

    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("EventRemoved");

      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      X - {X} Y - {Y}
    </div>
  );
}

export default MouseMove;
