import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingOne() {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  const [Post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/2`)
      .then((res) => {
        console.log("hi");

        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
        setPost({});
        setError("Something went wrong...");
      });

    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div>
      <h1> {Loading ? `Fetching data from server.... ` : Post.title}</h1>
      <h1>{Error ? `Something went wrong...` : ""}</h1>
    </div>
  );
}

export default FetchingOne;
