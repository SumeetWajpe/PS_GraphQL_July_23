import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
import express from "express";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
await server.start();
// Specify the path where we'd like to mount our server
//highlight-start
app.use("/graphql", cors(), // inter domain communication
pkg.json(), // read json data from client
expressMiddleware(server, {
    context: async ({ req, res }) => {
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(" ")[1];
            // console.log(token);
            return { token };
        }
        else {
            console.log("No Token Found");
            return { token: "" };
        }
    },
}));
app.listen(4000, () => {
    console.log("Apollo Server running at http://localhost:4000/graphql");
});
