import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDHfMs0Kyz22yag2s8P5QZ7mzb3L6W8Hao",
  authDomain: "clone-dc0c9.firebaseapp.com",
  projectId: "clone-dc0c9",
  storageBucket: "clone-dc0c9.appspot.com",
  messagingSenderId: "1063286757663",
  appId: "1:1063286757663:web:8c72ef5c5d8db870cff82a",
  measurementId: "G-PC7M81RP1R"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };