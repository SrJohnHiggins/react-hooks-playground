import React, { useReducer, useEffect } from "react";

// the reducer function takes two arguments the currentState and the action
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        count: state.count - 1
      };

    case "MULTIPLY":
      return {
        count: state.count * action.value
      };

    case "RESET":
      return {
        count: 0
      };

    default:
      return state;
  }
};

const initialState = {
  count: Number(window.localStorage.getItem("counter"))
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.localStorage.setItem("counter", state.count);
  }, [state.count]);

  return (
    <div>
      <h3>Counter with userReducer Component</h3>
      <p>Current count is: {state.count} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "MULTIPLY", value: 100 })}>
        x10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterWithReducer;
