import React, { useState } from "react";

function ArrayUseState() {
  const [Items, setItems] = useState([]);

  const randomNumber = () => {
    setItems([
      ...Items,
      {
        id: Items.length,
        value: Math.floor(Math.random() *  10 + 1),
      },
    ]);
  };

  return (
    <div>
      <button onClick={randomNumber}>Add Random Number</button>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayUseState;
