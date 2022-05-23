// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNbRyRcySqim6USIUZY3Q5K5aFP6ZbO-A",
  authDomain: "almacenamientotiendapudin.firebaseapp.com",
  projectId: "almacenamientotiendapudin",
  storageBucket: "almacenamientotiendapudin.appspot.com",
  messagingSenderId: "147838257401",
  appId: "1:147838257401:web:389219adb25006f796fa28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;
