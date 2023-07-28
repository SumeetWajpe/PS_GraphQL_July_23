import React, { useEffect } from "react";
import { useGetAuthorByIdQuery } from "./features/api/authors.api";

export default function GetAuthorById() {
  let { isLoading, data:author } = useGetAuthorByIdQuery("2");
  useEffect(() => {
    console.log(author);
  }, [author]);
  return <div>{author?.name}</div>;
}
