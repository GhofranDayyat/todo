import React, { useContext,useEffect } from 'react';
import { ListGroup ,Button,Form} from 'react-bootstrap';
import {If ,Then} from 'react-if'
import { useState } from 'react';
import  {ListContext}  from './context/manegerContext';


  function TodoList(props){ 
    const listContext =useContext(ListContext) 
  const [hide,setHide]=useState(false);
  const [id,setId]= useState('')
  const [update,setUpdate]=useState('');
  // const [perScreen , setPerScreen] = useState([])

  let indexOfLastItem = listContext.currentPage * listContext.pagination;
  let indexOfFirstItem = indexOfLastItem - listContext.pagination;
  let currentItem = props.list.slice(indexOfFirstItem, indexOfLastItem)

  const toggle=(id)=>{
    setHide(!hide);
    setId(id)
  }
  const submitUpdate = (e) => {
    e.preventDefault();
    toggle(id);
    props.update(id,update);

  };
  const pageNumbers = [];

  const changePage =(numberP)=>{
  listContext.setCurrentPage(numberP)
  indexOfLastItem = listContext.currentPage * listContext.pagination;
  indexOfFirstItem = indexOfLastItem - listContext.pagination;
  currentItem = props.list.slice(indexOfFirstItem, indexOfLastItem)
  }

  //render  Pagination  incpect to item number
  for (let i = 1; i <= Math.ceil(props.list.length / listContext.pagination); i++) {
    pageNumbers.push(i);
  }
    
  return (
    <ListGroup>
        {currentItem.map((item, inx) => (
        
        
           
          <ListGroup.Item
          action         
          variant={item.complete?'success':'warning'}
          className={`complete-${item.complete}`}
          key={item._id}
          >
            <span      
            onClick={ () => {
               props.handleComplete(item._id);
            }}>
            {item.text}
            </span>
            
            <Button  onClick={()=>toggle(item._id)} >Edit</Button>
            <Button  onClick={()=>props.deleteItem(item)} >X</Button>             

          </ListGroup.Item>      
        ))
        
        }
        
        
      <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => changePage(number)} href='!#' className='page-link'>
              
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
        <If condition={hide===true}>
                <Then>
                    <Form>
                      <Form.Group>
                      <Form.Label>To Do Item</Form.Label>
                      <Form.Control placeholder="update a task text" onChange={(e)=>setUpdate(e.target.value)}/>
                      <Button onClick={submitUpdate}>Submit</Button>
                      </Form.Group>
                    </Form>
                </Then>
            </If>
         {/* <Button variant="secondary" onClick={() => listContext.setCurrentPage(1)}>1</Button>{' '}
         <Button variant="secondary" onClick={() => listContext.setCurrentPage(6)}>2</Button>{' '}
         <Button variant="secondary" onClick={() => listContext.setCurrentPage(9)}>3</Button>{' '} */}
    </ListGroup>
    
    );

  // }
}

export default TodoList;
