import React from 'react';
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken' 
import base64 from 'base-64'

import { useState,useEffect } from 'react';
import superagent from 'superagent';
import axios from 'axios';


const Api_Server = 'https://api-js401.herokuapp.com';
const SECRET=process.env.SECRET||'supersecret'


export const AuthContext = React.createContext(); // imported ==> usecontext


function AuthProvider (props){
    const [logged , setLogged] = useState(false);
    const [user , setUser] = useState({});
    const [error, setError] = useState(false);



    useEffect(()=>{
        const token = cookie.load('auth-token') //read cookie from browser
        validateToken(token)
    },[])


    const validateToken = (token)=>{
        const user = jwt.decode(token); //||jwt.verify(token,SECRET) 
        if(user){
            setAuthState(true, user, token)
        }
    }
    const setAuthState=(logged, user , token)=>{
        setLogged(logged);
        setUser(user)
        cookie.save('auth-token', token);
    }
    const logout=()=>{
        setLogged(false, null , {})
    }
    
    const signup =async (username , email , password , role)=>{
        try{
            const res = await superagent.post(`${Api_Server}/signup`, {username, email ,password, role})
                validateToken(res.body.token);
        }catch(e){
                console.error('Signup Error', error.message)
                setError(true)
        }
    }

    // loging with superagent
    // try {
        //     const response = await superagent
        //       .post(`${Api_Server}/signin`)
        //       .set('authorization', `Basic ${encoded}`);
        //     validateToken(response.body.token);
        //   } catch (e) {
        //     console.error('Signin Error', e.message);
        //     setError(true);
        //   }

    const login = async(username , password)=>{
        
        // // send username:password encoded -> add them to the Authorization header
        // // prefixed with Basic XXXencoded_valueXXX
        const encoded = base64.encode(`${username}:${password}`);
        const result = await fetch(`${Api_Server}/signin`, {
            method: 'post',
            headers: {Authorization: `Basic ${encoded}`}
        });
        
        console.log(result,'------------------');
        let data = await result.json();
        validateToken(data.token);
        // // verify ==> with the secret
        // // decode ==> does not need the secret   
    }


    const state = {
        logged,
        user,
        logout,
        signup,
        login
    }
    return(
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; // wrap parent 