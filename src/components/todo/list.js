import React from 'react';
import { ListGroup ,Button,Form} from 'react-bootstrap';
import {If ,Then} from 'react-if'
import { useState } from 'react';

// class TodoList extends React.Component {
function TodoList(props){ 
  const [hide,setHide]=useState(false);
  const [id,setId]= useState('')
  const [update,setUpdate]=useState('');

  const toggle=(id)=>{
    setHide(!hide);
    setId(id)
    
  }
  const submitUpdate = (e) => {
    e.preventDefault();
    toggle(id);
    console.log(props);
    props.handleComplete(update);

  };
           return (
    <ListGroup>
    
        {props.list.map(item => (
        

           
          <ListGroup.Item
          action         
          variant={item.complete?'success':'warning'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
            </span>
            
            <Button  onClick={()=>toggle(item)} >Edit</Button>
            <Button  onClick={()=>props.deleteItem(item)} >X</Button>
         

          </ListGroup.Item>      
        ))
        
        }
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
    </ListGroup>
    );
 
  // }
}

export default TodoList;
