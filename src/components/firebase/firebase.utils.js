// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config =  {
    apiKey: "AIzaSyC8QQSXmPOt0GWSp5vc-1ILrsEzyr7djOQ",
    authDomain: "crwn-db-665cf.firebaseapp.com",
    projectId: "crwn-db-665cf",
    storageBucket: "crwn-db-665cf.appspot.com",
    messagingSenderId: "684817531977",
    appId: "1:684817531977:web:3a604292150e1b1aac2b98",
    measurementId: "G-6EDEWN67GT"
  };

  export const createUserProfileDocument  = async(userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get() 

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(e){
        console.error("error on while creating user in firestore", e.message)
      }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameter({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


























