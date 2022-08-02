require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const typeDefs = require("./typeDefs/index");
const resolvers = require("./resolvers/index");
const connectDB = require("./utils/connectDB");

const app = express();
const httpServer = createServer(app);

async function start() {
  try {
    await connectDB(process.env.MONGODB_URL);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => {
        return { req };
      },
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(process.env.PORT, () =>
      console.log(`Running on port ${process.env.PORT}...`)
    );
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
}

start();
