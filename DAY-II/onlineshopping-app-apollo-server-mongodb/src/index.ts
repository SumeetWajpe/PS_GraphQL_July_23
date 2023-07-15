import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import pkg from "body-parser";
import express from "express";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";
import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://sumeetwajpe:TestMongodb@123@cluster0.xd8xtse.mongodb.net/onlineshoppingdb",
);
mongoose.connection.on("open", () => {
  console.log("Connected to onlineshoppingDB !");
});
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
app.use(
  "/graphql",
  cors<cors.CorsRequest>(), // inter domain communication
  pkg.json(), // read json data from client
  expressMiddleware(server),
);

app.listen(4000, () => {
  console.log("Apollo Server running at http://localhost:4000/graphql");
});
