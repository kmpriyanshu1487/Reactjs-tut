import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ram",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedstaticFromProps(props, state) {
    console.log("LifecycleB getDerivedstaticFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Lifecycle B getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate(){
    console.log('Lifecycle B componentDidUpdate');
}
  render() {
    console.log("Lifecycle B render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
