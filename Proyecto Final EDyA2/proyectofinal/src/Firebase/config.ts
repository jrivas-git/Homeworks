import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKdrXCKn9QEQoqzvJkCixnOOSxneO4jpA",
  authDomain: "proyectofinal-a4844.firebaseapp.com",
  projectId: "proyectofinal-a4844",
  storageBucket: "proyectofinal-a4844.firebasestorage.app",
  messagingSenderId: "651977938280",
  appId: "1:651977938280:web:b1fd715245390b7e63b2dd",
  measurementId: "G-PNR8Z3MVEF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);