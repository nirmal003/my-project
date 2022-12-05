import React from "react";

const Hello = () => {
  //   this is jsx method

  // return (
  // 	<div id="hello" className="hello">
  // 		<h1>Nirmal Raj</h1>
  // 	</div>
  // );

  //   this is react method

  return React.createElement(
    "div",
    { id: "hello", className: "hello" },
    React.createElement("h1", null, "Nirmal Raj")
  );
};

export default Hello;
