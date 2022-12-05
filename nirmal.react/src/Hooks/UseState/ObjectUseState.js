import React, { useState } from "react";

function ObjectUseState() {
  const [fullName, setfullName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        type="text"
        value={fullName.firstName}
        onChange={(e) =>
          setfullName({ ...fullName, firstName: e.target.value })
        }
      />

      <input
        type="text"
        value={fullName.lastName}
        onChange={(e) => setfullName({ ...fullName, lastName: e.target.value })}
      />

      <h2>firstName is {fullName.firstName} </h2>
      <h2>lastName is {fullName.lastName} </h2>
      <h2>{JSON.stringify(fullName)}</h2>
    </div>
  );
}

export default ObjectUseState;
