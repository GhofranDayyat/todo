import React from 'react';

import ToDo from './components/todo/todo.js';
import ToDoConnect from './components/todo/todo-connected.js'
// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <ToDo />
//       </>
//     );
//   }
// }

export default function App(){
  return(
    <>
      {/* <ToDo /> */}
      <ToDoConnect/>
    </>
  )
}
