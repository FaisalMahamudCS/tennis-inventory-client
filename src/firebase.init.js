// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbK3CSlvewbh9Cr9MMSzqOTx4rEVQoM1s",
  authDomain: "sports-gear-inventory.firebaseapp.com",
  projectId: "sports-gear-inventory",
  storageBucket: "sports-gear-inventory.appspot.com",
  messagingSenderId: "369361677276",
  appId: "1:369361677276:web:df3cd3b3beadf27031bd19",
  measurementId: "G-XLT5L8KF2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;