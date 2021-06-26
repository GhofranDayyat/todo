import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState,useEffect } from 'react';
import {Card, Container,ProgressBar, Col, Row} from 'react-bootstrap'
function ToDo (props){
const [list,setList]= useState([])

  const addItem = (item) => {
    item._id = (parseInt)(Math.random()*100);;
    item.complete = false;
    setList( [...list, item]);
  };


  const deleteItem=(id)=>{
    console.log(list);
    let deletedList = list.filter(el=>id!==el._id)
    setList(deletedList)
    console.log(deletedList);
    console.log(list);
  };


  const editeItem = (id, newUpdate) => {
    let item = list.filter(i => i._id === id)[0] || {};
    console.log(item);
    if (item._id) {
      item.text = newUpdate;
      let updatelist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatelist);
    }
  }

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updatelist = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatelist);
    }

  };

  const toDoList=()=> {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  }
  useEffect(
    () =>{
      document.title = `${
        list.filter((item) => !item.complete).length
        
      }`
    },[list]
    
    );
    useEffect(toDoList,[])
    
    return (
      <>
        <Container>
          <Row>
            <Col>
            <Card>
            <Card.Body>
            <Card.Title as='h2'>To Do List Manager({list.filter(item => !item.complete).length})</Card.Title>
              
              <ProgressBar/>
                  <ProgressBar variant='success' now={
                    list.filter((item) => item.complete).length / list.length * 100
                  } label={`Completed Items: ${
                    list.filter((item) => item.complete).length
                  }%`} />

                  <ProgressBar
                  variant="info"
                  now={
                    list.filter((item) => !item.complete).length * list.length * 100
                  }
                  label={`To Do: ${list.filter((item) => !item.complete).length}`}
                />          
          
          </Card.Body>
            </Card>            
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
            <TodoForm handleSubmit={addItem} />
              </Card>
            </Col>
            <Col>
              <Card>
                <TodoList
                list={list}
                handleComplete={toggleComplete} deleteItem={deleteItem} editeItem={editeItem}
              />
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  // }
}

export default ToDo;



// import React from 'react';
// import TodoForm from './form.js';
// import TodoList from './list.js';

// import './todo.scss';

// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//   }

//   addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     this.setState({ list: [...this.state.list, item]});
//   };

//   toggleComplete = id => {

//     let item = this.state.list.filter(i => i._id === id)[0] || {};

//     if (item._id) {
//       item.complete = !item.complete;
//       let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
//       this.setState({list});
//     }

//   };

//   componentDidMount() {
//     let list = [
//       { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
//       { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
//       { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
//       { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
//       { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
//     ];

//     this.setState({list});
//   }

//   render() {
//     return (
//       <>
//         <header>
//           <h2>
//             {console.log(this.state.list,'//////////////////////////////')}
//           There are {this.state.list.filter(item => !item.complete).length} Items To Complete
//           </h2>
//         </header>

//         <section className="todo">

//           <div>
//             <TodoForm handleSubmit={this.addItem} />
//           </div>

//           <div>
//             <TodoList
//               list={this.state.list}
//               handleComplete={this.toggleComplete}
//             />
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default ToDo;
