import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext'
import {If} from 'react-if'

function Auth (props){
    const authContext = useContext(AuthContext)
    let authTolog;
    console.log(authContext.action,'=======================');
    if (!authContext.action) {
        if (authContext.user) {
            authTolog=  authContext.logged && props.capability?authContext.user.capabilities.includes(props.capability): false
            console.log(authTolog); 
        }

    }else{
        authTolog=  authContext.logged && props.capability? authContext.action.includes(props.capability): false

    }


    return (
        <>
        <If condition={authTolog}>{props.children}</If>
        <If condition={props.capability==='guest' && !authContext.logged}>{props.children}</If>
        </>

    )
}

export default Auth;
