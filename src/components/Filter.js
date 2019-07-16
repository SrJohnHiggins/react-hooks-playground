import React, { useState, useEffect } from "react";
import { usersData } from "../lib/users.json";

const doFilter = (query, filter) => user => {
  return user[filter].toLowerCase().includes(query);
};

const FilterApp = ({ title }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 2000);
  }, [users]);

  const fetchUsers = () => {
    setLoading(true);
    setUsers([]);
  };

  const usersFiltered = users.filter(doFilter(query, filter));

  return (
    <div style={{ minHeight: "90vh" }}>
      <h1>{title}</h1>
      <div>
        <button onClick={fetchUsers}>refetch users</button>
      </div>
      <select onChange={e => setFilter(e.target.value)}>
        <option value="name">name</option>
        <option value="location">location</option>
      </select>
      <input placeholder="filter" type="text" onChange={handleChange} />
      {loading && <p>Loading...</p>}
      {usersFiltered.map(u => (
        <User {...u} key={u.name} />
      ))}
    </div>
  );
};

const User = ({ name, age, location }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default FilterApp;
