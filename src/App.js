import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import './pages/Signup';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserProvider } from './firebase/UserProvider';
import Profile from './pages/Profile';
import Main from './pages/Main';
import Calculator from './pages/Calculator';
import Mess from './pages/Mess';
import { ProfileRedirect, LoginRedirect } from './router/ProfileRedirect';
// import LoginRedirect from './router/LoginRedirect';
import PrivateRoute from './router/PrivateRoute';
import AdminRoute from './router/AdminRoute';
import Users from './pages/Users';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <ProfileRedirect exact path="/login" component={Login} />
              <LoginRedirect exact path="/profile/:id" component={Profile} /> 
              <LoginRedirect exact path='/todo/:id' component={Main} /> 
              <LoginRedirect exact path='/users/:id' component={Users} /> 
              <LoginRedirect exact path='/calculator/:id' component={Calculator} /> 
              <LoginRedirect exact path='/mess/:id' component={Mess} /> 
              <Route exact path="/">
                <Redirect to="/login"/>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
