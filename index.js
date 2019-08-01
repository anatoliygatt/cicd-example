const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const { User } = require("./models");

mongoose.connect("mongodb://localhost:27017", {
  dbName: "cicd-example",
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  context: () => {
    return { models: { User } };
  }
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 3000);
