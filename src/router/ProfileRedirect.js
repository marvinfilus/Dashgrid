import React from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';

export const ProfileRedirect = ({component: Component, ...rest}) => {
  const { user } = useSession()

  return(
    <Route
      {...rest} 
      render={(props)=> 
        !user ?  (<Component {...props} />) 
        : 
        (<Redirect to={
            { 
              pathname: `/profile/${user.uid}`,
              state: {from: props.match}
              
            }
          } /> )}>
        </Route>
  )
};

export const LoginRedirect = ({component: Component,...rest}) => {
  const {user} = useSession();
  console.log(rest.location)
  return(
      <Route 
          {...rest}
          render={(props)=> 
           { const id = props.match.params.id;
             if (user && user.uid === id) 
             {return <Component {...props}/> }
              else
              {return(
                  <Redirect to={
                      {
                          pathname:"/login",
                          state: {from: props.match.params}
                      }
                  }/>
  )}
          }}
      />
  )
}

