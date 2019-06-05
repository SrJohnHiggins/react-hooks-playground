import React, { useState, useEffect } from "react";

const Counter = () => {
  const initialValue = Number(window.localStorage.getItem("count"));
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    window.localStorage.setItem("count", count);
    console.log(`Current count is to ${count}`);
  }, [count]);

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
