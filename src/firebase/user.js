import { firestore, storage } from './config';

export const createUserDocument = async (user) => {
  console.log('this');
  const docRef = firestore.doc(`/users/${user.uid}`);
  console.log('ran');
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address:'',
    city:'',
    state: '',
    zip:'',
    phone:'' ,
    specialty:'',
    ip: ''
  };

  // write to cloud Fire store.
  return docRef.set(userProfile);
};

export const updateUserDocument = async (user) => {
  const docRef = firestore.doc(`/users/${user.uid}`);
  return docRef.update(user);

}

export const uploadImage = (userId, file, progress) => {
  return new Promise((resolve,reject) => {
    //create file reference
    const filePath = `users/${userId}/profile-image`;
    const fileRef = storage.ref().child(filePath)

    // upload tasks
    const uploadTask = fileRef.put(file);
    uploadTask.on(
      'state_changed', 
      (snapshot) => progress(snapshot),
      (error) => reject(error),
      () => {
        resolve(uploadTask.snapshot.ref)
      }
    )
  })
}

export const getDownloadUrl = (userId) => {

 const filePath = `users/${userId}/profile-image`;
 console.log(userId);
 return storage.ref().child(filePath).getDownloadURL()
}