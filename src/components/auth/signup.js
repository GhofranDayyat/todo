import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../context/authContext.js';
import { If, Then } from 'react-if';
import { Form ,Button} from 'react-bootstrap';



function Signup(props) {
    const authContext = useContext(AuthContext) // to access context in func .... in class use static property 
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [role , setRole] = useState('user')
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onHide()
        console.log(e.target.role.value);
        authContext.signup(username, password, email , e.target.role.value)

}

const handelChange=(e)=>{
  if (e.target.name === 'username') {
        setUsername(e.target.value)
    }else if(e.target.name === 'password'){
        setPassword(e.target.value)
    }else if(e.target.name === 'email'){
        setEmail(e.target.value)

    }else if(e.target.name === 'role'){
        setRole(e.target.value)
    }
}

    return(
        <>
        <If condition={!authContext.logged}>
            <Then>

                <Form onSubmit={handleSubmit} >
                <Form.Group>
                <Form.Label>UserName</Form.Label>
                    <Form.Control 
                    type='text' 
                    name='username'
                    onChange={handelChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label> 
                    <Form.Control 
                    type='password'
                    name='password'
                    onChange={handelChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>E-mail</Form.Label> 
                    <Form.Control 
                    type='email'
                    name='email'
                    onChange={handelChange}/>
                </Form.Group>

                <Form.Group>
                <Form.Label>Role</Form.Label> 
                    <Form.Control 
                    name='role' as='select'
                    >
                        <option value='admin'>Admin</option>
                        <option value='user'>User</option>
                        <option value='editor'>Editor</option>
                    </Form.Control>
                </Form.Group>
                <Button  variant='info' type='submit'>Sign  Up</Button>
                </Form>

            </Then>
        </If>
        </>
    )
}

export default Signup;