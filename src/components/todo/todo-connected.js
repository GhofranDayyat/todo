import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from './hooks/useAjax.js';
import './todo.scss';
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';



const ToDo = () => {
const [list,hideCompleted,toggleComplete, post, get, put, deleted]=useAjax(todoAPI)
useEffect(() =>{document.title = `${list.filter((item) => !item.complete).length}`},[list]); //happen when list state change


useEffect(get,[]) ///happen after initial render only
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
          list={list}/>
        </div>
        <div>
          <TodoList
            list={list}
            
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