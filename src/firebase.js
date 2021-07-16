import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMFiIPc1wW3yj-J6yLyYSjHZ4voN0820",
  authDomain: "snapchat-clone-bb3e6.firebaseapp.com",
  projectId: "snapchat-clone-bb3e6",
  storageBucket: "snapchat-clone-bb3e6.appspot.com",
  messagingSenderId: "356495836403",
  appId: "1:356495836403:web:a129b80afa456b47c0a386",
  measurementId: "G-FMJ51BR659",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
