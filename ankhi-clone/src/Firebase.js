import { initializeApp } from "firebase/app";
import{
  getFirestore
}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};


initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
