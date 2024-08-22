
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC06tBgNmBJC1FXfOvWA59H3RLhdgzrDjs",
  authDomain: "project-626b5.firebaseapp.com",
  projectId: "project-626b5",
  storageBucket: "project-626b5.appspot.com",
  messagingSenderId: "381049394720",
  appId: "1:381049394720:web:a20ca04444328b4acb4e45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const database = getFirestore(app);
