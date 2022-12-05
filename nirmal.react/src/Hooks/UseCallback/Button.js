import React from "react";

function Button({ Click, children }) {
  console.log(`Rendering Button - ${children}`);

  return <button onClick={Click}>{children}</button>;
}

export default React.memo(Button);
