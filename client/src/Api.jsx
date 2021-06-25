import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
// import { WebSocketLink } from '@apollo/client/link/ws';

// const link = new WebSocketLink({
//   uri: 'ws://chat-challenge-gyra.herokuapp.com//',
//   options: {
//     reconnect: true
//   }
// });
const client = new ApolloClient({
  uri: 'https://chat-challenge-gyra.herokuapp.com/',
  cache: new InMemoryCache()
});

export default client;