const { GraphQLServer } =  require('graphql-yoga');
const path = require('path')
const resolvers =require('../controllers/resolver')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(()=>{
   console.log("Conexão com mongodb, realizada com sucesso!")
}).catch(erro =>{
   console.log(erro+"Erro: Conexão com mongodb não realizada com sucesso!")
});

const server = new GraphQLServer({
  typeDefs:path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start(() => console.log('Server is running on localhost:4000'))
