import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDS62TKlek4tqTJadD8tHBR4SCTr4D6WWI",
  authDomain: "jimswd.firebaseapp.com",
  projectId: "jimswd",
  databaseURL: "jimswd.appspot.com",
  storageBucket: "jimswd.appspot.com",
  messagingSenderId: "524753032159",
  appId: "1:524753032159:web:fdb7fa5c7dc41eb9e12a6a",
  measurementId: "G-W58BMRVRNS"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
