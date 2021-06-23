import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js';
import ListProvider from './components/todo/context/manegerContext';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }
function Main (){
return(
  
  <ListProvider>
    <App/>
  </ListProvider>

)

}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
