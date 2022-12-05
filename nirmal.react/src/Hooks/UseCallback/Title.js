import React from "react";

function Title() {
  console.log("Rendreing title");

  return (
    <div>
      <h2>Use CallBack Hook</h2>
    </div>
  );
}

export default React.memo(Title);
