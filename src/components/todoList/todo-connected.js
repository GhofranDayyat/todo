import React, { useContext, useEffect, useState } from 'react';
import TodoList from './list.js';
import TodoForm from './form.js';
import useAjax from '../../hooks/useAjax.js';
import './todo.scss';
import  {ListContext}  from '../../context/manegerContext';
import {AuthContext} from '../../context/authContext.js';
import { If, Then } from 'react-if';
import { Button } from 'bootstrap';
import { Form } from 'react-bootstrap';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
const [list,setList,hideCompleted,toggleComplete, post, get, put, deleted]=useAjax(todoAPI)
const listContext=useContext(ListContext)
const authContext = useContext(AuthContext) // to access context in func .... in class use static property 

const [username , setUsername] = useState('');
const [password , setPassword] = useState('')

useEffect(() =>{document.title = `${list.filter((item) => !item.complete).length}`},[list]); //happen when list state change
useEffect(get,[]) //happen with initial render
// useEffect(get,[listContext.sorting]);
console.log(listContext);

const handelRegester=(e)=>{
  e.preventDefault();

}

const handelChange=(e)=>{
  
}
// setList(list)
  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>
      <section className="todo">
        <div>
          <TodoForm 
          hideComplet ={hideCompleted} 
          handleSubmit={post} 
          />
        </div>
        <div>
          <TodoList
            list={listContext.sorting==='sort'?list.sort((a, b)=> a.difficulty > b.difficulty ? 1 : -1 ) :list}
            handleComplete={toggleComplete}  
            update={put}  
            deleteItem={deleted} 
          />
        </div>
      </section>
    </>
  );
};
export default ToDo;

/* 


*/