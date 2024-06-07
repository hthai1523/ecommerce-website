import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKKzsMTmIcTuNKdroNYPpqTvT2dtfpdkI",
  authDomain: "tutorial-8d5a7.firebaseapp.com",
  projectId: "tutorial-8d5a7",
  storageBucket: "tutorial-8d5a7.appspot.com",
  messagingSenderId: "70740181475",
  appId: "1:70740181475:web:38a087dde31d926ceb20d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firebaseDB = getFirestore(app)

export {app, auth, firebaseDB}