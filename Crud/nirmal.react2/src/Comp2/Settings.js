import React from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>This is Settings Page</h1>
      <button onClick={() => Navigate("/")}>Go to home page</button>
    </div>
  );
}

export default Settings;
