import React from 'react';
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken' 
import base64 from 'base-64'

import { useState,useEffect } from 'react';
import superagent from 'superagent';
import axios from 'axios';


const Api_Server ='https://api-js401.herokuapp.com'
//'https://auth-server-401.herokuapp.com'; //'https://api-js401.herokuapp.com';


export const AuthContext = React.createContext(); // imported ==> usecontext


function AuthProvider (props){
    const [logged , setLogged] = useState(false);
    const [user , setUser] = useState({});
    const [action, setAction] = useState([]);
    const [e, setError] = useState(false);



    useEffect(()=>{
        const token = cookie.load('auth') //read cookie from browser
        console.log(token,'befor');
        validateToken(token)
        console.log('after',token);
    },[])


    const validateToken = (token)=>{
        const getUser = jwt.decode(token); //||jwt.verify(token,SECRET)
        if(getUser){
            // setUser(getUser.getUser)
            setAuthState(true, getUser, token,action)
        }
    }
    const setAuthState=(logged, newUser , token,newAction)=>{
        setLogged(logged);
        setUser(newUser)
        setAction(newAction)
        cookie.save('auth', token);


    }
    const logout=()=>{
        setAuthState(false, null , {})
    }
    
    const signup =async (username , email , password , role)=>{
        try{
                let check = true;
                let toDo= await axios({
                    method: "post",
                    url: `${Api_Server}/signup`,
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: { 'Content-Type': 'application/json' },
                    data: {username , email , password , role},
                }).catch(e => check = check= false )

                setUser(toDo.data.user)
                setLogged(true);
                setAction(toDo.data.user.acl.capabilities)

                if(toDo.data && check) {
                    setLogged (true)
                    alert('Successful SingUp, Now Login by the form above ')
                } else {
                    setLogged (false)
                    alert('UnSuccessful SingUp, try again with new username')
                }
            
        }catch(e){
                console.error('Signup Error', e.message)
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
        
        // 1 // send username:password encoded -> add them to the Authorization header
        // 2 // prefixed with Basic XXXencoded_valueXXX
  
        // 3 // verify ==> with the secret
        // 4 // decode ==> does not need the secret   

        const encoded =  base64.encode(`${username}:${password}`)
        const results = await fetch(`${Api_Server}/signin`, {
            method: 'post',
            headers: {Authorization: `Basic ${encoded}`}
        })
        let data = await results.json()
        console.log(data);
        validateToken(data.token)
        if(!data.token) alert('Invalid LogIn') 

    }


    const state = {
        logged,
        user,
        logout,
        signup,
        login,
        action,

        setAction
        
    }
    return(
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; // wrap parent 