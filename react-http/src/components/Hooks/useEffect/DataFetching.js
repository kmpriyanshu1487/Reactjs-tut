import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setidFrombuttonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);

        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setidFrombuttonClick(id);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the value"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>
        <h1>{post.title}</h1>
      </div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
