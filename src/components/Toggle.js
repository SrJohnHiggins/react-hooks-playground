import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <h3>Toggle Component</h3>
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
    </div>
  );
};

export default Toggle;
