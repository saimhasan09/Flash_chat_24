// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDcKEMv_aORnuJuNBeQ_RyLnwBADmwef-Y",
  authDomain:"flash-chat24-6dbad.firebaseapp.com",
  databaseURL: "http://flash-chat24-6dbad.firebaseio.com",
  projectId: "flash-chat24-6dbad",
  storageBucket:"flash-chat24-6dbad.appspot.com",
  messagingSenderId: 939694997963,
  appId:"1:939694997963:web:24cbbc39ff0fe6450c364e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
