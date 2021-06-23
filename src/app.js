import React from 'react';
// import {useContext}from 'react';
// import listProvider from './components/todo/context/manegerContext.js';
import ToDoConnect from './components/todo/todo-connected.js';

export default function App(){

  return(
    <>
     {/* <listProvider> */}
        {/* <ToDo /> */}
        <ToDoConnect/>
      {/* </listProvider> */}
    </>
  )
}
