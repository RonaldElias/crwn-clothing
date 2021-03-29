import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYnxsfzj49-7IvbK_GoiIm-x46NFoH_s8",
    authDomain: "crown-db-863cb.firebaseapp.com",
    projectId: "crown-db-863cb",
    storageBucket: "crown-db-863cb.appspot.com",
    messagingSenderId: "1003820521133",
    appId: "1:1003820521133:web:febbe8b7b7793ad1f91824",
    measurementId: "G-31HVM502LW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  