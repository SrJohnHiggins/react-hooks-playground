import React from "react";
import { useTitleInput } from "./useTitleInput";

const Form = () => {
  const [name, setName] = useTitleInput("");

  return (
    <div>
      <h3>Form Component</h3>
      <form onSubmit={e => formSubmit(e, name, setName)}>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
        />
        <button>Send</button>
      </form>
      <p>Name: {name}</p>
    </div>
  );
};

const formSubmit = (e, value, setValue) => {
  e.preventDefault();
  setValue("");
  setTimeout(() => {
    alert(`Success!!! Email was sent to ${value}`);
  }, 2000);
};

export default Form;
