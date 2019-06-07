import React, { useState, useMemo } from "react";

const Memo = () => {
  const [text, setText] = useState("");

  const reverseText = text => {
    return [...text].reverse().join("");
  };

  const textReversed = useMemo(() => reverseText(text), [text]);

  return (
    <div>
      <h3>useMemo Component</h3>
      <input
        type="text"
        placeholder="This will reverse"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <span>{textReversed}</span>
    </div>
  );
};

export default Memo;
