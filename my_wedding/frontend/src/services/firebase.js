// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsHYwnblz4O1xvEhDCl4X6xUD3aaOIq8Y",
  authDomain: "myweadding-8d105.firebaseapp.com",
  projectId: "myweadding-8d105",
  storageBucket: "myweadding-8d105.firebasestorage.app",
  messagingSenderId: "614711066157",
  appId: "1:614711066157:web:7adb8597a9c16421c202a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
