// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsDp1FW53h0qoO_bR56ivJSpIdGreFJdU",
  authDomain: "clone-bonialiko.firebaseapp.com",
  projectId: "clone-bonialiko",
  storageBucket: "clone-bonialiko.appspot.com",
  messagingSenderId: "281551476254",
  appId: "1:281551476254:web:a5592e380b95d462cac00f",
  measurementId: "G-BBB194YWVZ",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { auth, db };
