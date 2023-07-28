import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetAuthorsQuery } from "./features/api/authors.api";

function App() {
  const { data, isLoading } = useGetAuthorsQuery({});
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="App">
      <ul>
        {data?.authors?.map(author => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
