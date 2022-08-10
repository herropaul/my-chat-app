// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsstf2_jtaR5OYiXVmeT6YmPLVnTdloK4",
  authDomain: "chat-app-cd925.firebaseapp.com",
  projectId: "chat-app-cd925",
  storageBucket: "chat-app-cd925.appspot.com",
  messagingSenderId: "1952439218",
  appId: "1:1952439218:web:7d99edc6b6bb17af08a2ab",
  measurementId: "G-EWE0B5JC2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth}