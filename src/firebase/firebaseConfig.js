// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM5ZvIyAMD6axivjEb3ncoivdS53Zgx8o",
  authDomain: "psycare-af97b.firebaseapp.com",
  projectId: "psycare-af97b",
  storageBucket: "psycare-af97b.appspot.com",
  messagingSenderId: "774954868612",
  appId: "1:774954868612:web:a58b834037d2543df207d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Realtime Database and get a reference to the service
const realtimeDB = getDatabase(app);

export default db;
