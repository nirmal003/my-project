import React, { useCallback } from "react";

function Counter({ text, Count }) {
  console.log(`Rendering Counter - ${text}`);

  return (
    <div>
      {text} - {Count}
    </div>
  );
}

export default React.memo(Counter);
