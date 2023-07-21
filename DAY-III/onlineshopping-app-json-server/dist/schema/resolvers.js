import axios from "axios";
export const resolvers = {
    Query: {
        authors: async () => {
            let response = await axios.get("http://localhost:3500/authors");
            return response.data;
        },
        author: async (_, { id }) => {
            let response = await axios.get(`http://localhost:3500/authors/${id}`);
            return response.data;
        },
        books: async () => {
            let response = await axios.get("http://localhost:3500/books");
            return response.data;
        },
        book: async (_, { id }) => {
            let response = await axios.get(`http://localhost:3500/books/${id}`);
            return response.data;
        },
    },
};
