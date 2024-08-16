import React, { useState } from "react";
import "./HookCounterTwo.css";
function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div id="main">
      <div className="count">Count:{count}</div>
      <div className="container">
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
