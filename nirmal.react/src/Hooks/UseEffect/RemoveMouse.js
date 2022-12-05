import React, { useState } from "react";
import MouseMove from "./MouseMove";

function RemoveMouse() {
  const [Display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!Display)}>Toggle btn</button>
      {/* {Display ? <MouseMove /> : ""} */}
      {Display && <MouseMove />}
    </div>
  );
}

export default RemoveMouse;
