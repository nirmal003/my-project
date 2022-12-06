import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>This is Logout Page</h1>
      <button onClick={() => Navigate("/")}>Go to home page</button>
    </div>
  );
}

export default Logout;
