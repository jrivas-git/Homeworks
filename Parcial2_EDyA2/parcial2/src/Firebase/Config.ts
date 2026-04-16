import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjwEldnlvfZKaDD61akLyynzCwXFXkUpA",
  authDomain: "fir-act-42845.firebaseapp.com",
  projectId: "fir-act-42845",
  storageBucket: "fir-act-42845.firebasestorage.app",
  messagingSenderId: "599479208049",
  appId: "1:599479208049:web:82a3da1c551f8d60a033d0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
