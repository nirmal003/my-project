import React from "react";
import ChildFunc from "./ChildFunc";

function ParentFunc() {
  const GetData = (data) => {
    console.log("get the data from child", data);
  };

  return (
    <div>
      <ChildFunc Submit={GetData} />
    </div>
  );
}

export default ParentFunc;
