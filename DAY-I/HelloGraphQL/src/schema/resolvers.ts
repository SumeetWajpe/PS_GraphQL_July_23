import { AuthorModel, authorsData } from "../models/authors.model.js";
import { BookModel, booksData } from "../models/books.model.js";
export const resolvers = {
  Query: {
    books: (): BookModel[] => booksData.books,
    book: (_, { id }: { id: number }): BookModel => {
      console.log("Within Book resolver (Root Query)");
      return booksData.books.find(b => b.id === +id);
    },
    authors: (): AuthorModel[] => authorsData.authors,
    author: (_, { id }: { id: number }): AuthorModel =>
      authorsData.authors.find(a => a.id === +id),
  },
  Book: {
    author: (parent: BookModel): AuthorModel => {
      console.log("Within author resolver (Book Type)");
      return authorsData.authors.find(a => a.id == parent.authorId);
    },
  },
};
