import React from "react";

import Form from "./components/Form/Form.js";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Ref from "./components/Ref";

const App = () => {
  return (
    <div className="main-wrapper">
      <h1>React Hooks</h1>
      <Form />
      <Toggle />
      <Counter />
      <Ref />
    </div>
  );
};

export default App;
