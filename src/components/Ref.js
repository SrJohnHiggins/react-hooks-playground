import React, { useRef } from "react";

const Ref = () => {
  const ref = useRef();
  return (
    <div>
      <h3>useRef Component</h3>
      <form onSubmit={e => e.preventDefault()}>
        <p ref={ref}>This will be styled!</p>
        <button
          type="submit"
          onClick={() => {
            ref.current.classList.add("useRefStyled");
            console.log(ref.current);
          }}
        >
          Style me!
        </button>
      </form>
    </div>
  );
};

export default Ref;
