import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Author,
  useGetAuthorsQuery,
  useLazyGetAuthorsQuery,
} from "./features/api/authors.api";

function App() {
  const { data, isLoading } = useGetAuthorsQuery({});
  // const [callOnButtonClick, { isLoading, data }] = useLazyGetAuthorsQuery();
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <div className="App">
      <ul>
        {data?.authors?.map((author: Author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
