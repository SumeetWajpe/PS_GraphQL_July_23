import { AuthorModel } from "../models/authors.model.js";
export const resolvers = {
    Query: {
        authors: async () => await AuthorModel.find({}),
        author: async (_, { id }) => await AuthorModel.findOne({ id: +id }),
    },
};
