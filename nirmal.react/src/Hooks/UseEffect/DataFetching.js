import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [Post, setPost] = useState([]);
  const [Id, setId] = useState(1);
  const [IdfromBtn, setIdfromBtn] = useState(1);

  // change Id input to btn

  const changeInput = () => {
    setIdfromBtn(Id); //          it will store in IdfromBtn
  };

  useEffect(() => {
    //   get data from API(fetch data)

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
      .then((res) => {
        console.log(res); //    Promise is reslove
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err); //    promise is rejected
      });
  }, [IdfromBtn]);

  //   dependency array will give new data from its value

  return (
    <div>
      <input type="text" value={Id} onChange={(e) => setId(e.target.value)} />
      <br />
      <br />
      {"setPost----> into---> Id"}
      <br />
      <br />
      {"Id----> into----> setIdfromBtn"}
      <br />
      <br />
      {"setIdfromBtn----> into----> IdfromBtn"}
      <br />
      <br />

      <button type="button" onClick={changeInput}>
        Fetch Post
      </button>

      <h2>{Post.title}</h2>

      {/* <ul>
        {Post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
