import React from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';

const LoginRedirect = ({component: Component,...rest}) => {
    const {user} = useSession()
    console.log(rest);
    return(
        <Route 
            {...rest}
            render={(props)=> 
                user ? (<Component {...props}/> )
                :
                (
                    <Redirect to={
                        {
                            pathname:"/login",
                            state: {from: props.location}
                        }
                    }/>
                ) 
            }
        />
    )
}


export default LoginRedirect