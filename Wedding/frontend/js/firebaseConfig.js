// js/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "andyleos-wedding.firebaseapp.com",
  projectId: "andyleos-wedding",
  storageBucket: "andyleos-wedding.appspot.com",
  messagingSenderId: "xxxx",
  appId: "tu-app-id"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
