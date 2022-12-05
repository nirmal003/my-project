import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={() => props.call("Mahesh")}>I'm child </button>
    </div>
  );
}

export default Child;
