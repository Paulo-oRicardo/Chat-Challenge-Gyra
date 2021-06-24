import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const GET_MESSAGES = gql`
  query {
    chats {
      id
      user
      content
      createdAt
    }
  }`;
const Messages = ({user})=>{
  const { data } = useQuery(GET_MESSAGES);
  if(!data){
    return "no value"
  }
    return JSON.stringify(data)
}
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const Chat = () => {
  return (
    <div> alo <Messages user="Abc" /></div>
  )
}
 const Apollo = () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
) 
export default Apollo