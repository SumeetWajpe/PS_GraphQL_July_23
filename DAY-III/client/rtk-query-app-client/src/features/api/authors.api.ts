import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { gql } from "graphql-request";

export interface Author {
  id: number;
  age: number;
  name: string;
  noOfBooks: number;
}

export interface GetAuthorsResponse {
  authors: Author[];
}

export interface AuthorResponse {
  author: Author;
}

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "http://localhost:4000/graphql",
  }),
  endpoints: builder => ({
    getAuthors: builder.query<GetAuthorsResponse, {}>({
      query: () => ({
        document: gql`
          query GetAllAuthors {
            authors {
              id
              name
              age
              noOfBooks
            }
          }
        `,
      }),
    }),
    getAuthorById: builder.query<Author, string>({
      query: id => ({
        document: gql`
          query GetAuthorById {
            author(id: ${id}) {
              id
              name
              age
              noOfBooks
            }
          }
        `,
      }),
      transformResponse: (response: AuthorResponse) => response?.author,
    }),
  }),
});

export const { useGetAuthorsQuery,useLazyGetAuthorsQuery, useGetAuthorByIdQuery } = api;
