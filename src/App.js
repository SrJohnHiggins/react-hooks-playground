import React from "react";

import Form from "./components/Form";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <div className="main-wrapper">
      <h1>React Hooks</h1>
      <Form />
      <Toggle />
      <Counter />
    </div>
  );
};

export default App;
