// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCnyiomUbD3bANyxwlt6SMiDsqX8XSlwew",
  authDomain: "react-journal-app-a6818.firebaseapp.com",
  projectId: "react-journal-app-a6818",
  storageBucket: "react-journal-app-a6818.appspot.com",
  messagingSenderId: "875083845688",
  appId: "1:875083845688:web:4ca317f24a71786e42d6cd"
};


// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );