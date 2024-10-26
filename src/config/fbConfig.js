import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import for Realtime Database
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbRqrU0PQBMd-ny6VsuH3xhhhxWTKvb-Q",
    authDomain: "yonatan-keep-it-on.firebaseapp.com",
    projectId: "yonatan-keep-it-on",
    storageBucket: "yonatan-keep-it-on.appspot.com",
    messagingSenderId: "18283961276",
    appId: "1:18283961276:web:0c8685c85baa0800a2e9b9",
    measurementId: "G-559N1KPMK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };
