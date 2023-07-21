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
    Book: {
        author: async (parent) => {
            let response = await axios.get(`http://localhost:3500/authors/${parent.authorId}`);
            return response.data;
        },
    },
    Mutation: {
        // without input type
        // createAuthor: async (_, { id, name, age, noOfBooks }) => {
        //   let response = await axios.post("http://localhost:3500/authors", {
        //     id,
        //     name,
        //     age,
        //     noOfBooks,
        //   });
        //   console.log(response);
        //   return `Author with id : ${id} inserted successfully !`;
        // },
        createAuthor: async (_, { input: { id, name, age, noOfBooks } }) => {
            let response = await axios.post("http://localhost:3500/authors", {
                id,
                name,
                age,
                noOfBooks,
            });
            return `Author with id : ${id} inserted successfully !`;
        },
    },
};
