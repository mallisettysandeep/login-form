import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZEulpLoptP2mIW_r9aXsbd1CE2FEEWHU",
    authDomain: "auth-139b6.firebaseapp.com",
    projectId: "auth-139b6",
    storageBucket: "auth-139b6.appspot.com",
    messagingSenderId: "1352467692",
    appId: "1:1352467692:web:187dd3316d2b85a4b8d1c9",
    measurementId: "G-72VNW8MH1S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;