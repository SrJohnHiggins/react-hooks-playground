import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => (
  <div>
    <Loading>
      {({ isLoading, email, fetch }) => (
        <>
          {isLoading && <p>loading...</p>}
          <Data email={email} />
          <Button fetch={fetch} />
        </>
      )}
    </Loading>
  </div>
);

const Data = ({ email }) => (
  <p>{email.replace("example.com", "juliosoto.dev")}</p>
);

const Button = ({ fetch }) => <button onClick={fetch}>fetch</button>;

const Loading = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");

  const fetchData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    setEmail(response.data.results[0].email);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const obj = {
    isLoading,
    email,
    fetch: async () => {
      fetchData();
    }
  };
  return <div>{props.children(obj)}</div>;
};

export default App;
