import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import  App from './app.js';
import ListProvider from './context/manegerContext';
import AuthProvider from './context/authContext.js';

function Main (){
return(
    <AuthProvider>
      <ListProvider>
        <App/>
      </ListProvider>
    </AuthProvider>
      



)

}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
