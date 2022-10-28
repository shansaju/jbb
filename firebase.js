// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAXmkpRmvuYPYAkjB-pH_MOukek8YUD4",
  authDomain: "smart-farmer-a2bdd.firebaseapp.com",
  projectId: "smart-farmer-a2bdd",
  storageBucket: "smart-farmer-a2bdd.appspot.com",
  messagingSenderId: "923024299887",
  appId: "1:923024299887:web:165c93c54d93022ec63a9a",
  measurementId: "G-34QEGQ8M1L",
  databaseURL: "https://smart-farmer-a2bdd-default-rtdb.firebaseio.com",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth, app };



