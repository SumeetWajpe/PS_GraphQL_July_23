export const resolvers = {
    Query: {
        book: () => {
            return {
                id: 1,
                title: "Wings Of Fire",
                epub: true,
                author: "Dr. APJ Abdul Kalam",
                publication: "Jaico",
            };
        },
    },
};
