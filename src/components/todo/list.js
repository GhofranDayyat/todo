import React from 'react';
import { ListGroup } from 'react-bootstrap';
// class TodoList extends React.Component {
function TodoList(props){
  // render() {
           return (
    <ListGroup>
    
        {props.list.map(item => (
          <ListGroup.Item
          action
          
          variant={item.complete?'success':'warning'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          onClick={() => props.handleComplete(item._id)}
          >
            {item.text}

          </ListGroup.Item>
          
  
          
        ))}
     
    </ListGroup>
    );
 
  // }
}

export default TodoList;
