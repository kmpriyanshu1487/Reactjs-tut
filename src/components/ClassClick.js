import React, { Component } from "react";

export class ClassClick extends Component {
  classHandler() {
    console.log("Button Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.classHandler}>click me</button>
      </div>
    );
  }
}

export default ClassClick;
