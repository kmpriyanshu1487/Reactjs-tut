import React, { Component } from "react";
import axios from "axios";

class PosiList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg:''
      
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts,errorMsg } = this.state; 
    return (
      <div>
        List of Posts
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))
        ) : (
          <div>No posts available.</div>
          
        )}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PosiList;
