import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCx36v0nStihZvBLov6hM6Yq4vzwYU6krM",
    authDomain: "crwn-db-437fe.firebaseapp.com",
    projectId: "crwn-db-437fe",
    storageBucket: "crwn-db-437fe.appspot.com",
    messagingSenderId: "672407530906",
    appId: "1:672407530906:web:24b804135eed085b411e23",
    measurementId: "G-BQQ3MKHSRZ"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;