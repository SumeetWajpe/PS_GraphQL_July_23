import { booksData } from "../models/books.model.js";
export const resolvers = {
    Query: {
        books: () => booksData.books,
        book: (_, args) => booksData.books.find(b => b.id == args.id),
    },
};
