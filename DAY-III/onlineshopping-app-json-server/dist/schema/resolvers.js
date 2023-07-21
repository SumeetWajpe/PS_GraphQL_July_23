import axios from "axios";
export const resolvers = {
    Query: {
        authors: async () => {
            let response = await axios.get("http://localhost:3500/authors");
            return response.data;
        },
    },
};
