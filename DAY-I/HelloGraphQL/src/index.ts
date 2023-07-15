import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

#root-query
type Query{
    book:Book
}

type Book{
  id:ID!
  title:String
  epub:Boolean
  author:String
  publication:String
}
`;

const resolvers = {
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at ${url}`);
