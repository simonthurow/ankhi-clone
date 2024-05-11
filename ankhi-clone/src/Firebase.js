import { initializeApp } from "firebase/app";
import{
  getFirestore
}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjTgWiEHO08E3lmii12x5SCSTv7_qxmXU",
  authDomain: "ankhi-clone-3c01d.firebaseapp.com",
  projectId: "ankhi-clone-3c01d",
  storageBucket: "ankhi-clone-3c01d.appspot.com",
  messagingSenderId: "200522436464",
  appId: "1:200522436464:web:6ab4783d3b32774c4f89b5",
  measurementId: "G-L869D2CK79"
};


initializeApp(firebaseConfig);
const db = getFirestore();

export default db;