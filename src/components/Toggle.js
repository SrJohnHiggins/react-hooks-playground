import React, { useState, useContext } from "react";
import { UserContext } from "../App.js";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const userInfo = useContext(UserContext);

  return (
    <div>
      <h3>Toggle Component</h3>

      {userInfo.user ? (
        <>
          <button onClick={() => userInfo.logUser()}>Logout</button>
          <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
          {isToggled ? (
            <span style={{ fontSize: "2rem" }} role="img" aria-label="smiley">
              😀
            </span>
          ) : (
            <span style={{ fontSize: "2rem" }} role="img" aria-label="thinker">
              🙄
            </span>
          )}
        </>
      ) : (
        <>
          <button onClick={() => userInfo.logUser()}>Login</button>
          <p>You must be logged in to use the toggle</p>
        </>
      )}
    </div>
  );
};

export default Toggle;
