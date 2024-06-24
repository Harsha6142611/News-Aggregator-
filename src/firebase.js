// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc_5c_kifHsQpJl43kgMlTLciTTkCEJ9w",
  authDomain: "login-4e5bf.firebaseapp.com",
  projectId: "login-4e5bf",
  storageBucket: "login-4e5bf.appspot.com",
  messagingSenderId: "492624027559",
  appId: "1:492624027559:web:9c3eae629c7f517b2aa082",
  measurementId: "G-MSWE7FDEKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;