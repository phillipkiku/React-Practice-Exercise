import { useState } from "react";
import React from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>{count} Value</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
