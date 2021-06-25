const { GraphQLServer, PubSub } = require("graphql-yoga");
const dotenv = require("dotenv");
const path = require("path");
const resolvers = require("../controllers/resolver");
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexão com mongodb, realizada com sucesso!");
  })
  .catch((erro) => {
    console.log(erro + "Erro: Conexão com mongodb não realizada com sucesso!");
  });
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers,
  context: { pubsub },
});

server.start(process.env.PORT || 4000, () =>
  console.log("Server is running on localhost:4000")
);
