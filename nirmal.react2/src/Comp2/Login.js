import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>This is login Page</h1>
      <button onClick={() => Navigate("/")}>Go to home page</button>
    </div>
  );
}

export default Login;
