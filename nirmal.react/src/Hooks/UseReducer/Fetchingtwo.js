import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  Loading: true,
  Post: {},
  Error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        Loading: false,
        Post: action.payload,
        Error: "",
      };

    case "error":
      return {
        Loading: false,
        Post: {},
        Error: "Something went wrong...",
      };

    default:
      return state;
  }
};

function Fetchingtwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/9`)
      .then((res) => {
        console.log("hi");
        dispatch({ type: "success", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "error" });
      });

    // return () => {
    //     cleanup
    // };
  }, []);

  return (
    <div>
      <h1>
        {state.Loading ? `Fetching data from server.... ` : state.Post.title}
      </h1>
      <h1>{state.Error ? `Something went wrong...` : ""}</h1>
    </div>
  );
}

export default Fetchingtwo;
