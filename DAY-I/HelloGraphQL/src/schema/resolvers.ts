import { Author, authorsData } from "../models/authors.model.js";
import { BookModel, booksData } from "../models/books.model.js";
export const resolvers = {
  Query: {
    books: (): BookModel[] => booksData.books,
    book: (_, { id }: { id: number }): BookModel =>
      booksData.books.find(b => b.id === +id),
    authors: (): Author[] => authorsData.authors,
    author: (_, { id }: { id: number }): Author =>
      authorsData.authors.find(a => a.id === +id),
  },
};
