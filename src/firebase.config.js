// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZOQaqDFEfYfM1QLSupVdEVDl0jEAHS0",
  authDomain: "house-market-7937d.firebaseapp.com",
  projectId: "house-market-7937d",
  storageBucket: "house-market-7937d.appspot.com",
  messagingSenderId: "259713145311",
  appId: "1:259713145311:web:a144032fd045ea039e8c6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
