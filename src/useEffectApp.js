import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-wrapper">
      <h1>React Hooks</h1>
      {data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
