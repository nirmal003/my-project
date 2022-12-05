import React from "react";

function Arraymap() {
  const names = ["Nirmal", "Mahesh", "Arun", "Surya"];

  //   in this method dont have a unique key "prop"

  const namelist = names.map((name) => <h1>{name}</h1>);

  return <div>{namelist}</div>;
}

export default Arraymap;
