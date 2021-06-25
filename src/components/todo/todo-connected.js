import React, { useContext, useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from './hooks/useAjax.js';
import './todo.scss';
import  {ListContext}  from './context/manegerContext';
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
const [list,setList,hideCompleted,toggleComplete, post, get, put, deleted]=useAjax(todoAPI)
const listContext=useContext(ListContext)

useEffect(() =>{document.title = `${list.filter((item) => !item.complete).length}`},[list]); //happen when list state change
useEffect(get,[]) //happen with initial render
useEffect(get,[listContext.sorting]);

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