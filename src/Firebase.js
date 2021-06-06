import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA17cOIfJGaspg093jglPNdORZ6jMNEKkw",
    authDomain: "facebook-messenger-clone-30d46.firebaseapp.com",
    projectId: "facebook-messenger-clone-30d46",
    storageBucket: "facebook-messenger-clone-30d46.appspot.com",
    messagingSenderId: "12571193437",
    appId: "1:12571193437:web:4bf7a61707795d1ac01db4",
    measurementId: "G-Y447WHKXL4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;