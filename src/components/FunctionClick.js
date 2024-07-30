import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("btn clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default FunctionClick;
