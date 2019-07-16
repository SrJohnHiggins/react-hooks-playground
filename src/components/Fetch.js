import React, { useState, useEffect } from "react";
import axios from "axios";

function debounce(func, time) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, time);
  };
}

const FetchApp = ({ title }) => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(res.data.hits);
    };
    fetchData();
  }, [query]);

  const handleChange = debounce(value => setQuery(value), 1000);

  return (
    <div style={{ minHeight: "40vh" }}>
      <h1>{title}</h1>
      <input
        placeholder="type your search"
        type="text"
        onChange={e => handleChange(e.target.value)}
      />
      {query &&
        hits.map(hit => (
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        ))}
    </div>
  );
};

export default FetchApp;
