import firebase from 'firebase/app';
import 'firebase/auth';
// import Login from '../pages/Login';
import { createUserDocument  } from './user';

export const signup = async ({ firstName, lastName, email, password}) => {
  const resp = await firebase.auth().createUserWithEmailAndPassword(email,password);
  const user = await resp.user;
  console.log(user);
  await user.updateProfile({ displayName:`${firstName} ${lastName}`});
  console.log('this');
  await createUserDocument(user);
  console.log('ran');
  return user;
  
}

export const logout = () => {
  return firebase.auth().signOut();
}

export const login = async ({ email , password}) => {
  const resp = await firebase.auth().signInWithEmailAndPassword(email,password);

  return(resp.user);
};