import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../context/authContext.js';
import { If, Then } from 'react-if';
import { Form ,Button} from 'react-bootstrap';
import {ListContext} from  '../../context/manegerContext.js';


function Login(props) {
const authContext = useContext(AuthContext) // to access context in func .... in class use static property 

const [username , setUsername] = useState('');
const [password , setPassword] = useState('')



const handelRegister=(e)=>{
  e.preventDefault();
  props.onHide()
  authContext.login(username , password )
}

const handelChange=(e)=>{
    if (e.target.name === 'username') {
        setUsername(e.target.value)
    }else{
        setPassword(e.target.value)
    }
}



    


    return(
        <>
        <If condition={!authContext.logged}>
            <Then>

                <Form  >
                <Form.Group>
                <Form.Label>username</Form.Label>
                    <Form.Control 
                    type='text' 
                    name='username'
                    onChange={handelChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>password</Form.Label> 
                    <Form.Control 
                    type='password'
                    name='password'
                    onChange={handelChange}/>
                </Form.Group>
                <Button onClick={handelRegister} type='submit'>SignIn</Button>

                </Form>
            </Then>
        </If>
        </>
    )
}

export default Login;