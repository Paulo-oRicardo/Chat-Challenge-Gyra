const dotenv = require("dotenv");
const { GraphQLServer, PubSub } = require("graphql-yoga");
const path = require("path");
const resolvers = require("../controllers/resolver");
const connectDB = require("./bd");
dotenv.config();

connectDB();
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers,
  context: { pubsub },
});

server.start(process.env.PORT || 4000, () =>
  console.log("Server is running on localhost:4000")
);
