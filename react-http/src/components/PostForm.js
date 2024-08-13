import React, { Component } from "react";
import axios from 'axios';
import "./PostForm.css";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response=>{
        console.log(response);
        
    }).catch(error=>{
        console.log(error);
        
    })
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div id="thisisform">
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              value={userId}
              name="userId"
              placeholder="UserID"
              id=""
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Title"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              value={body}
              name="body"
              placeholder="Body"
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
