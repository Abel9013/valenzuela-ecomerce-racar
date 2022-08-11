// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKdyiOLr2UY7gb0sJkqLc5DMQlWhObkuc",
  authDomain: "racar-proyecto.firebaseapp.com",
  projectId: "racar-proyecto",
  storageBucket: "racar-proyecto.appspot.com",
  messagingSenderId: "950336823051",
  appId: "1:950336823051:web:b75dff38298fd1bf09cc0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConections = () => app;
