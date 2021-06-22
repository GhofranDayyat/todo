import React from 'react';
import {useState} from 'react'
import {Button,Form,Card} from 'react-bootstrap';
import useForm from './hooks/useForm';

function TodoForm (props){
  const [handleInputChange, handleSubmit ] = useForm(props)

    return (
      <>
      <Card.Header as='h3'>Add Item</Card.Header>
      {/* <Card.Body> */}
      <Form onSubmit={handleSubmit} >
          <Form.Group>
          <Form.Label>To Do Item</Form.Label>
              <Form.Control name="text" placeholder="Add To Do List Item" onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group>
          <Form.Label>Difficulty Rating </Form.Label> 
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>

          <Button type='submit' onClick={props.editItem}>Add Item</Button>
        </Form>

      {/* </Card.Body> */}
      </>
    );

}

export default TodoForm;






;





// import React from 'react';

// class TodoForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { item: {} };
//   }
//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     this.props.handleSubmit(this.state.item);
//     const item = {};
//     this.setState({item});
//   };

//   render() {
//     return (
//       <>
//         <h3>Add Item</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>To Do Item</span>
//             <input
//               name="text"
//               placeholder="Add To Do List Item"
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <label>
//             <span>Difficulty Rating</span>
//             <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//           </label>
//           <label>
//             <span>Assigned To</span>
//             <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//           </label>
//           <button>Add Item</button>
//         </form>
//       </>
//     );
//   }
// }

// export default TodoForm;
