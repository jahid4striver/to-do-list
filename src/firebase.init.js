// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzlRHLev2L9OGqJuzvHQOTp90qC7pN6c8",
  authDomain: "to-do-list-fab42.firebaseapp.com",
  projectId: "to-do-list-fab42",
  storageBucket: "to-do-list-fab42.appspot.com",
  messagingSenderId: "586284926179",
  appId: "1:586284926179:web:87c5d7083facb7eea1f1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;