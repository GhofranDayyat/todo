import React from 'react';
// import {useContext}from 'react';
import ListProvider from './context/manegerContext.js';
import ToDoConnect from './components/todoList/todo-connected.js';
import Auth from './components/auth/auth'
import NavBar from './components/Nav/nav.js';
import {Container} from 'react-bootstrap';
// import AuthProvider from './context/authContext.js';

export default function App(){

  return(
    <>
        {/* <ToDo /> */}
        {/* <AuthProvider> */}
          {/* <ListProvider> */}
              <NavBar/>
              <Auth capability="read">
                <ToDoConnect/>
                <h1>hhhhhh</h1>
              </Auth>
              <Auth capability="guest">
                <Container >
                    <h1>TO Do List Manager</h1>
                    <h2>SignUp or SignIn </h2>
                </Container>
              </Auth> 
          {/* </ListProvider>  */}
        {/* </AuthProvider> */}
        </>
  )
}
