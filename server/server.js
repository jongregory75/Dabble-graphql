//HTTP Server
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
//typeDefs / resolvers for backend
const { typeDefs, resolvers } = require("./schemas");
const app = express();
const db = require("./config/connection");
//graphql port setting
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
