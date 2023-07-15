import { AuthorModel } from "../models/authors.model.js";
import { BookModel } from "../models/books.model.js";
export const resolvers = {
  Query: {
    authors: async () => await AuthorModel.find({}), // Select * from coll
    author: async (_, { id }: { id: number }) =>
      await AuthorModel.findOne({ id: +id }),
  },
};
