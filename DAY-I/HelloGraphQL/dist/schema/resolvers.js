import { authorsData } from "../models/authors.model.js";
import { booksData } from "../models/books.model.js";
export const resolvers = {
    Query: {
        books: () => booksData.books,
        book: (_, { id }) => booksData.books.find(b => b.id === +id),
        authors: () => authorsData.authors,
        author: (_, { id }) => authorsData.authors.find(a => a.id === +id),
    },
    Book: {
        author: parent => {
            return authorsData.authors.find(a => a.id == parent.authorId);
        },
    },
};
