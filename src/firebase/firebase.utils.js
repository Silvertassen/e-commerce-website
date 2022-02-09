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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

      return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      });

      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {});
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;