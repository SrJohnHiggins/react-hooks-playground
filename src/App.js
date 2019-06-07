import React, { useState, createContext } from "react";

import Form from "./components/Form/Form.js";
import Counter from "./components/Counter";
import CounterWithReducer from "./components/CounterWithReducer";
import Toggle from "./components/Toggle";
import Ref from "./components/Ref";
import Memo from "./components/Memo";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(false);

  const logUser = () => {
    setUser(user === true ? false : true);
  };

  return (
    <UserContext.Provider value={{ user, logUser }}>
      <div className="main-wrapper">
        <h1>React Hooks</h1>
        <Memo />
        <Form />
        <CounterWithReducer />
        <Counter />
        <Toggle />
        <Ref />
      </div>
    </UserContext.Provider>
  );
};

export default App;
