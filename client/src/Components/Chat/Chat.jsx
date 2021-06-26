import React, { useState } from 'react'
import Client from '../../Api'
import {
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import styles from "./styles.module.scss"
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

const DELETE_MESSAGES = gql`
mutation ($id:ID!){
	deleteMessage(id: $id){
    id
  }
}`;

const Messages = ({user})=>{
  const { data } = useQuery(GET_MESSAGES, {pollInterval:500});
  const [deleteMessage] = useMutation(DELETE_MESSAGES)
  if(!data){
    return "no value"
  }
    return (
      <>
      {data.chats.map(({id, user: messageUser, content, createdAt})=>(
        <div key={id}
          style={{
            display: "flex",
            justifyContent: user === messageUser ? "flex-end" : "flex-start",
            paddingBottom: "1em",
            width: "100%",
          }}
        >
          <div className={styles.userContainer}>
          {user !== messageUser && (
            <div className={styles.nomeUser}> 
              {messageUser.slice(0, 5).toUpperCase()} 
            </div>
          )}
          <span>{createdAt}</span>
          </div>
          <div
            style={{
              background: user === messageUser ? "green" : "lightgray",
              color: user === messageUser ? "white" : "black",
              padding:"1em",
              borderRadius: "1em",
              maxWidth: "100%",
            }}
            onDoubleClick={()=>{deleteMessage({variables: {id}})}}
          >
            <span>{content}</span>
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
    <Container className={styles.container} > 
      <Messages user={person.user} />
      <Row className={styles.row}>
        <Col xs={2} style={{padding: 0}}>
        <FormInput 
          className={styles.firstForm}
          label="User"
          value={person.user}
          onChange={(event) => setPerson({
            ...person,
            user: event.target.value
          })}
        />
        </Col>
        <Col xs={6}>
        <FormInput 
          className={styles.secondForm}
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
        <Col xs={4} style={{padding: 0}}>
          <Button className={styles.button}onClick={()=>onSend()}>
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