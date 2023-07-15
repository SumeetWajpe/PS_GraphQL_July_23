import { booksData } from "../models/books.model.js";
export const resolvers = {
  Query: {
    books: () => booksData.books,
  },
};
