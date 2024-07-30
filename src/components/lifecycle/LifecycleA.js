import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";




class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ram",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }


shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate');
    return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Lifecycle A getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate(){
    console.log('Lifecycle A componentDidUpdate');
}

changeState=()=>{
    this.setState({
        name:'Ram'
    })
}

  render() {
    console.log("Lifecycle A render");
    return <div>Lifecycle A
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
    </div>;
    
  }
}

export default LifecycleA;
