import React, { useState } from 'react'
import Client from './Api'
import {
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import {Container, Row, Col, FormInput,Button} from  'shards-react'

const GET_MESSAGES = gql`
  query{
  chats{
    id 
    user
    content
    createdAt
  }
  }`;

const POST_MESSAGES = gql`
mutation ($user:String!, $content: String!){
	createChat( user: $user, content: $content){
    content
  }
}`;
const Messages = ({user})=>{
  const { data } = useQuery(GET_MESSAGES, {pollInterval:500});
  if(!data){
    return "no value"
  }
    return (
      <>
      {data.chats.map(({id, user: messageUser, content})=>(
        <div 
          style={{
            display: "flex",
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
            paddingBottom: "1em",
          }}
        >
          {user !== messageUser && (
            <div
              style={{
                height:50,
                width:50,
                marginRight:"0.5em",
                border: "2px solid #e5e6ea",
                borderRadius:25,
                textAlign:"center",
                fontSize:'18px',
                paddingTop:8,
              }}
            >
              {messageUser.slice(0, 2).toUpperCase()}
            </div>
          )}
          
          <div
            style={{
              background: user === messageUser ? "green" : "lightgray",
              color: user === messageUser ? "white" : "black",
              padding:"1em",
              borderRadius: "1em",
              maxWidth: "60%",
            }}
          >
            {content}
          </div>
        </div>
      ))}
      </>
    )
}

const Chat = () => {
  const [person, setPerson] = useState({
    user:'Abc',
    content:'',
  })
  const [postMessage] = useMutation(POST_MESSAGES);
  const onSend =() =>{
    if(person.content.length > 0){  
       postMessage({
         variables: person,
       })
     } 
     setPerson({
       ...person,
       content:'',
     })
   }
 
  return (
    <Container> 
      <Messages user={person.user} />
      <Row>
        <Col xs={2} style={{padding: 0}}>
        <FormInput 
          label="User"
          value={person.user}
          onChange={(event) => setPerson({
            ...person,
            user: event.target.value
          })}
        />
        </Col>
        <Col xs={8}>
        <FormInput 
          label="Content"
          value={person.content}
          onChange={(event) => setPerson({
            ...person,
            content: event.target.value
          })}
          onKeyUp={(event)=>{
            if (event.keyCode === 13){
              onSend();
            }
          }}
        />
        </Col>
        <Col xs={2} style={{padding: 0}}>
          <Button onClick={()=>onSend()}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
   
  )}
 const Apollo = () => (
  <ApolloProvider client={Client}>
    <Chat />
  </ApolloProvider>
) 
export default Apollo